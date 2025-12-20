import React from 'react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import SectionHeader from '../ui/SectionHeader';
import { coreFeatures } from '../../data/content';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/**
 * Core Features section with 6-item grid
 */
const CoreFeaturesSection = () => {
    const [ref, isVisible] = useScrollAnimation();

    const icons = ['💾', '🖼️', '📦', '🎨', '🎛️', '💬'];

    return (
        <section className="section-padding bg-cream-50">
            <Container>
                <div ref={ref} className={isVisible ? 'animate-fade-in' : 'opacity-0'}>
                    <SectionHeader
                        label="Core Features"
                        title="Everything You Need to Automate & Scale"
                        description="A comprehensive suite of web development and AI automation features designed to transform your business operations."
                        className="mb-16"
                    />

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coreFeatures.map((feature, index) => (
                            <Card
                                key={feature.id}
                                className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-pastel-pink to-pastel-blue rounded-2xl flex items-center justify-center mb-4">
                                    <span className="text-3xl">{icons[index]}</span>
                                </div>

                                <h4 className="text-xl font-bold text-dark-900 mb-3">{feature.title}</h4>
                                <p className="text-gray-600">{feature.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CoreFeaturesSection;
