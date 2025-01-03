import { Suspense, lazy } from "react";

const Navbar = lazy(() => import("./components/Navbar.jsx"));
const Introduction = lazy(() => import("./components/Introduction"));
const Skills = lazy(() => import("./components/Skills.jsx"));
const Projects = lazy(() => import("./components/Projects.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));

const App = () => {
    return (
        <div className="w-[90%] md:w-[80%] mx-auto min-h-screen bg-white-100 text-black font-rubik">
            <Navbar />
            <Introduction />
            <Suspense fallback={<div className="text-xl text-black font-mono tracking-widest h-screen bg-white-100 flex justify-center items-center overflow-hidden uppercase">Aryan Sharma</div>}>
                <Skills />
                <Projects />
                <Contact />
            </Suspense>
            <footer className="py-6">
                <hr />
                <h6 className=" text-sm text-center md:text-left text-gray-600 py-2">
                    &copy; {new Date().getFullYear()} Aryan Sharma. All Rights Reserved.
                </h6>
            </footer>
        </div>
    )
}
export default App;
