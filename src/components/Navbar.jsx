import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="p-2 pt-3 border-b-2 border-gray-200 sticky top-0 bg-white-100 z-10">
            <nav className="flex justify-between items-center">
                {/* Logo */}
                <a href="/" className="">
                    <h3 className="text-gray-700 text-lg">ARYAN SHARMA</h3>
                </a>

                {/* Hamburger Icon */}
                <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <span className="text-gray-500 cursor-pointer">
                        &#9776;
                    </span>
                </div>

                {/* Navigation Links */}
                <section className="hidden md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-5">
                    <a href="#about" className="text-gray-500 hover:text-gray-700">
                        About
                    </a>
                    <a href="#skills" className="text-gray-500 hover:text-gray-700">
                        Skills
                    </a>
                    <a href="#projects" className="text-gray-500 hover:text-gray-700">
                        Projects
                    </a>
                    <a href="#contact" className="text-gray-500 hover:text-gray-700">
                        Contact
                    </a>
                </section>

                {/* Dropdown Section */}
                <section className={`fixed inset-0 md:relative bg-white-100 transition-transform transform ${isOpen ? 'translate-y-0' : 'translate-y-full'} md:translate-y-0 ease-in-out duration-300 z-20 md:hidden`}>
                    <div className="flex flex-col p-4 space-y-2 md:hidden">
                        <div className="flex justify-between items-center">
                            <h3 className="text-gray-700 text-lg">ARYAN SHARMA</h3>
                            <span className="text-gray-500 cursor-pointer" onClick={() => setIsOpen(false)}>
                                &#10005; {/* Cross Icon */}
                            </span>
                        </div>
                        <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                            About
                        </a>
                        <a href="#skills" onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                            Skills
                        </a>
                        <a href="#projects" onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                            Projects
                        </a>
                        <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                            Contact
                        </a>
                    </div>
                </section>
            </nav>
        </header>
    );
}

export default Navbar;
