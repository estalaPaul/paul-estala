import { ChildrenOnly } from '../../types/props'
import Navigation from './Components/Navigation'

export default function Unauthenticated(props: ChildrenOnly) {
    const { children } = props
    return (
        <>
            <Navigation/>
            { children }
        </>
    )
}
