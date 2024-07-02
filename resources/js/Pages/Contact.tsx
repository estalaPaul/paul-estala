import { Head } from '@inertiajs/inertia-react'
import Unauthenticated from './Layouts/Unauthenticated'
import socialMedia from '../configs/social-media'

export default function Contact() {
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
                <div className="flex flex-col justify-between w-full pt-14 md:px-16 lg:pt-48 xl:px-52">
                    <div className="flex items-center w-full mb-8 text-center opacity-0 fade-in-delayed">
                        <div className="w-full">
                            <h2 className="mb-5 text-4xl font-bold md:text-5xl">Interesed in working together?</h2>
                            <p className="text-center text-xl mb-10 md:text-2xl text-gray">You can find me on...</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-center w-full px-5 gap-20 animate-fade-in-from-bigger">
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
                    <p className="w-full mt-10 text-xl text-center md:text-2xl text-gray">
                        Or shoot me an email at <a className="border-b-2 border-white text-gray transition-color duration-300 hover:text-black hover:border-black" href="mailto:pestala495@tutanota.com"><em>pestala495@tutanota.com</em></a>.
                    </p>
                </div>
            </Unauthenticated>
        </>
    )
}
