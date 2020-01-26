import Link from "next/link";
import { useRef } from 'react';

const ContactIcon = () => {
    const text = useRef(null);
    
    const handleEnter = () => {
        text.current.classList.add('textOpacity');
    }
    const handleLeave = () => {
        text.current.classList.remove('textOpacity');
    }
    return (
        <div className="ContactIcon">
            <p ref={text} className="tooltip">Contact</p>
            <Link href="#">
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="#959595"
                    opacity=".5"
                    className="contactSvg"
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                >
                    <path d="M16.015 18.861l-4.072-3.343-8.862 10.463h25.876l-8.863-10.567-4.079 3.447zM29.926 6.019h-27.815l13.908 11.698 13.907-11.698zM20.705 14.887l9.291 11.084v-18.952l-9.291 7.868zM2.004 7.019v18.952l9.291-11.084-9.291-7.868z"></path>
                </svg>
            </Link>
            <style jsx>{`
                .ContactIcon {
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
                .contactSvg:hover {
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

export default ContactIcon;
