import Link from "next/link"

export default function Badge({ text, link }: { text: string; link: string }) {
    return (
        <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex my-1 !no-underline items-center rounded-full bg-neutral-50 px-3 py-2 text-xs font-medium text-neutral-700 ring-1 ring-inset ring-neutral-500/10 hover:bg-neutral-100 transition-all dark:bg-neutral-800 dark:text-neutral-300 dark:ring-neutral-700 dark:hover:bg-neutral-700"
        >
            {text}
        </Link>
    )
}
