import { Suspense, lazy } from "react";

const Navbar = lazy(() => import("./components/Navbar.jsx"));
const Introduction = lazy(() => import("./components/Introduction"));
const Skills = lazy(() => import("./components/Skills.jsx"));
const Projects = lazy(() => import("./components/Projects.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"))
const App = () => {
    return (
        <div className="w-[90%] md:w-[80%] mx-auto min-h-screen bg-white-100 text-black font-rubik scrollbar-hide dark:bg-dark-100 dark:text-white-100">
            <Navbar />
            <Introduction />
            <Suspense fallback={<div className="text-xl text-black font-mono tracking-widest h-screen bg-white-100 flex justify-center items-center overflow-hidden uppercase">Aryan Sharma</div>}>
                <Skills />
                <Projects />
                <Contact />
            </Suspense>
            <Footer />
        </div>
    );
};

export default App;
