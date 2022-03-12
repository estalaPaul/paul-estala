import { Head } from '@inertiajs/inertia-react'
import Unauthenticated from './Layouts/Unauthenticated'

export default function CV() {
    return (
        <>
            <Head>
                <title>CV</title>
                <meta name="description" content="See and download Paul&apos;s curriculum vitae (CV)." />
            </Head>
            <Unauthenticated>
                <p>test</p>
            </Unauthenticated>
        </>
    )
}
