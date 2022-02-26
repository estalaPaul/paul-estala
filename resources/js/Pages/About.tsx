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
                <div className="flex flex-col-reverse justify-between w-full px-10 md:pt-32 md:px-16 md:flex-row lg:pt-14 xl:pt-48 xl:px-52">
                    <div className="flex items-center justify-center w-full text-center opacity-0 fade-in-delayed lg:w-1/2 lg:text-left">
                        <div>
                            <p className="text-lg md:text-xl lg:text-2xl">
                                I&apos;m Paul Estala, a {age} year old <strong>Software Engineer</strong> from Chihuahua, Mexico.
                            </p>
                            <p className="mt-3 mb-3 text-lg text-gray md:mt-5 md:mb-10 md:text-xl lg:text-2xl">
                                Currently coding full time for a living but also as a hobby.
                                If I&apos;m not coding, I&apos;m probably spending time with
                                my family or doing some sort of exercise.
                            </p>
                            <a
                                className="items-center text-lg border-b-2 border-white md:text-xl gap-2 text-gray transition-color duration-300 hover:text-black hover:border-black hover:brightness-0 hover:saturate-0 lg:text-2xl"
                                href="#tech"
                            >
                                <em>See some of the languages and tools I work with</em>
                                <img className="inline ml-2 mb-0.5" src="/img/icons/double-down.svg" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center mb-5 md:items-center md:ml-10 lg:ml-0 lg:mb-0">
                        <div className="w-24 h-24 overflow-hidden rounded-full animate-fade-in-from-bigger md:w-56 md:h-56 lg:w-80 lg:h-80">
                            <img className="w-full h-full" src="/img/headshot.webp" alt="Photo of Paul Estala" />
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
            <div className="flex flex-col items-center justify-between w-full h-full px-10 md:flex-row md:px-16 lg:pt-20 2xl:pt-48 xl:px-52">
                <div className="flex items-center justify-center w-full text-center fade-in-delayed md:text-left md:w-5/6">
                    <div>
                        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                            Languages and Tools
                        </h2>
                        <p className="mt-3 text-lg md:text-xl text-gray md:mt-5 lg:text-2xl">These are some of the languages and tools that I enjoy working with and use on a regular basis.</p>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-center mt-5 gap-10 md:mt-0 md:justify-end md:ml-8">
                    {toolsAndLanguages.map(info => (
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
    )
}
