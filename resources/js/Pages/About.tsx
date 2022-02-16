import { Head } from '@inertiajs/inertia-react'
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
                                I&apos;m Paul Estala, a {age} year old Software Engineer from Chihuahua, Mexico.
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
                                See some of the tech I work with
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
    return (
        <div className="h-screen" id="tech">
            <div className="flex items-center justify-center w-full">
                <h2 className="text-5xl pt-10 text-center">
                    Tech
                </h2>
            </div>
        </div>
    )
}
