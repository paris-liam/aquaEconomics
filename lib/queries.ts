export const PROJECT_GRAPHQL_FIELDS = (singleProject:boolean) =>  `      
  title
  highlight 
  headerImage {
    title
    description
    url
    width
    height
  }
  ${singleProject ? `  description {
    json
    links {
      assets {
        block {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
      }
    }
  }`: `description { 
    json
  }`}
`

export const SEARCH_PRODUCT_BY_TITLE_GRAPHQL_FIELDS = (title: string) => `
query {
  projectCollection(where: {
        AND: [
      {
        OR: [
          { title: "${title}" },
        ]
      },
    ],
  }) {
    items{
      ${PROJECT_GRAPHQL_FIELDS(true)}
    }
  }
}
`

export const SLIDE_GRAPHQL_FIELDS = (id: string) =>`query {
  slideInfo(id:"${id}") {
    title
    description {
      json
    }
    contentImagesCollection {
      items {
        title
        description
        url
        width
        height
      }
    }
    backgroundImage {
      title
      description
      url
      width
      height
    }
  }
}`

export const SERVICE_CATEGORIES_GRAPHQL_FIELDS = `query {
  servicesCategoriesCollection{
    items {
      category
      categoryId
      categoryDescription {
        json
      }
    }
  }
}`

export const SERVICES_GRAPHQL_FIELDS = `query {
  serviceCollection {
    items {
      title
      headerImage {
        title
        description
        url
        width
        height
      }
      description {
        json
      }
      groupId
    }
  }
}`