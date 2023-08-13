export const PROJECT_GRAPHQL_FIELDS = `      
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
  highlight 
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