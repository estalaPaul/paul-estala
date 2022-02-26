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
                    content="Contact Paul Estala through his website or through one of his social media acoounts."
                />
            </Head>
            <Unauthenticated>
                <div className="flex w-full px-52 pt-48 justify-between">
                    <div className="flex items-center w-1/2 opacity-0 fade-in-delayed">
                        <div>
                            <h2 className="text-5xl font-bold mb-5">You can find me on...</h2>
                            <p className="text-xl">
                                Or shoot me an email at <a className="text-gray border-b-2 border-white transition-color duration-300 hover:text-black hover:border-black" href="mailto:pestala495@tutanota.com"><em>pestala495@tutanota.com</em></a>.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-20 w-1/2 items-center flex-wrap justify-end animate-fade-in-from-bigger">
                        {socialMedia.map(info => (
                            <div key={info.label} className="flex flex-col items-center">
                                <img className="w-20 h-20 mb-6" src={`/img/icons/${info.image}.svg`} alt="" />
                                <a
                                    href={info.url}
                                    className="text-xl text-gray transition-color duration-300 border-b-2 border-white hover:border-black hover:text-black"
                                >
                                    {info.label}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </Unauthenticated>
        </>
    )
}
