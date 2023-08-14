import { Document } from '@contentful/rich-text-types';
export type ContentfulImagePayload = {
    title: string
    description: string
    fileName: string
    url: string
    width: number
    height: number
}
export type ContentfulProjectsPayload = {
    data: {
        projectCollection: {
            items: Project[]
        }
    }
}

export type ContentfulServicesPayload = {
    data: {
        serviceCollection: {
            items: Service[]
        }
    }
}

export type ContentfulServiceCategoriesPayload = {
    data: {
        servicesCategoriesCollection: {
            items: ServiceCategory[]
        }
    }
}

export type ContentfulSlideInfoPayload = {
    data: {
        slideInfo: SlideInfo
    }
}


export type Project = {
    title: string
    description: ContentfulRichText
    headerImage: ContentfulImagePayload;
    highlight: boolean;
}

export type Service = {
    title: string
    headerImage: ContentfulImagePayload
    description: ContentfulRichText
    groupId: string
}

export type ServiceCategory = {
    category: string;
    categoryId: string
    categoryDescription: ContentfulRichText
    services?: Service[]
}


export type SlideInfo = {
    title: string
    description: ContentfulRichText
    contentImagesCollection: {
        items: ContentfulImagePayload[]
    }
    backgroundImage: ContentfulImagePayload
}

export type ContentfulRichText = {
    json: Document
}