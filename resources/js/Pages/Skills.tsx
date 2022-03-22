import { Head } from '@inertiajs/inertia-react'
import Unauthenticated from './Layouts/Unauthenticated'
import tech from '../configs/tech'

export default function About() {
    return (
        <>
            <Head>
                <title>Skills</title>
                <meta name="description" content="Some of the tools and technologies I use often." />
            </Head>
            <Unauthenticated>
                <div className="flex flex-col-reverse justify-between w-full px-10 md:pt-32 md:px-16 md:flex-row lg:pt-14 xl:pt-48 xl:px-52">
                    <div className="flex items-center justify-center w-full text-center opacity-0 fade-in-delayed lg:w-1/2 lg:text-left">
                        <div>
                            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                                Languages and Tools
                            </h2>
                            <p className="mt-3 text-lg md:text-xl text-gray md:mt-5 lg:text-2xl">These are some of the languages and tools that I enjoy working with and use on a regular basis.</p>
                        </div>
                    </div>
                    <div className="flex justify-center mb-5 md:items-center md:ml-10 lg:ml-0 lg:mb-0">
                        <div className="w-24 h-24 overflow-hidden rounded-full animate-fade-in-from-bigger md:w-56 md:h-56 lg:w-80 lg:h-80">
                            {tech.map(info => (
                                <div key={info.label} className="flex flex-col items-center">
                                    <img className={`${info.height} mb-6`} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${info.image}`} alt="" />
                                    <a
                                        href={info.url}
                                        className="text-xl border-b-2 border-white text-gray transition-color duration-300 hover:border-black hover:text-black"
                                    >
                                        {info.label}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Unauthenticated>
        </>
    )
}
