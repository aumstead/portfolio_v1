import Link from "next/link";
import { useRef } from "react";

const AboutIcon = () => {
    const text = useRef(null);

    const handleEnter = () => {
        text.current.classList.add("textOpacity");
    };
    const handleLeave = () => {
        text.current.classList.remove("textOpacity");
    };
    return (
        <div className="AboutIcon">
            <p ref={text} className="tooltip">
                About Me
            </p>
            <Link href="#">
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="#959595"
                    opacity=".5"
                    className="aboutSvg"
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                >
                    <path d="M23 11.031c0-0.553-0.448-1-1-1h-3c0 0 0.033-1.204 0.033-2.954 0-1.625-1.346-3.108-3.033-3.108s-2.988 1.411-2.988 3.099c0 1.625-0.012 2.964-0.012 2.964h-3c-0.553 0-1 0.447-1 1 0 0.552 0 1.938 0 1.938h14c0-0.001 0-1.387 0-1.939zM16 8.969c-0.553 0-1-0.448-1-1 0-0.553 0.447-1 1-1 0.552 0 1 0.447 1 1s-0.448 1-1 1zM28 11.031l-4-0.062 0.021 3.104h-16.021v-2.979l-4-0.062c-1.104 0-2 0.896-2 2v14c0 1.104 0.896 2 2 2h24c1.104 0 2-0.896 2-2v-14c0-1.105-0.896-2.001-2-2.001zM10 16.844c1.208 0 2.188 1.287 2.188 2.875s-0.98 2.875-2.188 2.875-2.188-1.287-2.188-2.875 0.98-2.875 2.188-2.875zM5.667 25.979c0 0 0.237-1.902 0.776-2.261s2.090-0.598 2.090-0.598 1.006 1.075 1.434 1.075c0.427 0 1.433-1.075 1.433-1.075s1.552 0.238 2.091 0.598c0.633 0.422 0.791 2.261 0.791 2.261h-8.615zM26 25.031h-9v-1h9v1zM26 23.031h-9v-1h9v1zM26 21.031h-9v-1h9v1zM26 19.031h-9v-1h9v1z"></path>
                </svg>
            </Link>
            <style jsx>{`
                .AboutIcon {
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
                .aboutSvg:hover {
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

export default AboutIcon;
