import { useState } from 'react';
// Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

const ScreenSvg = () => {
    const [isAnimating, setIsAnimating] = useState(true);

    const handleAnimationEnd = async () => {
        setTimeout(() => {
            setIsAnimating(false);
        }, 10000)
        setTimeout(() => {
            setIsAnimating(true);
        }, 11000)
    }
    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            width="250"
            height="250"
            className="screen"
        >
            <g>
                <polygon
                    fill="transparent" //95A5A5
                    className="stand"
                    points="310.376,425.22 256,425.22 201.624,425.22 177.898,503.322 256,503.322 334.102,503.322 	
		"
                />
                <path
                    fill="transparent" //BDC3C7
                    className="screen-bottom"
                    d="M507.661,364.475v52.068c-0.028,9.574-7.782,17.328-17.356,17.356H21.695
		c-9.574-0.028-17.328-7.782-17.356-17.356v-52.068H507.661z"
                />
                <path
                    fill="transparent" //5E5F62
                    className="screen-outer"
                    d="M507.661,17.356v347.119H4.339V17.356C4.367,7.782,12.121,0.028,21.695,0h468.61
		C499.879,0.028,507.633,7.782,507.661,17.356z"
                />
                <path
                    fill="transparent" //BDC3C7
                    className="stand-bottom"
                    d="M351.458,512H160.542c-4.793,0-8.678-3.885-8.678-8.678c0-4.793,3.885-8.678,8.678-8.678h190.915
		c4.793,0,8.678,3.885,8.678,8.678C360.136,508.115,356.25,512,351.458,512z"
                />
                <path
                    fill="transparent" //547580
                    className={isAnimating && "side-background"}
                    d="M151.864,86.78v242.983H47.729c-4.793,0-8.678-3.885-8.678-8.678V86.78H151.864z"
                />
                <path
                    fill="transparent" //35495E
                    className={isAnimating && "bottom-chart-background"}
                    d="M472.949,190.915v130.169c-0.014,4.787-3.891,8.664-8.678,8.678H151.864V190.915H472.949z"
                />
                <rect
                    x="151.864"
                    y="86.78"
                    fill="transparent" //3F5C6C
                    className={isAnimating && "top-chart-background"}
                    width="321.085"
                    height="104.136"
                />
                <path
                    fill="transparent" //A5A5A4
                    className={isAnimating && "header-logo"}
                    d="M91.119,34.712V86.78H39.051V43.39c0-4.793,3.885-8.678,8.678-8.678H91.119z"
                />
                <path
                    fill="transparent" //D1D4D1
                    className={isAnimating && "header-background"}
                    d="M472.949,43.39v43.39H91.119V34.712h373.153C469.064,34.712,472.949,38.597,472.949,43.39z"
                />
                <g>
                    <path
                        fill="transparent" //ECF0F1
                        className={isAnimating && "header--1"}
                        d="M160.542,69.424h-34.712c-4.793,0-8.678-3.885-8.678-8.678s3.885-8.678,8.678-8.678h34.712
			c4.793,0,8.678,3.885,8.678,8.678S165.335,69.424,160.542,69.424z"
                    />
                    <path
                        fill="transparent" //ECF0F1
                        className={isAnimating && "header--3"}
                        d="M342.78,69.424h-34.712c-4.793,0-8.678-3.885-8.678-8.678s3.885-8.678,8.678-8.678h34.712
			c4.793,0,8.678,3.885,8.678,8.678S347.572,69.424,342.78,69.424z"
                    />
                    <path
                        fill="transparent" //ECF0F1
                        className={isAnimating && "header--2"}
                        d="M273.356,69.424h-78.102c-4.793,0-8.678-3.885-8.678-8.678s3.885-8.678,8.678-8.678h78.102
			c4.793,0,8.678,3.885,8.678,8.678S278.149,69.424,273.356,69.424z"
                    />
                </g>
                <path
                    fill="transparent" //D1D4D1
                    className={isAnimating && "side-dot--1"}
                    d="M65.085,130.169c-2.297-0.034-4.497-0.933-6.161-2.517c-0.766-0.844-1.382-1.813-1.822-2.864
		c-0.445-1.043-0.681-2.163-0.694-3.297c-0.079-3.534,2.077-6.734,5.381-7.987c2.113-0.864,4.48-0.864,6.593,0
		c1.051,0.442,2.02,1.06,2.865,1.826c2.503,2.483,3.256,6.233,1.904,9.489C71.798,128.075,68.61,130.19,65.085,130.169z"
                />
                <path
                    fill="transparent" //E64C3C
                    className={isAnimating && "side-text--1"}
                    d="M117.153,130.169H91.119c-4.793,0-8.678-3.885-8.678-8.678c0-4.793,3.885-8.678,8.678-8.678h26.034
		c4.793,0,8.678,3.885,8.678,8.678C125.831,126.284,121.945,130.169,117.153,130.169z"
                />
                <path
                    fill="transparent" //D1D4D1
                    className={isAnimating && "side-dot--2"}
                    d="M65.085,164.881c-2.297-0.034-4.497-0.933-6.161-2.517c-0.802-0.816-1.423-1.792-1.822-2.864
		c-0.445-1.043-0.681-2.163-0.694-3.297c0.03-2.298,0.929-4.499,2.517-6.161c0.829-0.786,1.802-1.406,2.864-1.826
		c2.113-0.864,4.481-0.864,6.593,0c1.051,0.442,2.02,1.06,2.865,1.826c2.503,2.483,3.256,6.233,1.904,9.489
		C71.798,162.787,68.61,164.902,65.085,164.881z"
                />
                <path
                    fill="transparent" //F29C1F
                    className={isAnimating && "side-text--2"}
                    d="M117.153,164.881H91.119c-4.793,0-8.678-3.885-8.678-8.678c0-4.793,3.885-8.678,8.678-8.678h26.034
		c4.793,0,8.678,3.885,8.678,8.678C125.831,160.996,121.945,164.881,117.153,164.881z"
                />
                <path
                    fill="transparent" //D1D4D1
                    className={isAnimating && "side-dot--3"}
                    d="M65.085,199.593c-1.134-0.014-2.254-0.25-3.297-0.695c-3.306-1.249-5.464-4.45-5.381-7.983
		c0.014-1.135,0.25-2.257,0.695-3.301c0.44-1.05,1.056-2.018,1.822-2.861c3.403-3.403,8.92-3.403,12.323,0
		c3.403,3.403,3.403,8.92,0,12.323c-0.846,0.764-1.814,1.38-2.864,1.822C67.339,199.344,66.219,199.58,65.085,199.593z"
                />
                <path
                    fill="transparent" //E6E7E8
                    className={isAnimating && "side-text--3"}
                    d="M117.153,199.593H91.119c-4.793,0-8.678-3.885-8.678-8.678s3.885-8.678,8.678-8.678h26.034
		c4.793,0,8.678,3.885,8.678,8.678S121.945,199.593,117.153,199.593z"
                />
                <path
                    fill="transparent" //D1D4D1
                    className={isAnimating && "side-dot--4"}
                    d="M65.085,234.305c-2.297-0.034-4.497-0.933-6.161-2.517c-0.784-0.83-1.403-1.802-1.822-2.864
		c-0.445-1.043-0.681-2.163-0.694-3.297c-0.021-3.526,2.094-6.713,5.35-8.065c3.256-1.352,7.007-0.6,9.489,1.904
		c0.347,0.432,0.695,0.864,1.042,1.301c0.326,0.484,0.588,1.008,0.78,1.559c0.265,0.518,0.44,1.076,0.517,1.653
		c0.105,0.544,0.165,1.095,0.178,1.649c0.022,2.308-0.885,4.529-2.517,6.161C69.613,233.42,67.393,234.328,65.085,234.305z"
                />
                <path
                    fill="transparent" //E64C3C
                    className={isAnimating && "side-text--4"}
                    d="M117.153,234.305H91.119c-4.793,0-8.678-3.885-8.678-8.678s3.885-8.678,8.678-8.678h26.034
		c4.793,0,8.678,3.885,8.678,8.678S121.945,234.305,117.153,234.305z"
                />
                <path
                    fill="transparent" //D1D4D1
                    className={isAnimating && "side-dot--5"}
                    d="M65.085,269.017c-2.308,0.022-4.529-0.885-6.161-2.517c-1.632-1.632-2.539-3.853-2.517-6.161
		c0.014-1.135,0.25-2.257,0.695-3.301c0.418-1.061,1.037-2.032,1.822-2.861c2.483-2.503,6.233-3.256,9.489-1.904
		c3.256,1.352,5.371,4.539,5.35,8.065c-0.013,0.553-0.073,1.105-0.178,1.648c-0.078,0.575-0.253,1.132-0.517,1.648
		c-0.191,0.553-0.453,1.078-0.78,1.564c-0.347,0.432-0.695,0.864-1.042,1.301C69.581,268.083,67.382,268.981,65.085,269.017z"
                />
                <path
                    fill="transparent" //F29C1F
                    className={isAnimating && "side-text--5"}
                    d="M117.153,269.017H91.119c-4.793,0-8.678-3.885-8.678-8.678c0-4.793,3.885-8.678,8.678-8.678h26.034
		c4.793,0,8.678,3.885,8.678,8.678C125.831,265.132,121.945,269.017,117.153,269.017z"
                />
                <circle
                    fill="transparent" //E64C3C
                    className={isAnimating && "pie"}
                    cx="386.169"
                    cy="260.339"
                    r="43.39"
                />
                <path
                    fill="transparent" //84B5CB
                    className={isAnimating && "small-chart--y"}
                    d="M290.712,269.017c-2.302,0.001-4.509-0.913-6.137-2.541s-2.542-3.835-2.541-6.137v-43.39
		c0-4.793,3.885-8.678,8.678-8.678c4.793,0,8.678,3.885,8.678,8.678v43.39c0.001,2.302-0.914,4.509-2.541,6.137
		C295.221,268.103,293.014,269.018,290.712,269.017z"
                />
                <path
                    fill="transparent" //E64C3C
                    className={isAnimating && "small-chart--line"}
                    d="M177.89,269.017c-3.208-0.004-6.151-1.777-7.656-4.61s-1.324-6.264,0.469-8.924l7.814-11.572
		c1.325-1.963,3.395-3.299,5.73-3.699c2.335-0.4,4.731,0.171,6.635,1.581l6.958,5.161l11.195-24.886
		c1.167-2.593,3.53-4.45,6.325-4.971c2.795-0.521,5.668,0.359,7.692,2.356l15.992,15.792l9.763-14.475
		c1.735-2.57,4.709-4.02,7.803-3.803c3.094,0.217,5.836,2.068,7.195,4.856c1.359,2.788,1.127,6.088-0.608,8.659l-15.619,23.14
		c-1.446,2.14-3.769,3.525-6.339,3.78c-2.57,0.255-5.12-0.648-6.958-2.462l-14.542-14.364l-10.492,23.322
		c-1.078,2.396-3.183,4.174-5.725,4.838c-2.542,0.663-5.248,0.14-7.359-1.423l-8.331-6.178l-2.737,4.059
		C183.478,267.588,180.777,269.021,177.89,269.017z"
                />
                <path
                    fill="transparent" // 84B5CB
                    className={isAnimating && "small-chart--x"}
                    d="M299.39,303.729H177.898c-4.793,0-8.678-3.885-8.678-8.678c0-4.793,3.885-8.678,8.678-8.678H299.39
		c4.793,0,8.678,3.885,8.678,8.678C308.068,299.844,304.183,303.729,299.39,303.729z"
                />
                <path
                    fill="transparent" //2FA8CC
                    className={isAnimating && "big-line-chart"}
                    d="M472.949,123.054v20.567l-18.744-11.889l-22.129,13.972l-17.616,16.835
		c-2.629,2.441-6.484,3.026-9.719,1.475l-33.497-15.881l-24.211,7.637c-2.088,0.684-4.36,0.529-6.335-0.434l-15.186-7.203
		l-23.17,7.29l-26.468,16.835c-2.162,1.318-4.789,1.634-7.203,0.868l-27.509-8.678c-1.23-0.377-2.358-1.03-3.298-1.909
		l-13.104-12.496l-30.807,21.868c-2.543,1.887-5.929,2.189-8.765,0.781l-12.93-6.075l-20.393,19.439v-24.038l12.757-12.149
		c2.63-2.441,6.484-3.026,9.719-1.475l13.711,6.508l32.456-23.083c3.344-2.405,7.921-2.114,10.934,0.694l16.922,16.054l21.695,6.856
		l23.951-15.273c0.662-0.362,1.36-0.653,2.083-0.868l27.422-8.678c2.088-0.684,4.36-0.529,6.335,0.434l15.186,7.203l24.212-7.637
		c2.088-0.684,4.36-0.529,6.335,0.434l31.241,14.753l13.972-13.277l1.302-1.041l27.422-17.356c2.852-1.735,6.433-1.735,9.285,0
		L472.949,123.054z"
                />
                <path
                    fill="transparent" //26B99A
                    className={isAnimating && "pie-piece"}
                    onAnimationEnd={handleAnimationEnd}
                    d="M420.881,234.305l-34.712,26.034v-43.39C399.824,216.962,412.679,223.389,420.881,234.305z"
                />
            </g>

            <style jsx>{`
                
                .stand-bottom {
                    animation: fill-stand-bottom 1s ease forwards 0.2s;
                }
                .stand {
                    animation: fill-stand 2s ease forwards 0.2s;
                }
                .screen-bottom {
                    animation: fill-screen-bottom 2s ease forwards 0.2s;
                }
                .screen-outer {
                    animation: fill-screen-outer 2s ease forwards 0.2s;
                }
                .header-background {
                    animation: fill-header-background 2s ease forwards 1.5s;
                }
                .header-logo {
                    animation: fill-header-logo 2s ease forwards 1.5s;
                }
                .side-background {
                    animation: fill-side-background 2s ease forwards 2s;
                }
                .top-chart-background {
                    animation: fill-top-chart-background 2s ease forwards 2.5s;
                }
                .bottom-chart-background {
                    animation: fill-bottom-chart-background 2s ease forwards 3s;
                }
                .header--1 {
                    animation: fill-header--1 2s ease forwards 3.5s;
                }
                .header--2 {
                    animation: fill-header--2 2s ease forwards 3.5s;
                }
                .header--3 {
                    animation: fill-header--3 2s ease forwards 3.5s;
                }
                .side-dot--1 {
                    animation: fill-side-dot--1 2s ease forwards 4s;
                }
                .side-text--1 {
                    animation: fill-side-text--1 2s ease forwards 4s;
                }

                .side-dot--2 {
                    animation: fill-side-dot--2 2s ease forwards 4.5s;
                }
                .side-text--2 {
                    animation: fill-side-text--2 2s ease forwards 4.5s;
                }

                .side-dot--3 {
                    animation: fill-side-dot--3 2s ease forwards 5s;
                }
                .side-text--3 {
                    animation: fill-side-text--3 2s ease forwards 5s;
                }

                .side-dot--4 {
                    animation: fill-side-dot--4 2s ease forwards 5.5s;
                }
                .side-text--4 {
                    animation: fill-side-text--4 2s ease forwards 5.5s;
                }

                .side-dot--5 {
                    animation: fill-side-dot--5 2s ease forwards 6s;
                }
                .side-text--5 {
                    animation: fill-side-text--5 2s ease forwards 6.5s;
                }

                .small-chart--x {
                    animation: fill-small-chart--x 2s ease forwards 7s;
                }
                .small-chart--y {
                    animation: fill-small-chart--y 2s ease forwards 7s;
                }
                .small-chart--line {
                    animation: fill-small-chart--line 2s ease forwards 8s;
                }
                .pie {
                    animation: fill-pie 2s ease forwards 9s;
                }
                .big-line-chart {
                    animation: fill-big-line-chart 2s ease forwards 10s;
                }
                .pie-piece {
                    animation: fill-pie-piece 2s ease forwards 11s;
                }

                @keyframes fill-stand-bottom {
                    to {
                        fill: #bdc3c7;
                    }
                }
                @keyframes fill-stand {
                    to {
                        fill: #95a5a5;
                    }
                }
                @keyframes fill-screen-bottom {
                    to {
                        fill: #bdc3c7;
                    }
                }
                @keyframes fill-screen-outer {
                    to {
                        fill: #5e5f62;
                    }
                }
                @keyframes fill-header-background {
                    to {
                        fill: #d1d4d1;
                    }
                }
                @keyframes fill-header-logo {
                    to {
                        fill: #a5a5a4;
                    }
                }
                @keyframes fill-side-background {
                    to {
                        fill: #547580;
                    }
                }
                @keyframes fill-top-chart-background {
                    to {
                        fill: #3F5C6C;
                    }
                }
                @keyframes fill-bottom-chart-background {
                    to {
                        fill: #35495E;
                    }
                }
                @keyframes fill-header--1 {
                    to {
                        fill: #ecf0f1;
                    }
                }
                @keyframes fill-header--2 {
                    to {
                        fill: #ecf0f1;
                    }
                }
                @keyframes fill-header--3 {
                    to {
                        fill: #ecf0f1;
                    }
                }

                @keyframes fill-side-dot--1 {
                    to {
                        fill: #d1d4d1;
                    }
                }
                @keyframes fill-side-text--1 {
                    to {
                        fill: #e64c3c;
                    }
                }

                @keyframes fill-side-dot--2 {
                    to {
                        fill: #d1d4d1;
                    }
                }
                @keyframes fill-side-text--2 {
                    to {
                        fill: #f29c1f;
                    }
                }

                @keyframes fill-side-dot--3 {
                    to {
                        fill: #d1d4d1;
                    }
                }
                @keyframes fill-side-text--3 {
                    to {
                        fill: #e6e7e8;
                    }
                }

                @keyframes fill-side-dot--4 {
                    to {
                        fill: #d1d4d1;
                    }
                }
                @keyframes fill-side-text--4 {
                    to {
                        fill: #e64c3c;
                    }
                }

                @keyframes fill-side-dot--5 {
                    to {
                        fill: #d1d4d1;
                    }
                }
                @keyframes fill-side-text--5 {
                    to {
                        fill: #f29c1f;
                    }
                }

                @keyframes fill-small-chart--x {
                    to {
                        fill: #9cd0f7;
                    }
                }
                @keyframes fill-small-chart--y {
                    to {
                        fill: #9cd0f7;
                    }
                }
                @keyframes fill-small-chart--line {
                    to {
                        fill: #E64C3C;
                    }
                }
                @keyframes fill-pie {
                    to {
                        fill: #E64C3C;
                    }
                }
                @keyframes fill-big-line-chart {
                    to {
                        fill: #2FA8CC;
                    }
                }
                @keyframes fill-pie-piece {
                    to {
                        fill: #26b99a;
                    }
                }
            `}</style>
        </svg>
    );
};

export default ScreenSvg;
