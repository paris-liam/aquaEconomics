import {PROJECT_GRAPHQL_FIELDS,  SERVICES_GRAPHQL_FIELDS, SERVICE_CATEGORIES_GRAPHQL_FIELDS, SLIDE_GRAPHQL_FIELDS } from "./queries";

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

function extractProjectEntries(projectPayload) {
  return projectPayload.data?.projectCollection?.items?.map((project) => {
    const {title, description, headerImage} = project;
    return {
      title, description, headerImage
    }
  })
}

function extractAndSortServiceList(services, categories) {
  const formattedCategories = extractCategories(categories)
   formattedCategories.forEach((category) => {
    const { categoryId } = category
    category.services = services.data.serviceCollection.items.filter((service) => categoryId === service.groupId) 
  })
  return formattedCategories
}

function extractSlideInfo(slideInfoPayload) {
  const {title, description, contentImagesCollection, backgroundImage} = slideInfoPayload.data.slideInfo

  return {
    title,
    description,
    contentImagesCollection,
    backgroundImage
  }
}

function extractCategories(categories) {
  return categories?.data?.servicesCategoriesCollection?.items?.map((serviceCategory) => {
    const {category, description, categoryId} = serviceCategory
    return {
      category,
      description,
      categoryId
    }
  })
}

export async function getSlideInfo(slideID) {
  const slideInfoPayload = await fetchGraphQL(SLIDE_GRAPHQL_FIELDS(slideID))
    return extractSlideInfo(slideInfoPayload)
}

export async function getProjectData(projectTitle) {
  
  const projects = await getAllProjects()
  console.warn(decodeURI(projectTitle).split("-").join(" ").trim().toLowerCase())
  return projects.projects.filter((project) => {
     return project.title.trim().toLowerCase() === decodeURI(projectTitle).split("-").join(" ").trim().toLowerCase()
  })[0];
}

export async function getAllServiceCategories() {

  const categories = await fetchGraphQL()

  return extractCategories(categories)
}

export async function getAllServices() {

  const categories = await fetchGraphQL(SERVICE_CATEGORIES_GRAPHQL_FIELDS)

  const services = await fetchGraphQL(SERVICES_GRAPHQL_FIELDS)

  return extractAndSortServiceList(services, categories)
}

export async function getAllProjects() {
  const entries = await fetchGraphQL(`query{
    projectCollection {
      items {
        ${PROJECT_GRAPHQL_FIELDS}
      }
    }
  }`)
  return {
    projects: extractProjectEntries(entries)
  }
}

export async function getHighlightedProjects() {
  const highlightedProjects = await fetchGraphQL(`query{
    projectCollection(where: {highlight: true}, limit:5) {
      items {
        ${PROJECT_GRAPHQL_FIELDS}
      }
    }
  }`)
  return extractProjectEntries(highlightedProjects)
}

export async function generateProjectPaths() {
  const projects = await fetchGraphQL(`query{
    projectCollection {
      items {
        ${PROJECT_GRAPHQL_FIELDS}
      }
    }
  }`)
  return projects.data.projectCollection.items.map((project) => {
    let formatted = project?.title?.toLowerCase().trim().replace(/[^0-9a-zA-Z_\s]+/g, '').split(' ').join('-');
    return {
      params: {
        projectName: encodeURIComponent(formatted),
      }
    }
  })
}