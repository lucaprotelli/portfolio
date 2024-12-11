import Link from "next/link"

export default function Badge({ text, link }: { text: string; link: string }) {
    return (
        <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
        >
            {text}
        </Link>
    )
}
