import Link from "next/link";
import { useRef } from "react";

const PhotoIcon = () => {
    const text = useRef(null);

    const handleEnter = () => {
        text.current.classList.add("textOpacity");
    };
    const handleLeave = () => {
        text.current.classList.remove("textOpacity");
    };
    return (
        <div className="PhotoIcon">
            <p ref={text} className="tooltip">
                Photos
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
                    className="photoSvg"
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                >
                    <path d="M28 7l-15.004 0.017 0.004-2.955-8-0.062v3h-2c-1.104 0-2 0.896-2 2v17c0 1.104 0.896 2 2 2h25c1.104 0 2-0.896 2-2v-17c0-1.104-0.896-2-2-2zM7 6h4v3h-4v-3zM12 24.958c-3.866 0-7-3.134-7-7s3.134-7 7-7c3.865 0 7 3.134 7 7s-3.135 7-7 7zM25.5 13.521c-1.105 0-2-0.895-2-2 0-1.104 0.895-2 2-2 1.104 0 2 0.896 2 2s-0.896 2-2 2zM12 13.625c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5z"></path>
                </svg>
            </Link>
            <style jsx>{`
                .PhotoIcon {
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
                    transition: opacity .5s;
                    cursor: default;
                    color: var(--blue);
                }

                .photoSvg:hover {
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

export default PhotoIcon;
