import { BlogPosts } from "app/components/posts"
import Link from "next/link"

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Luca Protelli
            </h1>
            <p className="mb-4">
                {`Hi! I am a designer and developer based in Italy, currently studying Interface and Communication Technology at the University of Trento. My field of interest is quite extensive, ranging from human-computer interaction to web development. `}
            </p>
            <p className="mb-4">
                {`Ever since my high school years, I have been passionate about technology and design. I started my journey by learning how to code and design websites, and I have been expanding my knowledge ever since. I've devoted considerable time to UX challenges and hackathons.`}
            </p>
            <p className="mb-4">
                {`For more information about my projects and thoughts, feel free to explore my `}
                <Link
                    key="/blog"
                    href="/blog"
                    className="font-normal underline underline-offset-1 hover:text-neutral-700 dark:hover:text-neutral-300 transition"
                >
                    writings
                </Link>
                {`, projects and various social media profile.`}{" "}
            </p>
            <div className="my-8">
                <BlogPosts />
            </div>
        </section>
    )
}
