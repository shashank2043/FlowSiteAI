import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/**
 * Final CTA section with background visuals
 */
const FinalCTASection = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section id="contact" className="section-padding relative overflow-hidden gradient-bg">
            <Container>
                <div
                    ref={ref}
                    className={`text-center relative z-10 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                >
                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6">
                        Ready to Transform Your Business?
                    </h2>

                    {/* Description */}
                    <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                        Join hundreds of businesses that have automated their workflows and upgraded their digital presence.
                    </p>

                    {/* CTA Button */}
                    <a
                        href="https://wa.me/8886113839?text=Hi!%20I'd%20like%20to%20get%20started%20with%20FlowSite%20AI%20services."
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button>Get Started with FlowSite AI</Button>
                    </a>
                </div>

                {/* Floating Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-pastel-green rounded-full opacity-40 blur-2xl animate-float"></div>
                    <div className="absolute bottom-20 right-10 w-40 h-40 bg-pastel-yellow rounded-full opacity-40 blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pastel-blue rounded-full opacity-40 blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
                </div>
            </Container>
        </section>
    );
};

export default FinalCTASection;
