import { BlogPosts } from "app/components/posts"

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Luca Protelli
            </h1>
            <p className="mb-4">
                {`Hey! I’m a student at the University of Trento, studying Interface and Communication Technology. I’m passionate about UX design, focusing on understanding and solving real problems rather than jumping to solutions. People are at the heart of my work, I thrive on creating intuitive, human-centered experiences.

I have a deep appreciation for crafting seamless micro-interactions that make digital journeys feel alive and effortless. I believe quality is a cornerstone of success, and I strive to embed it in everything I do. For me, mastery comes through action by experimenting, learning, and staying consistent, I continuously grow and refine my skills.

With curiosity and an open mind, I embrace every challenge as an opportunity to learn, evolve, and contribute meaningfully.`}
            </p>
            <div className="my-8">
                <BlogPosts />
            </div>
        </section>
    )
}
