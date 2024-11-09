import { BlogPosts } from "app/components/posts"

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Luca Protelli
            </h1>
            <p className="mb-4">
                {`Hey! I’m a student at the University of Trento, diving into Interface and Communication Technology. 
                I’m all about crafting smooth micro-interactions that make digital experiences feel intuitive and alive. 
                When I’m not designing, you’ll probably find me on the basketball court.
                Always up for a good challenge, on and off the screen!`}
            </p>
            <div className="my-8">
                <BlogPosts />
            </div>
        </section>
    )
}
