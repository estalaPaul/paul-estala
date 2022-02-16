import { ReactNode } from 'react'

export type ChildrenOnly = {
    children: ReactNode
}

export type UnauthenticatedProps = {
    children: ReactNode
    extra?: ReactNode
}

export type HomeProps = {
    years: string
}

export type AboutProps = {
    age: string
}
