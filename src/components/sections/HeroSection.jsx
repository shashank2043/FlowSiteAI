import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/**
 * Hero section with split layout and 3D model embed
 */
const HeroSection = () => {
    const [titleRef, titleVisible] = useScrollAnimation();
    const [contentRef, contentVisible] = useScrollAnimation();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            // Calculate position relative to center (-1 to 1)
            const x = (clientX / innerWidth - 0.5) * 2;
            const y = (clientY / innerHeight - 0.5) * 2;

            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream-50 via-white to-primary-50/30 py-8 md:py-12">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div
                        ref={titleRef}
                        className={`${titleVisible ? 'animate-slide-up' : 'opacity-0'}`}
                    >
                        {/* Badge */}
                        <div className="inline-block mb-6">
                            <span className="bg-yellow-200 text-dark-900 text-sm font-bold px-4 py-2 rounded-full">
                                AI Automation & Web Development
                            </span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark-900 mb-6 leading-tight">
                            Transform Your Business with{' '}
                            <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                                AI & Web Solutions
                            </span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                            Premium web development and intelligent automation workflows to streamline operations and accelerate growth.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                                Get Started Today
                            </Button>
                            <Button variant="secondary" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                                View Services
                            </Button>
                        </div>


                    </div>

                    {/* Right Content - 3D Model Embed with Mouse Tracking */}
                    <div
                        ref={contentRef}
                        className={`${contentVisible ? 'animate-fade-in' : 'opacity-0'}`}
                        style={{
                            animationDelay: '0.2s',
                            transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg)`,
                            transition: 'transform 0.3s ease-out'
                        }}
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-100 to-blue-100 p-1">
                            <div className="bg-white rounded-3xl overflow-hidden" style={{ height: '500px' }}>
                                <iframe
                                    title="cute robot"
                                    frameBorder="0"
                                    allowFullScreen
                                    mozallowfullscreen="true"
                                    webkitallowfullscreen="true"
                                    allow="autoplay; fullscreen; xr-spatial-tracking"
                                    xr-spatial-tracking="true"
                                    execution-while-out-of-viewport="true"
                                    execution-while-not-rendered="true"
                                    web-share="true"
                                    src="https://sketchfab.com/models/5afb0d365405443a893f6144764688f3/embed?autostart=1&ui_theme=dark"
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Subtle Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary-100 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
            </div>
        </section>
    );
};

export default HeroSection;
