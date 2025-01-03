import React from 'react';
import { annotate, annotationGroup } from 'rough-notation';
import AnimatedSection from './AnimationSection';

const Introduction = () => {
    const getAnnotatedElement = (id, color, type = "highlight") => {
        const element = document.getElementById(id);
        if (element) {
            return annotate(element, {
                type: type,
                color: color,
                annotated: true,
                animationDuration: 900
            });
        }
    };

    React.useEffect(() => {
        const e1 = getAnnotatedElement('dev', "#A4C6E0");
        const e2 = getAnnotatedElement('tailored', "#B4D3B1");
        const e3 = getAnnotatedElement('user-friendly', "#C8D0E0");
        const e5 = getAnnotatedElement('elevate', "#C9D7A6");
        const e6 = getAnnotatedElement('online-presence', "#E0C8B5");
        const e7 = getAnnotatedElement('hire-me', "#F2A6A6", "circle");

        const annotationGroups = annotationGroup([e1, e2, e3, e5, e6, e7]);
        annotationGroups.show();
    }, []);

    return (
        <section
            id="about"
            className="flex flex-col-reverse lg:flex-row items-center gap-8 px-4 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-14"
        >
            {/* Text Section */}
            <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold mb-6  ">
                    Hello! I'm Aryan, a {" "}
                    <span id="dev">developer</span> {" "} based in India.
                </h1>
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-4 leading-relaxed">
                    I specialize in creating <span id="">modern, </span> high-performance websites <span id="tailored">tailored</span> to the unique needs of each business. With over 2 years of experience, I love building <span id="user-friendly">fast</span>, user-friendly, and <span id="">modern </span> websites that stand out.
                </p>
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-4 leading-relaxed">
                    I'm currently pursuing a B.Tech in Computer Science Engineering while helping businesses <span id="elevate">elevate</span> their online presence. I thrive in flexible and <span id="online-presence">
                        collaborative</span> environments, ensuring my work aligns with the goals and vision of my clients.
                </p>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 leading-relaxed">
                    I am currently looking for a new role as a developer. <br /> <span className="font-semibold text-gray-500" id="hire-me">Hire me?</span>
                </p>
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <a
                        href="https://www.linkedin.com/in/aryan-sharma-webdev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target='_blank'
                        className="py-3 px-6 rounded bg-black text-white-100 text-center text-sm sm:text-base font-medium"
                    >
                        View LinkedIn
                    </a>
                    <a
                        href="https://github.com/23Aryansharma11"
                        target='_blank'
                        className="py-3 px-6 rounded border-2 border-gray-300 text-gray-500 text-center text-sm sm:text-base font-medium"
                    >
                        View GitHub
                    </a>
                </div>
            </div>

            {/* Animation Section */}
            <div className="flex-shrink-0 w-full sm:w-3/4 md:w-5/12 h-auto">
                <AnimatedSection />
            </div>
        </section>
    );
};

export default Introduction;
