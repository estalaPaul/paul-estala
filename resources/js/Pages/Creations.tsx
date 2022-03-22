import { Head } from '@inertiajs/inertia-react'
import { Creations } from '../types/configs'
import Unauthenticated from './Layouts/Unauthenticated'
import creations from '../configs/creations'

export default function Creations() {
    return (
        <>
            <Head>
                <title>Creations</title>
                <meta name="description" content="See some of the websites or software that Paul Estala has created." />
            </Head>
            <Unauthenticated>
                <div className="flex flex-col justify-between w-full px-10 md:px-16 lg:flex-row lg:pt-14 xl:pt-32 xl:px-52">
                    <div className="flex items-center justify-center w-full opacity-0 fade-in-delayed lg:w-1/2">
                        <div className="w-full text-center lg:text-left">
                            <p className="mt-5 mb-5 text-3xl font-bold lg:mt-0 md:text-5xl lg:mt-14">Some projects I&apos;m proud of</p>
                            <p className="text-xl">
                                I also created the website you&apos;re currently looking at!
                                You can see the source code on <a className="border-b-2 border-white transition-color duration-300 hover:border-black" href="https://github.com/estalaPaul/paul-estala"><em>GitHub</em></a>.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-end w-full mt-5 mb-10 gap-10 animate-fade-in-from-bigger md:px-20 lg:mt-0 lg:flex-row lg:w-1/2 lg:mb-0 lg:px-10 xl:px-0">
                        {creations.map(creation => (
                            <a
                                href={creation.url}
                                key={creation.thumbnail}
                                className="w-full p-5 text-center rounded-lg shadow-md cursor-pointer transition-shadow duration-300 hover:shadow-xl lg:w-1/2 xl:p-10"
                            >
                                <img src={`/img/creations/${creation.thumbnail}.webp`} alt={creation.alt}/>
                                <p className="text-xl">{creation.description}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </Unauthenticated>
        </>
    )
}
