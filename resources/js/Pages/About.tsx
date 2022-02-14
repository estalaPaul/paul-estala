import { Head } from '@inertiajs/inertia-react'
import { AboutProps } from '../types/props'
import Unauthenticated from './Layouts/Unauthenticated'

export default function About(props: AboutProps) {
    const { age } = props

    return (
        <Unauthenticated>
            <Head>
                <title>About</title>
                <meta name="description" content="Learn some basic information about Paul Estala." />
            </Head>
            <div className="flex w-full px-24 pt-16 justify-evenly">
                <div className="flex items-center justify-center w-1/2 px-24 opacity-0 fade-in-delayed">
                    <div>
                        <p className="text-2xl">
                            I&apos;m Paul Estala, a {age} year old Software Engineer from Chihuahua, Mexico.
                        </p>
                        <p className="text-gray text-2xl mt-5">
                            Currently coding full time for a living but also as a hobby.
                            If I&apos;m not coding, I&apos;m probably spending time with
                            my family or doing some sort of exercise.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center w-1/2">
                    {/*TODO: Pick photo of you and add it here*/}
                </div>
            </div>
        </Unauthenticated>
    )
}
