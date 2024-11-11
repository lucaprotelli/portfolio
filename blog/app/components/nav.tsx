import Link from "next/link"

const navItems = {
    "/": {
        name: "home",
    },
    "/blog": {
        name: "blog",
    },
    "/projects": {
        name: "projects",
    },
}

export function Navbar() {
    return (
        <aside className="-ml-[8px] mb-16 tracking-tight">
            <div className="lg:sticky lg:top-20">
                <nav
                    className="flex flex-row items-start justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
                    id="nav"
                >
                    <div className="flex flex-row space-x-0 pr-10">
                        {Object.entries(navItems).map(([path, { name }]) => {
                            return (
                                <Link
                                    key={path}
                                    href={path}
                                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                                >
                                    {name}
                                </Link>
                            )
                        })}
                    </div>
                    <div className="align-middle py-1 px-2 m-1 text-stone-50 bg-orange-600 rounded-lg border-2 border-amber-800 drop-shadow-xl shadow-black dark:shadow-white transition-all duration-300 hover:bg-orange-500 dark:hover:bg-orange-700">
                        <a href="mailto:lucaprotelli2004@gmail.com">
                            connect with me
                        </a>
                    </div>
                </nav>
            </div>
        </aside>
    )
}
