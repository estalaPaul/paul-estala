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
            <Unauthenticated>
                <div className="h-screen flex items-center">
                    <div className="flex w-full px-24 justify-evenly">
                        <div className="flex items-center justify-center w-1/2 px-24 opacity-0 fade-in-delayed">
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
                                    href="#skills"
                                >
                                    See some of the tech I work with
                                    <img className="inline ml-2 mb-0.5" src="/img/icons/double-down.svg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center w-1/2 items-center">
                            <div className="overflow-hidden w-80 h-80 rounded-full">
                                <img className="h-full w-full" src="/img/headshot.webp" alt="Photo of Paul Estala" />
                            </div>
                        </div>
                    </div>
                </div>
            </Unauthenticated>
        </>
    )
}
