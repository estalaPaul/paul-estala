import { Head } from '@inertiajs/inertia-react'
import { SocialMedia } from '../types/configs'
import Unauthenticated from './Layouts/Unauthenticated'

export default function Contact() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const socialMedia: SocialMedia = require('../configs/social-media.json')

    return (
        <>
            <Head>
                <title>Contact</title>
                <meta
                    name="description"
                    content="Contact Paul Estala through his website or through one of his social media accounts."
                />
            </Head>
            <Unauthenticated>
                <div className="flex flex-col justify-between w-full pt-14 md:px-16 md:flex-row lg:pt-48 xl:px-52">
                    <div className="flex items-center w-full mb-8 text-center opacity-0 fade-in-delayed md:mb-0 md:w-1/2">
                        <div className="w-full">
                            <h2 className="mb-5 text-4xl font-bold md:text-5xl">You can find me on...</h2>
                            <p className="hidden text-xl md:block">
                                Or shoot me an email at <a className="border-b-2 border-white text-gray transition-color duration-300 hover:text-black hover:border-black" href="mailto:pestala495@tutanota.com"><em>pestala495@tutanota.com</em></a>.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-center w-full px-5 gap-20 animate-fade-in-from-bigger md:gap-20 md:px-0 md:w-1/2 md:justify-end">
                        {socialMedia.map(info => (
                            <div key={info.label} className="flex flex-col items-center">
                                <img className="w-16 h-16 mb-6 md:w-20 md:h-20" src={`/img/icons/${info.image}.svg`} alt="" />
                                <a
                                    href={info.url}
                                    className="text-xl border-b-2 border-white text-gray transition-color duration-300 hover:border-black hover:text-black"
                                >
                                    {info.label}
                                </a>
                            </div>
                        ))}
                    </div>
                    <p className="w-full mt-8 text-xl text-center md:hidden">
                        Or shoot me an email at <a className="border-b-2 border-white text-gray transition-color duration-300 hover:text-black hover:border-black" href="mailto:pestala495@tutanota.com"><em>pestala495@tutanota.com</em></a>.
                    </p>
                </div>
            </Unauthenticated>
        </>
    )
}
