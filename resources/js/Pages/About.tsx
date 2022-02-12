import {Head} from '@inertiajs/inertia-react'
import { AboutProps } from '../types/props'
import Unauthenticated from './Layouts/Unauthenticated'

export default function About(props: AboutProps) {
    return (
        <Unauthenticated>
            <Head>
                <title>About</title>
                <meta
                    name="description"
                    content=""
                />
            </Head>
            <p>About</p>
        </Unauthenticated>
    )
}
