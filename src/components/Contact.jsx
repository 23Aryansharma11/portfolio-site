import React from 'react';
import PhoneEmailForm from './PhoneEmailForm';

const Contact = () => {
    return (
        <section id="contact" className="px-4 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-14 w-full overflow-hidden dark:bg-dark-100 dark:text-white">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center dark:text-gray-200">
                Have an Idea? Let’s Make It Happen!
            </h2>
            <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-8 mt-8">
                <PhoneEmailForm myEmail="23aryansharma11@gmail.com" />
                
            </div>
        </section>
    );
};

export default Contact;
