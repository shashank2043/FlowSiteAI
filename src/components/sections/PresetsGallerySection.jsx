import React from 'react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import SectionHeader from '../ui/SectionHeader';
import { automations } from '../../data/content';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/**
 * Automation Gallery section  
 */
const PresetsGallerySection = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section id="automation" className="section-padding bg-white">
            <Container>
                <div ref={ref} className={isVisible ? 'animate-fade-in' : 'opacity-0'}>
                    <SectionHeader
                        title="Automation Workflows"
                        description="Powerful automation solutions to streamline your business operations."
                        className="mb-12"
                    />

                    {/* Automation Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {automations.map((automation, index) => (
                            <Card
                                key={automation.id}
                                className={`text-center ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="text-6xl mb-4">{automation.icon}</div>
                                <h4 className="text-lg font-bold text-dark-900 mb-2">{automation.title}</h4>
                                <p className="text-sm text-gray-600">{automation.category}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default PresetsGallerySection;
