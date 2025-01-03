import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";

const App = () => {
    return (
        <div className="w-[90%] md:w-[80%] mx-auto min-h-screen bg-white-100 text-black font-rubik">
            <Navbar/>
            <Introduction/>
            <Projects/>
            <Skills/>
        </div>
    )
}
export default App