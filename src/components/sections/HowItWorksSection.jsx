import React from 'react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import SectionHeader from '../ui/SectionHeader';
import { steps } from '../../data/content';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/**
 * How It Works section with numbered steps
 */
const HowItWorksSection = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section className="section-padding bg-white">
            <Container>
                <div ref={ref} className={isVisible ? 'animate-fade-in' : 'opacity-0'}>
                    <SectionHeader
                        title="How It Works"
                        description="FlowSite AI transforms your business with a simple, proven 3-step process."
                        className="mb-16"
                    />

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {steps.map((step, index) => (
                            <Card
                                key={step.number}
                                className={`relative ${isVisible ? 'animate-slide-up' : 'opacity-0'} hover:shadow-xl transition-shadow duration-300`}
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                {/* Step Number Badge */}
                                <div className="inline-block mb-6">
                                    <span className="bg-yellow-200 text-dark-900 text-lg font-bold px-4 py-2 rounded-full">
                                        {step.number}
                                    </span>
                                </div>

                                {/* Step Content */}
                                <h4 className="text-2xl font-bold text-dark-900 mb-4">{step.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HowItWorksSection;
