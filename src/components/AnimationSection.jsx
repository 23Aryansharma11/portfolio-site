import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/animation.json'; // Adjust path if needed

const AnimatedSection = () => {
    return (
        <div className="w-full h-auto">
            <Lottie animationData={animationData} loop={true} autoPlay />
        </div>
    );
};

export default AnimatedSection;
