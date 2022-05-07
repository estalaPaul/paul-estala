import { Fragment } from 'react'
import { Head } from '@inertiajs/inertia-react'
import Unauthenticated from './Layouts/Unauthenticated'
import skills from '../configs/skills'

export default function Skills() {
    return (
        <>
            <Head>
                <title>Skills</title>
                <meta name="description" content="Some of the things (languages, frameworks, technologies and others) Paul Estala feels he's good at." />
            </Head>
            <Unauthenticated>
                <div className="flex flex-col items-center w-full py-14 md:px-16 lg:pt-24 xl:px-52">
                    <div className="flex items-center w-full mb-8 text-center animate-fade-in-from-bigger">
                        <div className="mx-auto">
                            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                                Skills
                            </h2>
                            <p className="mt-3 text-lg md:text-xl text-gray md:mt-5 lg:text-2xl">These are some of the frameworks, languages, technologies and other things I feel I&apos;m good at.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full px-5 opacity-0 fade-in-delayed">
                        {Object.keys(skills).map(skill => (
                            <Fragment key={skill}>
                                <h3 className="text-xl font-bold mt-20 capitalize md:text-2xl lg:text-3xl">
                                    {skill}
                                </h3>
                                <div className="flex flex-wrap justify-center mt-10 gap-20">
                                    {skills[skill as keyof typeof skills].map(info => (
                                        <div key={info.label} className="flex flex-col items-center">
                                            <img className={`${info.height} mb-6`} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${info.image}`} alt="" />
                                            {info.url ? (
                                                <a
                                                    href={info.url}
                                                    className="text-xl border-b-2 border-white text-gray transition-color duration-300 hover:border-black hover:text-black"
                                                >
                                                    {info.label}
                                                </a>
                                            ) : (
                                                <p className="text-xl border-b-2 border-white text-gray">
                                                    {info.label}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </Fragment>
                        ))}
                    </div>
                </div>
            </Unauthenticated>
        </>
    )
}
