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
                <div className="flex w-full px-52 pt-40 justify-between">
                    <div className="flex items-center justify-center w-1/2 opacity-0 fade-in-delayed">
                        <div>
                            <p className="text-2xl">
                                I&apos;m Paul Estala, a {age} year old <strong>Software Engineer</strong> from Chihuahua, Mexico.
                            </p>
                            <p className="text-gray text-2xl mt-5 mb-10">
                                Currently coding full time for a living but also as a hobby.
                                If I&apos;m not coding, I&apos;m probably spending time with
                                my family or doing some sort of exercise.
                            </p>
                            <a
                                className="items-center gap-2 text-2xl text-gray border-b-2 border-white transition-color duration-300 hover:text-black hover:border-black hover:brightness-0 hover:saturate-0"
                                href="#tech"
                            >
                                <em>See some of the languages and tools I work with</em>
                                <img className="inline ml-2 mb-0.5" src="/img/icons/double-down.svg" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="overflow-hidden w-80 h-80 rounded-full animate-fade-in-from-bigger">
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
            <div className="flex w-full px-52 justify-between items-center h-full">
                <div className="flex items-center justify-center w-5/6 fade-in-delayed">
                    <div>
                        <h2 className="text-5xl font-bold">
                            Languages and Tools
                        </h2>
                        <p className="text-gray text-2xl mt-5">These are some of the languages and tools that I enjoy working with and use on a regular basis.</p>
                    </div>
                </div>
                <div className="flex gap-10 items-center flex-wrap justify-end ml-8">
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
