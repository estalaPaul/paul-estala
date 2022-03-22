import { Head } from '@inertiajs/inertia-react'
import { HomeProps } from '../types/props'
import Unauthenticated from './Layouts/Unauthenticated'

export default function Home(props: HomeProps) {
    const { years } = props

    return (
        <>
            <Head>
                <title>Home</title>
                <meta
                    name="description"
                    content="Paul Estala&apos;s portfolio website showcasing his programming and design projects, as well as his career as a Software Engineer and some of his personal hobbies."
                />
            </Head>
            <Unauthenticated>
                <div className="flex-col-reverse flex justify-between w-full p-10 pt-14 md:pt-16 md:px-16 md:flex-row xl:px-52">
                    <div className="flex items-center justify-center w-full opacity-0 fade-in-delayed md:w-1/2">
                        <div className="w-full text-center md:text-left">
                            <p className="mb-5 text-4xl font-bold mt-14 md:mt-0 md:text-6xl">Hey there!</p>
                            <p className="text-xl">
                                I&apos;m a <span className="font-semibold">software engineer</span> specializing in <span className="font-semibold">full stack web development</span> with {years} years of professional experience.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img className="w-40 animate-fade-in-from-bigger md:w-56 lg:w-96" src="/img/logo.svg" alt="" />
                    </div>
                </div>
            </Unauthenticated>
        </>
    )
}
