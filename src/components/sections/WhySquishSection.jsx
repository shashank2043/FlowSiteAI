import React from 'react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import SectionHeader from '../ui/SectionHeader';
import { whyFlowSiteFeatures, stats } from '../../data/content';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/**
 * Why Squish section with features and stats
 */
const WhySquishSection = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section className="section-padding bg-white">
            <Container>
                <div ref={ref} className={isVisible ? 'animate-fade-in' : 'opacity-0'}>
                    <SectionHeader
                        label="Why FlowSite AI"
                        title="The Power of Web + Automation"
                        description="Most agencies offer either websites or automations. FlowSite AI delivers both in one seamless ecosystem."
                        className="mb-16"
                    />

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {whyFlowSiteFeatures.map((feature, index) => (
                            <Card
                                key={feature.id}
                                className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                                    <span className="text-2xl">⚡</span>
                                </div>
                                <h4 className="text-xl font-bold text-dark-900 mb-2">{feature.title}</h4>
                                <p className="text-gray-600">{feature.description}</p>
                            </Card>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.id}
                                className={`text-center ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                            >
                                <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
                                <div className="text-lg font-semibold text-dark-800 mb-2">{stat.label}</div>
                                <p className="text-gray-600 text-sm">{stat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default WhySquishSection;
