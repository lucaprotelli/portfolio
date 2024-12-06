import { BlogPosts } from "app/components/posts"

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Luca Protelli
            </h1>
            <p className="mb-4">
                {`Hey! I’m a student at the University of Trento, studying Interface and Communication Technology. I’m passionate about UX design, focusing on understanding and solving real problems rather than jumping to solutions. People are at the heart of my work, I thrive on creating intuitive, human-centered experiences.

I have a deep appreciation for crafting seamless micro-interactions that make digital journeys feel alive and effortless.`}
            </p>
            <div className="my-8">
                <BlogPosts />
            </div>
        </section>
    )
}
