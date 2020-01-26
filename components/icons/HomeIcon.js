import Link from "next/link";
import { useRef } from "react";

const HomeIcon = () => {
    const text = useRef(null);

    const handleEnter = () => {
        text.current.classList.add("textOpacity");
    };
    const handleLeave = () => {
        text.current.classList.remove("textOpacity");
    };
    return (
        <div className="HomeIcon">
            <p ref={text} className="tooltip">
                Home
            </p>
            <Link href="#">
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="#47a2f2"
                    opacity=".7"
                    className="homeSvg"
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                >
                    <path d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"></path>
                </svg>
            </Link>
            <style jsx>{`
                .HomeIcon {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    position: relative;
                }
                .tooltip {
                    text-decoration: none;
                    text-transform: uppercase;
                    font-size: 1.2rem;
                    position: absolute;
                    width: 100%;
                    text-align: center;
                    top: 50%;
                    color: #fff;
                    transform: translateY(-50%);
                    opacity: 0;
                    transition: opacity 0.5s;
                    cursor: default;
                    color: var(--blue);
                }
                .homeSvg:hover {
                    opacity: 0.2;
                    cursor: pointer;
                }

                .textOpacity {
                    opacity: 1;
                }
            `}</style>
        </div>
    );
};

export default HomeIcon;
