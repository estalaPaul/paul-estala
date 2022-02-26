import { Head } from '@inertiajs/inertia-react'
import { Tech } from '../types/configs'
import { AboutProps } from '../types/props'
import Unauthenticated from './Layouts/Unauthenticated'

export default function About(props: AboutProps) {
    const { age } = props

    return (
        <>
            <Head>
                <title>About</title>
                <meta name="description" content="Learn some basic information about Paul Estala." />
            </Head>
            <Unauthenticated extra={<AboutExtra />}>
                <div className="flex flex-col-reverse w-full px-10 pt-14 justify-between md:pt-32 md:px-16 md:flex-row lg:pt-14 xl:pt-48 xl:px-52">
                    <div className="flex items-center justify-center w-full opacity-0 fade-in-delayed text-center lg:w-1/2 lg:text-left">
                        <div>
                            <p className="text-xl md:text-2xl">
                                I&apos;m Paul Estala, a {age} year old <strong>Software Engineer</strong> from Chihuahua, Mexico.
                            </p>
                            <p className="text-gray text-xl mt-3 mb-3 md:mt-5 md:mb-10 md:text-2xl">
                                Currently coding full time for a living but also as a hobby.
                                If I&apos;m not coding, I&apos;m probably spending time with
                                my family or doing some sort of exercise.
                            </p>
                            <a
                                className="items-center gap-2 text-xl text-gray border-b-2 border-white transition-color duration-300 hover:text-black hover:border-black hover:brightness-0 hover:saturate-0 md:text-2xl"
                                href="#tech"
                            >
                                <em>See some of the languages and tools I work with</em>
                                <img className="inline ml-2 mb-0.5" src="/img/icons/double-down.svg" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center mb-14 md:items-center md:ml-10 lg:ml-0 lg:mb-0">
                        <div className="overflow-hidden w-44 h-44 rounded-full animate-fade-in-from-bigger md:w-56 md:h-56 lg:w-80 lg:h-80">
                            <img className="h-full w-full" src="/img/headshot.webp" alt="Photo of Paul Estala" />
                        </div>
                    </div>
                </div>
            </Unauthenticated>
        </>
    )
}

function AboutExtra() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const toolsAndLanguages: Tech = require('../configs/tech.json')
    return (
        <div className="h-screen" id="tech">
            <div className="flex flex-col w-full px-10 justify-between items-center h-full md:flex-row md:px-16 md:flex-row lg:pt-20 2xl:pt-48 xl:px-52">
                <div className="flex items-center justify-center w-full fade-in-delayed text-center md:text-left md:w-5/6">
                    <div>
                        <h2 className="text-4xl font-bold md:text-5xl">
                            Languages and Tools
                        </h2>
                        <p className="text-gray text-xl mt-3 md:mt-5 md:text-2xl">These are some of the languages and tools that I enjoy working with and use on a regular basis.</p>
                    </div>
                </div>
                <div className="flex gap-20 items-center flex-wrap justify-center mt-5 md:gap-10 md:mt-0 md:justify-end md:ml-8">
                    {toolsAndLanguages.map(info => (
                        <div key={info.label} className="flex flex-col items-center">
                            <img className={`${info.height} mb-6`} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${info.image}`} alt="" />
                            <a
                                href={info.url}
                                className="text-xl text-gray border-b-2 transition-color duration-300 border-white hover:border-black hover:text-black"
                            >
                                {info.label}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
