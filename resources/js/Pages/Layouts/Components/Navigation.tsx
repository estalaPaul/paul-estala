import { Link } from '@inertiajs/inertia-react'

export default function Navigation() {
    const navItems = [
        { title: 'Projects', path: '/projects' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
    ]

    const isNotCurrentPath = (linkPath: string): boolean => {
        return window.location.pathname !== linkPath
    }

    return (
        <nav>
            <div className="flex items-center justify-between px-24 py-10 mb-16">
                <div>
                    <Link href="/">
                        <h1 className={`
                            ${isNotCurrentPath('/') && 'transition-color duration-300 border-white hover:border-black'}
                            border-b-2 text-2xl font-bold text-center
                        `}>Paul Estala</h1>
                    </Link>
                </div>
                <div className="flex gap-16">
                    {navItems.map(item => (
                        <Link
                            className={`
                                ${isNotCurrentPath(item.path) && 'text-gray transition-color duration-300 border-white hover:border-black hover:text-black'}
                                border-b-2 text-lg font-semibold`
                            }
                            key={item.path}
                            href={item.path}
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}
