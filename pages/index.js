import GlobalStyles from "../components/GlobalStyles";
import Home from "../components/Home/Home";
import ThemeState from "../contexts/theme/ThemeState";

const Index = () => {
    return (
        <ThemeState>
            <GlobalStyles>
                
                <Home/>
                
            </GlobalStyles>
        </ThemeState>
    );
};

export default Index;
