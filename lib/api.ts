import { Url } from "next/dist/shared/lib/router/router";
import { PROJECT_GRAPHQL_FIELDS, SERVICES_GRAPHQL_FIELDS, SERVICE_CATEGORIES_GRAPHQL_FIELDS, SLIDE_GRAPHQL_FIELDS, SEARCH_PRODUCT_BY_TITLE_GRAPHQL_FIELDS, QUOTES_GRAPHQL_FIELDS } from "./queries";
import { ContentfulProjectsPayload, ContentfulQuotePayload, ContentfulServiceCategoriesPayload, ContentfulServicesPayload, ContentfulSlideInfoPayload, Project, Quote, Quotes, ServiceCategory, SlideInfo } from "./types";
import { formatLink } from "./constants";

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
    const { title, headerImage, highlight } = project;
    return {
      title, headerImage, highlight
    }
  })
}

function extractAndSortServiceList(services: ContentfulServicesPayload, categories: ContentfulServiceCategoriesPayload): ServiceCategory[] {
  const formattedCategories = extractCategories(categories);
  const serviceList = services.data.serviceCollection.items.map((service) => ({
    ...service,
    anchor: `${formatLink(service.title)}`
  }))
  formattedCategories.forEach((category: ServiceCategory) => {
    const { categoryId } = category
    category.services = serviceList.filter((service) => categoryId === service.groupId)
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
    const { title, categoryDescription, shortDescription, categoryId } = serviceCategory
    return {
      title,
      shortDescription,
      categoryDescription,
      categoryId,
      anchor: `${formatLink(title)}`
    }
  })
}


function extractQuotes (quotes: ContentfulQuotePayload) {
  
  return quotes.data.quoteCollection.items.map((quote: Quote) => quote.quote)
}

export async function getSlideInfo(slideID: string): Promise<SlideInfo> {
  const slideInfoPayload = await fetchGraphQL(SLIDE_GRAPHQL_FIELDS(slideID))
  return extractSlideInfo(slideInfoPayload)
}

export async function getProjectData(projectTitlePath: string): Promise<Project> {
  const formattedPath = decodeURIComponent(projectTitlePath.split('-').join(' '));
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

export async function getAllQuotes(): Promise<Quote[]> {

  const quotes = await fetchGraphQL(QUOTES_GRAPHQL_FIELDS)


  return extractQuotes(quotes)
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

  return projects.data.projectCollection.items.map((project:Project) => ({
      params: {
        projectName: formatLink(project.title),
      }
  }))
}