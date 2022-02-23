import { Head } from '@inertiajs/inertia-react'
import Unauthenticated from './Layouts/Unauthenticated'

export default function Contact() {
    const socialMedia: Array<string> = []

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
                    <div className="flex items-center justify-center w-5/6 fade-in-delayed">
                        <div>
                            <h2 className="text-5xl font-bold">You can find me on...</h2>
                        </div>
                    </div>
                    <div className="flex gap-10 items-center flex-wrap justify-end ml-8">
                        {socialMedia.map(info => (
                            <p>test</p>
                        ))}
                    </div>
                </div>
            </Unauthenticated>
        </>
    )
}
