import Layout from "../Layout";
import ScreenSvg from "./ScreenSvg";
import Link from "next/link";
import CoffeeSvg from "./CoffeeSvg";

const Home = () => {
    const handleHover = e => {
        e.target.classList.add("animate");
    };
    const handleAnimateEnd = e => {
        e.target.classList.remove("animate");
    };
    return (
        <Layout page="Home">
            <div className="Home">
                <h1>
                    <span className="h1--open">
                        <span className="arrow">&lt;</span>h1
                        <span className="arrow">&gt;</span>
                    </span>
                    <span
                        onAnimationEnd={handleAnimateEnd}
                        className="letterSpan"
                        onMouseOver={handleHover}
                    >
                        H
                    </span>
                    <span
                        onAnimationEnd={handleAnimateEnd}
                        className="letterSpan"
                        onMouseOver={handleHover}
                    >
                        i
                    </span>
                    <span
                        onAnimationEnd={handleAnimateEnd}
                        className="letterSpan"
                        onMouseOver={handleHover}
                    >
                        ,
                    </span>
                    <br />
                    <span
                        onAnimationEnd={handleAnimateEnd}
                        className="letterSpan"
                        onMouseOver={handleHover}
                    >
                        I
                    </span>
                    <span
                        onAnimationEnd={handleAnimateEnd}
                        className="letterSpan"
                        onMouseOver={handleHover}
                    >
                        '
                    </span>
                    <span
                        onAnimationEnd={handleAnimateEnd}
                        className="letterSpan"
                        onMouseOver={handleHover}
                    >
                        m
                    </span>
                    &nbsp;
                    <span
                        onAnimationEnd={handleAnimateEnd}
                        className="letterSpan"
                        onMouseOver={handleHover}
                    >
                        A
                    </span>
                    <span
                        onAnimationEnd={handleAnimateEnd}
                        className="letterSpan"
                        onMouseOver={handleHover}
                    >
                        n
                    </span>
                    <span
                        onAnimationEnd={handleAnimateEnd}
                        className="letterSpan"
                        onMouseOver={handleHover}
                    >
                        d
                    </span>
                    <span
                        onAnimationEnd={handleAnimateEnd}
                        className="letterSpan"
                        onMouseOver={handleHover}
                    >
                        r
                    </span>
                    <span
                        onAnimationEnd={handleAnimateEnd}
                        className="letterSpan"
                        onMouseOver={handleHover}
                    >
                        e
                    </span>
                    <span
                        onAnimationEnd={handleAnimateEnd}
                        className="letterSpan"
                        onMouseOver={handleHover}
                    >
                        w
                    </span>
                    <span
                        onAnimationEnd={handleAnimateEnd}
                        className="letterSpan"
                        onMouseOver={handleHover}
                    >
                        ,
                    </span>
                    <br />
                    <span
                        onAnimationEnd={handleAnimateEnd}
                        className="letterSpan"
                        onMouseOver={handleHover}
                    >
                        a
                    </span>
                    &nbsp;
                    <span
                        onAnimationEnd={handleAnimateEnd}
                        className="letterSpan"
                        onMouseOver={handleHover}
                    >
                        F
                    </span>
                    <span
                        onAnimationEnd={handleAnimateEnd}
                        className="letterSpan"
                        onMouseOver={handleHover}
                    >
                        r
                    </span>
                    <span
                        onAnimationEnd={handleAnimateEnd}
                        className="letterSpan"
                        onMouseOver={handleHover}
                    >
                        o
                    </span>
                    <span
                        onAnimationEnd={handleAnimateEnd}
                        className="letterSpan"
                        onMouseOver={handleHover}
                    >
                        n
                    </span>
                    <span
                        onAnimationEnd={handleAnimateEnd}
                        className="letterSpan"
                        onMouseOver={handleHover}
                    >
                        t
                    </span>
                    <span
                        onAnimationEnd={handleAnimateEnd}
                        className="letterSpan"
                        onMouseOver={handleHover}
                    >
                        e
                    </span>
                    <span
                        onAnimationEnd={handleAnimateEnd}
                        className="letterSpan"
                        onMouseOver={handleHover}
                    >
                        n
                    </span>
                    <span
                        onAnimationEnd={handleAnimateEnd}
                        className="letterSpan"
                        onMouseOver={handleHover}
                    >
                        d
                    </span>
                    &nbsp;
                    <span
                        onAnimationEnd={handleAnimateEnd}
                        className="letterSpan"
                        onMouseOver={handleHover}
                    >
                        D
                    </span>
                    <span
                        onAnimationEnd={handleAnimateEnd}
                        className="letterSpan"
                        onMouseOver={handleHover}
                    >
                        e
                    </span>
                    <span
                        onAnimationEnd={handleAnimateEnd}
                        className="letterSpan"
                        onMouseOver={handleHover}
                    >
                        v
                    </span>
                    <span
                        onAnimationEnd={handleAnimateEnd}
                        className="letterSpan"
                        onMouseOver={handleHover}
                    >
                        e
                    </span>
                    <span
                        onAnimationEnd={handleAnimateEnd}
                        className="letterSpan"
                        onMouseOver={handleHover}
                    >
                        l
                    </span>
                    <span
                        onAnimationEnd={handleAnimateEnd}
                        className="letterSpan"
                        onMouseOver={handleHover}
                    >
                        o
                    </span>
                    <span
                        onAnimationEnd={handleAnimateEnd}
                        className="letterSpan"
                        onMouseOver={handleHover}
                    >
                        p
                    </span>
                    <span
                        onAnimationEnd={handleAnimateEnd}
                        className="letterSpan"
                        onMouseOver={handleHover}
                    >
                        e
                    </span>
                    <span
                        onAnimationEnd={handleAnimateEnd}
                        className="letterSpan"
                        onMouseOver={handleHover}
                    >
                        r
                    </span>
                    <span
                        onAnimationEnd={handleAnimateEnd}
                        className="letterSpan"
                        onMouseOver={handleHover}
                    >
                        .
                    </span>
                    <span className="h1--close">
                        <span className="arrow">&lt;/</span>h1
                        <span className="arrow">&gt;</span>
                    </span>
                </h1>
                <p>HTML / CSS / JavaScript / React</p>
                <div className="screenSvg-container">
                    <ScreenSvg />
                </div>
                <div className="coffeeSvg-container">
                    <CoffeeSvg />
                </div>
                <Link href="#">
                    <a className="cta">View my projects</a>
                </Link>

                <style jsx>{`
                    .Home {
                        display: grid;
                        height: 100vh;
                        grid-template-columns: repeat(12, 1fr);
                        grid-template-rows: repeat(12, 1fr);
                        // grid-template-rows: max-content max-content 1fr;
                    }

                    .screenSvg-container {
                        grid-column: 8 / -1;
                        grid-row: 4 / -1;
                        margin-top: 4.5rem;
                        margin-left: 4rem;
                    }
                    .coffeeSvg-container {
                        grid-column: 10 / -1;
                        grid-row: 6 / -1;
                        margin-top: 5rem;
                        margin-left: 7rem;
                    }
                    h1 {
                        font-family: "Arial";
                        font-size: 5rem;
                        color: var(--white);
                        // margin-top: 35vh;
                        // margin-left: 8vw;
                        grid-column: 2 / -1;
                        grid-row: 5 / 8;
                        position: relative;
                    }

                    p {
                        grid-row: 8;
                        grid-column: 2 / 7;
                        color: var(--grey);
                        font-size: 1.6rem;
                        margin-top: 1rem;
                    }

                    .cta,
                    .cta:link,
                    .cta:visited {
                        grid-column: 2 / -1;
                        grid-row: 9;
                        width: 18rem;
                        height: 4.5rem;
                        color: var(--blue);
                        text-decoration: none;
                        text-transform: uppercase;
                        font-size: 1.4rem;
                        border: 2px solid var(--blue);
                        border-radius: 10px;
                        text-align: center;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: all 0.3s;
                    }

                    .cta:hover,
                    .cta:link:hover,
                    .cta:visited:hover {
                        background-color: var(--blue);
                        color: var(--black);
                    }

                    .h1--open {
                        color: var(--grey);
                        color: #47a2f2;
                        font-size: 1.4rem;
                        opacity: 0.4;
                        font-family: "Gaegu", cursive;
                        font-family: "Roboto Mono", "Monaco", monospace;
                        position: absolute;
                        left: -5rem;
                        //top: -2rem;
                    }

                    .h1--close {
                        color: var(--grey);
                        color: #47a2f2;
                        font-size: 1.4rem;
                        opacity: 0.4;
                        font-family: "Gaegu", cursive;
                        font-family: "Roboto Mono", "Monaco", monospace;
                        position: absolute;
                        bottom: 0.4rem;
                        margin-left: 1.4rem;
                    }

                    .arrow {
                        color: var(--grey);
                    }

                    .letterSpan {
                        display: inline-block;
                    }

                    .animate {
                        animation: bounce-top 0.9s both;
                    }

                    @-webkit-keyframes bounce-top {
                        0% {
                            -webkit-transform: translateY(-25px);
                            transform: translateY(-25px);
                            -webkit-animation-timing-function: ease-in;
                            animation-timing-function: ease-in;
                            opacity: 1;
                        }
                        24% {
                            opacity: 1;
                        }
                        40% {
                            -webkit-transform: translateY(-15px);
                            transform: translateY(-15px);
                            -webkit-animation-timing-function: ease-in;
                            animation-timing-function: ease-in;
                        }
                        65% {
                            -webkit-transform: translateY(-12px);
                            transform: translateY(-12px);
                            -webkit-animation-timing-function: ease-in;
                            animation-timing-function: ease-in;
                        }
                        82% {
                            -webkit-transform: translateY(-6px);
                            transform: translateY(-6px);
                            -webkit-animation-timing-function: ease-in;
                            animation-timing-function: ease-in;
                        }
                        93% {
                            -webkit-transform: translateY(-4px);
                            transform: translateY(-4px);
                            -webkit-animation-timing-function: ease-in;
                            animation-timing-function: ease-in;
                        }
                        25%,
                        55%,
                        75%,
                        87% {
                            -webkit-transform: translateY(0px);
                            transform: translateY(0px);
                            -webkit-animation-timing-function: ease-out;
                            animation-timing-function: ease-out;
                        }
                        100% {
                            -webkit-transform: translateY(0px);
                            transform: translateY(0px);
                            -webkit-animation-timing-function: ease-out;
                            animation-timing-function: ease-out;
                            opacity: 1;
                        }
                    }
                    @keyframes bounce-top {
                        0% {
                            -webkit-transform: translateY(-25px);
                            transform: translateY(-25px);
                            -webkit-animation-timing-function: ease-in;
                            animation-timing-function: ease-in;
                            opacity: 1;
                        }
                        24% {
                            opacity: 1;
                        }
                        40% {
                            -webkit-transform: translateY(-15px);
                            transform: translateY(-15px);
                            -webkit-animation-timing-function: ease-in;
                            animation-timing-function: ease-in;
                        }
                        65% {
                            -webkit-transform: translateY(-12px);
                            transform: translateY(-12px);
                            -webkit-animation-timing-function: ease-in;
                            animation-timing-function: ease-in;
                        }
                        82% {
                            -webkit-transform: translateY(-6px);
                            transform: translateY(-6px);
                            -webkit-animation-timing-function: ease-in;
                            animation-timing-function: ease-in;
                        }
                        93% {
                            -webkit-transform: translateY(-4px);
                            transform: translateY(-4px);
                            -webkit-animation-timing-function: ease-in;
                            animation-timing-function: ease-in;
                        }
                        25%,
                        55%,
                        75%,
                        87% {
                            -webkit-transform: translateY(0px);
                            transform: translateY(0px);
                            -webkit-animation-timing-function: ease-out;
                            animation-timing-function: ease-out;
                        }
                        100% {
                            -webkit-transform: translateY(0px);
                            transform: translateY(0px);
                            -webkit-animation-timing-function: ease-out;
                            animation-timing-function: ease-out;
                            opacity: 1;
                        }
                    }
                `}</style>
            </div>
        </Layout>
    );
};

export default Home;
