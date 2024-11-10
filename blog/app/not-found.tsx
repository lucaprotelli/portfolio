import Image from "next/image"
import myGif from "../app/public/images/phoyo.gif"

export default function NotFound() {
    return (
        <section>
            <Image src={myGif} alt="404" width={100} height={100} />
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                404 - Page Not Found
            </h1>
            <p className="mb-4">The page you are looking for does not exist.</p>
        </section>
    )
}
