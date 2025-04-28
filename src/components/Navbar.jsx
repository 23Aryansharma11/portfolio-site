import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";
import resume from "../assets/Aryan_Sharma_Resume.pdf";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Load theme from localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDark(savedTheme === 'dark');
            document.documentElement.classList.toggle('dark', savedTheme === 'dark');
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDark(prefersDark);
            document.documentElement.classList.toggle('dark', prefersDark);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark ? 'dark' : 'light';
        setIsDark(!isDark);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', !isDark);
    };

    return (
        <header className="sticky top-0 z-10 border-b-2 border-gray-200 bg-white-100 p-2 pt-3 dark:bg-dark-100">
            <nav className="flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="">
                    <h3 className="text-lg text-gray-700 dark:text-white-100">ARYAN SHARMA</h3>
                </a>

                {/* Hamburger Icon */}
                <div className="flex items-center justify-center gap-1 md:gap-5">
                    <div className="cursor-pointer md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <CiMenuFries className="text-2xl text-gray-500 dark:text-white-100" size={20} />
                        ) : (
                            <CiMenuBurger className="text-2xl text-gray-500 dark:text-white-100" size={20} />
                        )}
                    </div>

                    {/* Navigation Links */}
                    <section className="hidden flex-col space-y-2 md:flex md:flex-row md:space-x-5 md:space-y-0">
                        <a href="#about" className="text-gray-500 hover:text-gray-700 dark:text-gray-200 dark:hover:text-white-100">
                            About
                        </a>
                        <a href="#skills" className="text-gray-500 hover:text-gray-700 dark:text-gray-200 dark:hover:text-white-100">
                            Skills
                        </a>
                        <a href="#projects" className="text-gray-500 hover:text-gray-700 dark:text-gray-200 dark:hover:text-white-100">
                            Projects
                        </a>
                        <a href={resume} className="text-gray-500 dark:text-gray-200" download="AryanSharmaResume.pdf">
                            Resume
                        </a>
                        <a href="#contact" className="text-gray-500 hover:text-gray-700 dark:text-gray-200 dark:hover:text-white-100">
                            Contact
                        </a>
                    </section>

                    {/* Theme Toggle Button */}
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={toggleTheme}
                            className=""
                        >
                            {isDark ? <MdOutlineLightMode size={20} className="text-gray-500 hover:text-gray-700 dark:text-gray-200 dark:hover:text-white-100" /> : <MdOutlineDarkMode size={20} className="text-gray-500 hover:text-gray-700 dark:text-gray-200 dark:hover:text-white-100" />}
                        </button>

                        {/* Hamburger Icon for Mobile */}
                        {isOpen && (
                            <motion.div
                                className="absolute right-4 top-12 z-20 w-48 rounded-lg bg-white-100 shadow-lg dark:bg-dark-200"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            >
                                <div className="flex flex-col space-y-3 p-4">
                                    <a
                                        href="#about"
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-500 hover:text-gray-700 dark:text-gray-200 dark:hover:text-white-100"
                                    >
                                        About
                                    </a>
                                    <a
                                        href="#skills"
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-500 hover:text-gray-700 dark:text-gray-200 dark:hover:text-white-100"
                                    >
                                        Skills
                                    </a>
                                    <a
                                        href="#projects"
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-500 hover:text-gray-700 dark:text-gray-200 dark:hover:text-white-100"
                                    >
                                        Projects
                                    </a>
                                    <a
                                        href={resume}
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-500 hover:text-gray-700 dark:text-gray-200 dark:hover:text-white-100"
                                        download="AryanSharmaResume.pdf"
                                    >
                                        Resume
                                    </a>
                                    <a
                                        href="#contact"
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-500 hover:text-gray-700 dark:text-gray-200 dark:hover:text-white-100"
                                    >
                                        Contact
                                    </a>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
