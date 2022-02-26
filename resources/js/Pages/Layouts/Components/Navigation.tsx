import { Link } from '@inertiajs/inertia-react'
import { useState } from 'react'

export default function Navigation() {
    const [ open, setOpen ] = useState(false)

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
            <div className="hidden items-center justify-between px-16 py-10 mb-16 md:flex lg:px-24">
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
            <div className="md:hidden p-5 flex justify-end">
                <div className="cursor-pointer w-10 flex flex-col items-center" onClick={() => setOpen(true)}>
                    <img src="/img/icons/menu.svg" />
                    <p className="mt-2 text-gray">Menu</p>
                </div>
                <div className={`
                        ${open ? 'translate-x-0' : '-translate-x-full'}
                        bg-white flex flex-col z-10 p-3 h-screen w-screen absolute top-0 left-0 transition duration-300 
                    `}>
                    <div onClick={() => setOpen(false)} className="self-end flex flex-col items-center cursor-pointer">
                        <img className="w-10" src="/img/icons/close.svg" />
                        <p className="mt-2 text-gray">Close</p>
                    </div>
                    <Link className="grow-0 w-fit mb-5" href="/">
                        <h1 className={`${isNotCurrentPath('/') && 'border-white'} border-b-2 text-2xl font-bold text-center`}>
                            Paul Estala
                        </h1>
                    </Link>
                    {navItems.map(item => (
                        <Link
                            className={`${isNotCurrentPath(item.path) && 'text-gray border-white'} grow-0 w-fit border-b-2 text-lg font-semibold mb-5`}
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
