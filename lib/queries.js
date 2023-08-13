export const PROJECT_GRAPHQL_FIELDS = `      
  title
  headerImage {
    title
    description
    contentType
    fileName
    size
    url
    width
    height
  }
  description {
    json
  }
  highlight 
  sys {
    id
  }
`

export const SLIDE_GRAPHQL_FIELDS = (id) =>
`query{
    slideInfo(id:"${id}"){
        title
        description {
          json
        }
      contentImagesCollection {
        items {
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
      backgroundImage{
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

export const SERVICES_GRAPHQL_FIELDS = `query{
    serviceCollection {
      items {
        title
        headerImage {
          title
          description
          contentType
          fileName
          size
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