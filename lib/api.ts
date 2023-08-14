import { Url } from "next/dist/shared/lib/router/router";
import { PROJECT_GRAPHQL_FIELDS, SERVICES_GRAPHQL_FIELDS, SERVICE_CATEGORIES_GRAPHQL_FIELDS, SLIDE_GRAPHQL_FIELDS, SEARCH_PRODUCT_BY_TITLE_GRAPHQL_FIELDS } from "./queries";
import { ContentfulProjectsPayload, ContentfulServiceCategoriesPayload, ContentfulServicesPayload, ContentfulSlideInfoPayload, Project, ServiceCategory, SlideInfo } from "./types";

async function fetchGraphQL(query: string) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

function extractProjectEntries(projectPayload: ContentfulProjectsPayload): Project[] {
  return projectPayload.data?.projectCollection?.items?.map((project) => {
    const { title, description, headerImage, highlight } = project;
    return {
      title, description, headerImage, highlight
    }
  })
}

function extractAndSortServiceList(services: ContentfulServicesPayload, categories: ContentfulServiceCategoriesPayload): ServiceCategory[] {
  const formattedCategories = extractCategories(categories)
  formattedCategories.forEach((category: ServiceCategory) => {
    const { categoryId } = category
    category.services = services.data.serviceCollection.items.filter((service) => categoryId === service.groupId)
  })
  return formattedCategories
}

function extractSlideInfo(slideInfoPayload: ContentfulSlideInfoPayload): SlideInfo {
  const { title, description, contentImagesCollection, backgroundImage } = slideInfoPayload.data.slideInfo

  return {
    title,
    description,
    contentImagesCollection,
    backgroundImage
  }
}

function extractCategories(categories: ContentfulServiceCategoriesPayload) {
  return categories?.data?.servicesCategoriesCollection?.items?.map((serviceCategory: ServiceCategory) => {
    const { category, categoryDescription, categoryId } = serviceCategory
    return {
      category,
      categoryDescription,
      categoryId
    }
  })
}

export async function getSlideInfo(slideID: string): Promise<SlideInfo> {
  const slideInfoPayload = await fetchGraphQL(SLIDE_GRAPHQL_FIELDS(slideID))
  return extractSlideInfo(slideInfoPayload)
}

export async function getProjectData(projectTitlePath: string): Promise<Project> {
  const formattedPath = projectTitlePath.split('-').join(' ');
  const projects = await fetchGraphQL(SEARCH_PRODUCT_BY_TITLE_GRAPHQL_FIELDS(formattedPath))
  return projects?.data?.projectCollection?.items[0] || []
}


export async function getAllServices(): Promise<ServiceCategory[]> {

  const categories = await fetchGraphQL(SERVICE_CATEGORIES_GRAPHQL_FIELDS)

  const services = await fetchGraphQL(SERVICES_GRAPHQL_FIELDS)

  return extractAndSortServiceList(services, categories)
}

export async function getAllProjects(): Promise<Project[]> {
  const entries = await fetchGraphQL(`query{
    projectCollection {
      items {
        ${PROJECT_GRAPHQL_FIELDS(false)}
      }
    }
  }`)
  return extractProjectEntries(entries)
}

export async function getHighlightedProjects(): Promise<Project[]> {
  const highlightedProjects = await fetchGraphQL(`query{
    projectCollection(where: {highlight: true}, limit:5) {
      items {
        ${PROJECT_GRAPHQL_FIELDS(false)}
      }
    }
  }`)
  return extractProjectEntries(highlightedProjects)
}

export async function generateProjectPaths():Promise<Url[]> {
  const projects = await fetchGraphQL(`query{
    projectCollection {
      items {
        ${PROJECT_GRAPHQL_FIELDS(false)}
      }
    }
  }`)
  return projects.data.projectCollection.items.map((project:Project) => {
    let formatted = project?.title?.trim().split(' ').join('-');
    return {
      params: {
        projectName: encodeURIComponent(formatted),
      }
    }
  })
}