import React from 'react';

const Footer = () => {
    return (
        <footer className="py-6 bg-white-100 dark:bg-dark-100">
            <hr className="border-gray-300 dark:border-gray-700" />
            <div className="mt-6 flex flex-col items-center md:items-start space-y-4 md:space-y-0 md:flex-row md:justify-between">
                <div className="flex flex-col items-center md:items-start space-y-2">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Aryan Sharma. All Rights Reserved.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        A passionate web developer specializing in building seamless, user-friendly web applications.
                    </p>
                    <div className="flex flex-col items-start space-y-2">
                        <a href="mailto:23aryansharma11@gmail.com" className="hover:text-gray-600 transition duration-300 dark:hover:text-gray-300">
                            📧 Email: 23aryansharma11@gmail.com
                        </a>
                        <a href="tel:+919876543210" className="hover:text-gray-600 transition duration-300 dark:hover:text-gray-300">
                            📱 Phone: +91 8988429695
                        </a>
                    </div>
                </div>

                <div className="flex space-x-4">
                    <a href="https://x.com/23aryansharma11" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition duration-300 dark:hover:text-gray-300">
                        Twitter
                    </a>
                    <a href="https://www.linkedin.com/in/aryan-sharma-webdev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition duration-300 dark:hover:text-gray-300">
                        LinkedIn
                    </a>
                    <a href="https://github.com/23Aryansharma11" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition duration-300 dark:hover:text-gray-300">
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
