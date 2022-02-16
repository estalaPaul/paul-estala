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
                <div className="flex w-full px-52 pt-16 justify-between">
                    <div className="flex items-center justify-center w-1/2 opacity-0 fade-in-delayed">
                        <div>
                            <p className="mb-5 text-6xl font-bold">Hey there!</p>
                            <p className="text-xl">
                                I&apos;m a <span className="font-semibold">software engineer</span> specializing in <span className="font-semibold">full stack web development</span> with {years} years of professional experience.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img className="w-96 animate-fade-in-from-bigger" src="/img/logo.svg" alt="" />
                    </div>
                </div>
            </Unauthenticated>
        </>
    )
}
