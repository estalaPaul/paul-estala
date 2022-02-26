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
                <div className="flex w-full px-52 pt-40 justify-between">
                    <div className="flex items-center w-1/2 fade-in-delayed">
                        <div>
                            <h2 className="text-5xl font-bold">You can find me on...</h2>
                        </div>
                    </div>
                    <div className="flex gap-20 w-1/2 items-center flex-wrap justify-end">
                        {socialMedia.map(info => (
                            <div key={info.label} className="flex flex-col items-center">
                                <img className="w-24 h-24 mb-6" src={`/img/icons/${info.image}.svg`} alt="" />
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
