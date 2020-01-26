import { useState } from 'react';
import ThemeContext from './themeContext';

const ThemeState = props => {
    const [isDarkMode, setDarkMode] = useState(true);

    return (
        <ThemeContext.Provider value={{ isDarkMode, setDarkMode }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeState;