import { UnauthenticatedProps } from '../../types/props'
import Navigation from './Components/Navigation'

export default function Unauthenticated(props: UnauthenticatedProps) {
    const { children, extra } = props
    return (
        <>
            <div className="h-screen">
                <Navigation/>
                { children }
            </div>
            { extra }
        </>
    )
}
