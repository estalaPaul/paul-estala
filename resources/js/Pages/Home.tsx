import { Head } from '@inertiajs/inertia-react'
import Unauthenticated from './Layouts/Unauthenticated'

export default function Test() {
    return (
        <Unauthenticated>
            <Head title="Welcome" />
            <h1 className="text-red-500">Bienvenido</h1>
            <p>Hello, welcome to your first Inertia app!</p>
        </Unauthenticated>
    )
}
