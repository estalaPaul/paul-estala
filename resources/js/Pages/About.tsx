import { Head } from '@inertiajs/inertia-react'
import { AboutProps } from '../types/props'
import Unauthenticated from './Layouts/Unauthenticated'

export default function About(props: AboutProps) {
    return (
        <Unauthenticated>
            <Head>
                <title>About</title>
                <meta name="description" content="Learn some basic information about Paul Estala." />
            </Head>
            <div className="flex w-full px-24 pt-16 justify-evenly">
                <div className="flex items-center justify-center w-1/2 px-24 opacity-0 fade-in-delayed">
                    <div>
                        <p className="text-xl">
                            I&apos;m Paul Estala a Software Engineer from Chihuahua, Mexico.
                            I code for a living as well as for fun. If I&apos;m not coding,
                            I like to design things or do some sports.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center w-1/2">
                    <img className="w-96 animate-fade-in-from-bigger" src="/img/logo.svg" alt="" />
                </div>
            </div>
        </Unauthenticated>
    )
}
