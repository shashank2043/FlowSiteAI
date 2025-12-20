import React from 'react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import SectionHeader from '../ui/SectionHeader';
import { industries } from '../../data/content';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/**
 * Use Cases section with visual gallery
 */
const UseCasesSection = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section id="industries" className="section-padding bg-white">
            <Container>
                <div ref={ref} className={isVisible ? 'animate-fade-in' : 'opacity-0'}>
                    <SectionHeader
                        label="Industries We Serve"
                        title="FlowSite AI for Every Business"
                        description="From real estate to healthcare, we help businesses across industries automate and grow."
                        className="mb-12"
                    />

                    {/* Industries Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {industries.map((industry, index) => (
                            <Card
                                key={industry.id}
                                className={`text-center ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <div className="text-6xl mb-3">{industry.icon}</div>
                                <h4 className="text-md font-semibold text-dark-900">{industry.name}</h4>
                            </Card>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default UseCasesSection;
