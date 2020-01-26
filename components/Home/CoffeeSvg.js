const CoffeeSvg = () => {
    return (
        <svg
            width="78"
            height="201"
            viewBox="0 0 298 421"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M184.277 395.576H32.8087L44.9267 415.914C46.5335 418.933 49.6062 420.867 53.0039 421H164.08C167.478 420.867 170.55 418.933 172.159 415.914L184.277 395.576Z"
                fill="693636" // cup bottom
            />
            <path
                d="M290.303 273.543V314.22C290.303 336.687 272.219 354.899 249.913 354.899H204.473V334.558H249.913C261.067 334.558 270.108 325.453 270.108 314.22V273.543C270.108 262.309 261.067 253.204 249.913 253.204H204.473V232.864H249.913C272.219 232.864 290.303 251.076 290.303 273.543Z"
                fill="#693636" // handle
            />
            <path
                d="M204.473 187.101H12.6135C9.82489 187.101 7.56355 189.378 7.56355 192.187V375.237C7.56355 389.279 18.8657 400.662 32.8087 400.662H184.277C198.218 400.662 209.52 389.279 209.52 375.237V192.187C209.52 189.378 207.261 187.101 204.473 187.101V187.101Z"
                fill="#47a2f2" // left half
            />
            <path
                d="M209.52 192.187V375.237C209.52 389.279 198.218 400.662 184.277 400.662H108.542V187.101H204.473C207.261 187.101 209.52 189.378 209.52 192.187Z"
                fill="#218deb" // right half
            />
            <path
                d="M27.7588 222.694C24.9702 222.694 22.7111 220.419 22.7111 217.611V207.442C22.7111 204.633 24.9702 202.356 27.7588 202.356C30.5474 202.356 32.8087 204.633 32.8087 207.442V217.611C32.8087 220.419 30.5474 222.694 27.7588 222.694Z"
                fill="#aed9ff" // top small glimmer
            />
            <path
                d="M27.7588 370.152C24.9702 370.152 22.7111 367.877 22.7111 365.068V237.949C22.7111 235.141 24.9702 232.864 27.7588 232.864C30.5474 232.864 32.8087 235.141 32.8087 237.949V365.068C32.8087 367.877 30.5474 370.152 27.7588 370.152Z"
                fill="#aed9ff" // bottom large glimmer
            />

            <path
                d="M52.712 163C24.0473 139.436 37.642 118.553 48.0224 111.056C67.1434 84.588 52.9933 63.9903 43.5281 57"
                stroke="#D6D6D6"
                strokeWidth="10"
                className="steam--1"
            />
            <path
                d="M167.214 155C141.559 133.495 154.064 114.025 163.523 106.979C181.08 82.2826 168.51 63.3695 160.03 57"
                stroke="#D6D6D6"
                strokeWidth="10"
                className="steam--2"
            />
            <path
                d="M112.626 149.46C70.7803 116.426 89.5181 88.4979 104.118 78.6631C130.573 43.3313 109.606 14.8328 95.8161 5"
                stroke="#D6D6D6"
                strokeWidth="10"
                className="steam--3"
            />
            <style jsx>{`

                .steam--1 {
                    animation: steam1 linear infinite 4s;
                    opacity: 0;
                }

                .steam--2 {
                    animation: steam2 linear infinite 4s;
                    opacity: 0;
                    transform: translateY(3rem);
                }

                .steam--3 {
                    animation: steam3 linear infinite 4s;
                    opacity: 0;
                    transform: translateY(-2rem);
                }

                @keyframes steam1 {
                    10% {
                        opacity: 0;
                    }
                    50% {
                        opacity: .8;
                    }
                    75% {
                        opacity: .8;
                    }
                    90% {
                        opacity: 0;
                    }
                    100% {
                        transform: translateY(-6rem);
                    }
                }

                @keyframes steam2 {
                    70% {
                        opacity: .8;
                    }
                    80% {
                        opacity: 0;
                    }
                    100% {
                        transform: translateY(-4rem);
                        opacity: 0;
                    }
                }

                @keyframes steam3 {
                    0% {
                        opacity: 0;
                    }
                    20% {
                        opacity: .8;
                    }
                    55% {
                        opacity: .8;
                    }
                    80% {
                        opacity: 0;
                    }
                    100% {
                        transform: translateY(-8rem);
                    }
                }
            `}</style>
        </svg>
    );
};

export default CoffeeSvg;
