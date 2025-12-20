import React from 'react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';
import { services } from '../../data/content';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/**
 * Free presets showcase section
 */
const PresetSection = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section id="services" className="section-padding bg-cream-50">
            <Container>
                <div ref={ref} className={isVisible ? 'animate-fade-in' : 'opacity-0'}>
                    <SectionHeader
                        title="Our Core Services"
                        description="We combine cutting-edge web development with intelligent automation to give you a complete digital transformation."
                        className="mb-12"
                    />

                    {/* Services Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {services.map((service, index) => (
                            <Card
                                key={service.id}
                                className={`group ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Service icon with gradient background */}
                                <div className="w-full h-56 bg-gradient-to-br from-primary-50 via-blue-50 to-cyan-50 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <span className="text-9xl relative z-10 filter drop-shadow-lg">{service.icon}</span>
                                </div>

                                <h3 className="text-3xl font-bold text-dark-900 mb-4">{service.title}</h3>
                                <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default PresetSection;
