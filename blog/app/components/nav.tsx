import Link from "next/link"

const navItems = {
    "/": {
        name: "about",
    },
    "/blog": {
        name: "thoughts",
    },
    // "/projects": {
    //     name: "projects",
    // },
}

export function Navbar() {
    return (
        <aside className="-ml-[8px] mb-16 tracking-tight">
            <div className="lg:sticky lg:top-20">
                <nav
                    className="flex flex-row items-start justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
                    id="nav"
                >
                    <div className="flex flex-row space-x-0 md:pr-10">
                        {Object.entries(navItems).map(([path, { name }]) => {
                            return (
                                <Link
                                    key={path}
                                    href={path}
                                    className="text-neutral-900 hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400 transition duration-300 flex align-middle relative py-1 px-2 m-1 "
                                >
                                    {name}
                                </Link>
                            )
                        })}
                    </div>
                    <div className="align-middle py-1 px-2 m-1 text-stone-50 bg-orange-600 rounded-lg border-2 border-amber-800 drop-shadow-xl shadow-black dark:shadow-white transition-all duration-300 hover:bg-orange-500 dark:bg-orange-500 dark:border-orange-700 dark:hover:bg-orange-600">
                        <a href="mailto:lucaprotelli2004@gmail.com">
                            reach out
                        </a>
                    </div>
                </nav>
            </div>
        </aside>
    )
}
