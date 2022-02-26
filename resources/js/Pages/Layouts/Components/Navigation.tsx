import { Link } from '@inertiajs/inertia-react'
import { useEffect, useState } from 'react'

export default function Navigation() {
    const [ open, setOpen ] = useState(false)

    const navItems = [
        { title: 'Creations', path: '/creations' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
    ]

    const isNotCurrentPath = (linkPath: string): boolean => {
        return window.location.pathname !== linkPath
    }

    useEffect(() => {
        if (open) {
            document.body.classList.add('overflow-hidden')
            window.scrollTo(0, 0)
        } else {
            document.body.classList.remove('overflow-hidden')
        }

        return () => {
            document.body.classList.remove('overflow-hidden')
        }
    }, [ open ])

    return (
        <nav>
            <div className="items-center justify-between hidden px-16 py-10 mb-5 md:mb-16 md:flex lg:px-24">
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
            <div className="flex justify-end p-5 md:hidden">
                <div className="flex flex-col items-center w-10 cursor-pointer" onClick={() => setOpen(true)}>
                    <img src="/img/icons/menu.svg" />
                    <p className="mt-2 text-gray">Menu</p>
                </div>
                <div className={`
                        ${open ? 'translate-x-0' : '-translate-x-full'}
                        bg-white flex flex-col z-10 p-3 h-screen w-screen absolute top-0 left-0 transition duration-300 
                    `}>
                    <div onClick={() => setOpen(false)} className="flex flex-col items-center self-end cursor-pointer">
                        <img className="w-10" src="/img/icons/close.svg" />
                        <p className="mt-2 text-gray">Close</p>
                    </div>
                    <Link className="mb-5 grow-0 w-fit" href="/">
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
