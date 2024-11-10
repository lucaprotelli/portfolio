import Image from "next/image"

export default function NotFound() {
    return (
        <section>
            <Image
                width={256}
                height={256}
                src="/blog/app/public/images/photo.gif"
                alt="gif photo"
            />
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                404 - Page Not Found
            </h1>
            <p className="mb-4">The page you are looking for does not exist.</p>
        </section>
    )
}
