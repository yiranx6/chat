import React, { useEffect } from 'react';

const BubbleBackGround = () => {
    useEffect(() => {
        const bubbles = document.querySelectorAll('.animate-bubble');

        const animateBubbles = () => {
            let delay = 0;
            bubbles.forEach(bubble => {
                setTimeout(() => {
                    const randomSize = Math.floor(Math.random() * 30) + 5; // Random size between 10 and 40 pixels
                    const randomLeft = Math.floor(Math.random() * 100); // Random horizontal position
                    const randomTop = 65 + randomSize; // Start position just below the bottom of the screen

                    bubble.style.width = `${randomSize}px`;
                    bubble.style.height = `${randomSize}px`;
                    bubble.style.top = `${randomTop}%`;
                    bubble.style.left = `${randomLeft}%`;

                    // Trigger the transition by applying the CSS class
                    bubble.classList.remove('animate-bubble');
                    void bubble.offsetWidth; // This line triggers a reflow, making the transition smooth
                    bubble.classList.add('animate-bubble');
                }, delay);

                // Increase the delay for the next bubble
                delay += 300; // 500ms delay between each bubble
            });
        };

        // Initial animation
        animateBubbles();

        // Set interval to animate the bubbles every 3.1 seconds (slightly longer than the animation duration)
        const intervalId = setInterval(animateBubbles, 4000);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="relative w-80 h-80 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-full overflow-hidden">
                {/* Bubbles */}
                <div className="absolute w-8 h-8 bg-white rounded-full animate-bubble"></div>
                <div className="absolute w-8 h-8 bg-white rounded-full animate-bubble"></div>
                <div className="absolute w-8 h-8 bg-white rounded-full animate-bubble"></div>
                <div className="absolute w-8 h-8 bg-white rounded-full animate-bubble"></div>
                <div className="absolute w-8 h-8 bg-white rounded-full animate-bubble"></div>
                <div className="absolute w-8 h-8 bg-white rounded-full animate-bubble"></div>
                <div className="absolute w-8 h-8 bg-white rounded-full animate-bubble"></div>
            </div>
        </div>
    );
};

export default BubbleBackGround;