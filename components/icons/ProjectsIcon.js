import Link from "next/link";
import { useRef } from "react";

const ProjectsIcon = () => {
    const text = useRef(null);

    const handleEnter = () => {
        text.current.classList.add("textOpacity");
    };
    const handleLeave = () => {
        text.current.classList.remove("textOpacity");
    };
    return (
        <div className="ProjectsIcon">
            <p ref={text} className="tooltip">
                Projects
            </p>
            <Link href="#">
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="32"
                    viewBox="0 0 35 32"
                    fill="#959595"
                    opacity=".5"
                    className="projectsSvg"
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                >
                    <path d="M8.431 9.155h20.958c2.158 0 2.158-2.238 0.084-2.238h-14.486c-0.83 0-1.244-1.244-1.244-1.244s-0.581-1.825-1.743-1.825h-10.789c-1.576 0-1.162 1.825-1.162 1.825s2.407 20.47 2.573 21.715 1.453 1.612 1.453 1.612l2.821-18.103c0.208-1.327 1.12-1.7 1.535-1.742zM33.658 9.942h-24.563c-0.733 0-1.328 0.594-1.328 1.327l-2.572 16.4c0 0.734 0.595 1.328 1.328 1.328h24.563c0.732 0 1.328-0.594 1.328-1.328l2.572-16.4c0-0.733-0.593-1.327-1.328-1.327z"></path>
                </svg>
            </Link>
            <style jsx>{`
                .ProjectsIcon {
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

                .projectsSvg:hover {
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

export default ProjectsIcon;
