export type Skills = Record<
    'languages' | 'frameworks / libraries' | 'technologies',
    Array<{
        image: string,
        label: string,
        height: string,
        url?: string,
    }>
>

export type SocialMedia = Array<{
    image: string,
    label: string,
    url: string,
}>

export type Creations = Array<{
    thumbnail: string,
    alt: string,
    description: string,
    url: string,
}>
