import { useContext } from 'react';
import ThemeContext from '../contexts/theme/themeContext';

const GlobalStyles = props => {
    const { isDarkMode } = useContext(ThemeContext);
    return (
        <div className={isDarkMode ? 'globalStyles--dark' : 'globalStyles--light'}>
            {props.children}

            <style jsx global>{`
                :root {
                    --black: #272727;
                    --white: #fff;
                    --teal: #46b4b1;
                    --light-grey: #d3d3d3;
                    --azure: #effffb;
                    --light-green: #50d890;
                    --blue: #47a2f2;
                    --grey: #959595;
                }

                *,
                *::before,
                *::after {
                    margin: 0;
                    padding: 0;
                    box-sizing: inherit;
                }

                html {
                    font-size: 62.5%;
                }

                body {
                    box-sizing: border-box;
                    font-family: "Arial";
                }

                .globalStyles--dark {
                    background-color: var(--black);
                }

                .globalStyles--light {
                    background-color: var(--white);
                }
            `}</style>
        </div>
    );
};
export default GlobalStyles;
