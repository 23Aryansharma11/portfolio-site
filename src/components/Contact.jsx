import React from 'react';
import PhoneEmailForm from './PhoneEmailForm';

const Contact = () => {

    return (
        <section id="contact" className="px-4 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-14 w-full overflow-hidden">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center">
                Have an Idea? Let’s Make It Happen!
            </h2>
            <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-8 mt-8">
                <PhoneEmailForm myEmail="23aryansharma11@gmail.com" />
                <div className="w-full md:w-auto text-center md:text-left">
                    <p className="text-lg font-medium">Contact Me</p>
                    <p className="mt-4 text-sm text-gray-600 space-x-2">
                        <span>📧 Email:</span>
                        <a href="mailto:hey@aryansharma.com" className="text-gray-800 hover:text-gray-600 transition duration-300">23aryansharma11@gmail.com</a>
                    </p>
                    <p className="mt-2 text-sm text-gray-600 space-x-2">
                        <span>📱 Phone:</span>
                        <a href="tel:+919876543210" className="text-gray-800 hover:text-gray-600 transition duration-300">+91 8988429695</a>
                    </p>
                    <div className="mt-6 flex justify-center md:justify-start gap-4">
                        <a href="https://x.com/23aryansharma11" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition duration-300">
                            Twitter
                        </a>
                        <a href="https://www.linkedin.com/in/aryan-sharma-webdev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition duration-300">
                            LinkedIn
                        </a>
                        <a href="https://github.com/23Aryansharma11" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition duration-300">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
