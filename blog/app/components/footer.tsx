function ArrowIcon() {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
            />
        </svg>
    )
}

function GithubIcon() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                fill="currentColor"
            />
        </svg>
    )
}

function LinkedinIcon() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 2 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect x="0" fill="none" width="16" height="16" />

            <g>
                <path
                    fill="currentColor"
                    d="M2.5 18h3V6.9h-3V18zM4 2c-1 0-1.8.8-1.8 1.8S3 5.6 4 5.6s1.8-.8 1.8-1.8S5 2 4 2zm6.6 6.6V6.9h-3V18h3v-5.7c0-3.2 4.1-3.4 4.1 0V18h3v-6.8c0-5.4-5.7-5.2-7.1-2.6z"
                />
            </g>
        </svg>
    )
}

function TwitterIcon() {
    return (
        <svg
            width="14"
            height="14"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 512 512"
        >
            <path
                fill="currentColor"
                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
            />
        </svg>
    )
}

export default function Footer() {
    return (
        <footer className="mb-16">
            <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:justify-between md:space-y-0 dark:text-neutral-300">
                <div className="flex flex-col space-x-0 space-y-2 md:flex-row md:space-x-4 md:space-y-0">
                    <li>
                        <a
                            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/lucaprotelli"
                        >
                            <GithubIcon />
                            <p className="ml-2 h-7">github</p>
                        </a>
                    </li>
                    <li>
                        <a
                            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.linkedin.com/in/luca-protelli/?trk=opento_sprofile_details"
                        >
                            <LinkedinIcon />
                            <p className="ml-2 h-7">linkedin</p>
                        </a>
                    </li>
                    <li>
                        <a
                            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://x.com/prote_____"
                        >
                            <TwitterIcon />
                            <p className="ml-2 h-7">twitter</p>
                        </a>
                    </li>
                </div>
                <div className="flex flex-col space-x-0 space-y-2 md:flex-row md:space-x-4 md:space-y-0">
                    <li>
                        <a
                            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="/rss"
                        >
                            <ArrowIcon />
                            <p className="ml-2 h-7">rss</p>
                        </a>
                    </li>
                    <li>
                        <a
                            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/lucaprotelli/portfolio"
                        >
                            <ArrowIcon />
                            <p className="ml-2 h-7">view source</p>
                        </a>
                    </li>
                </div>
            </ul>
            <p className="mt-8 text-neutral-600 dark:text-neutral-300">
                © {new Date().getFullYear()} MIT Licensed
            </p>
        </footer>
    )
}
