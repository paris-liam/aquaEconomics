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
          sys { 
            id
          }
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
  }
  date
  shortSummary {
    json
    links {
      assets {
        block {
          sys { 
            id
          }
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
  }
  `: ``}
`

export const SEARCH_PRODUCT_BY_TITLE_GRAPHQL_FIELDS = (title: string) => `
query {
  projectCollection(limit: 1, where: {
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
      title
      categoryId
      shortDescription {
        json
      }
      categoryDescription {
        json
        links {
          assets {
            block {
              sys {
                id
              }
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
        links {
          assets {
            block {
              sys {
                id
              }
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
      }
      groupId
    }
  }
}`

export const QUOTES_GRAPHQL_FIELDS = `query {
  quoteCollection {
    items {
      quote
    }
  }
}`