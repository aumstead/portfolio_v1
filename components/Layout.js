import PhotoIcon from './icons/PhotoIcon';
import HomeIcon from './icons/HomeIcon';
import ProjectsIcon from './icons/ProjectsIcon';
import ContactIcon from './icons/ContactIcon';
import AboutIcon from './icons/AboutIcon';

const Layout = ({ page, children }) => {
    return (
        <div className="grid">
            <nav className="navbar">
                
                <HomeIcon />
                
                <ProjectsIcon />
                <AboutIcon />
                <PhotoIcon />
                <ContactIcon />
            </nav>

            <main className="content">
                <p className="head">
                    <span className="blue">const</span>
                    <span className="yellow"> {page}</span> = ()
                    <span className="blue"> =></span> &#123;
                    <br />
                    &nbsp;&nbsp;<span className="purple">return</span> (<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                </p>
                {children}

                <p className="foot">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <br />
                    &nbsp;&nbsp;);
                    <br />
                    &#125;;
                    <br />
                    <br />
                    <span className="purple">export default</span>
                    <span className="light-blue"> {page}</span>;
                </p>
            </main>

            <style jsx>{`
                .grid {
                    display: grid;
                    grid-template-columns: 8rem 1fr;
                }

                .navbar {
                    background-color: #202020;
                    height: 100vh;
                    display: grid;
                    grid-template-rows: repeat(5, min-content);
                    grid-template-columns: 1fr;
                    grid-gap: 3rem;
                    justify-items: center;
                    align-content: center;
                    position:relative;
                }

                .head {
                    color: white;
                    font-size: 1.8rem;
                    font-size: 1.4rem;
                    font-family: 'Gaegu', cursive;
                    font-family: 'Roboto Mono', 'Monaco', monospace;
                    position: absolute;
                    top: 4vh;
                    left: 9vw;
                    opacity: 0.4;
                }

                .head:hover {
                    cursor: default;
                }

                .foot {
                    color: white;
                    font-size: 1.8rem;
                    font-size: 1.4rem;
                    font-family: 'Gaegu', cursive;
                    font-family: 'Roboto Mono', 'Monaco', monospace;
                    
                    position: absolute;
                    bottom: 4vh;
                    left: 9vw;
                    opacity: 0.4;
                }

                .foot:hover {
                    cursor: default;
                }

                .blue {
                    color: var(--grey);
                    color: #47a2f2;
                }

                .yellow {
                    color: var(--grey);
                    color: #fff7b5;
                }

                .purple {
                    color: var(--grey);
                    color: #e177f2;
                }

                .light-blue {
                    color: var(--grey);
                    color: #9cd0f7;
                }
            `}</style>
        </div>
    );
};

export default Layout;
