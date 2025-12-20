import React from 'react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import SectionHeader from '../ui/SectionHeader';
import { websites } from '../../data/content';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/**
 * Websites Gallery section  
 */
const WebsitesSection = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section id="websites" className="section-padding bg-cream-50">
            <Container>
                <div ref={ref} className={isVisible ? 'animate-fade-in' : 'opacity-0'}>
                    <SectionHeader
                        title="Website Solutions"
                        description="Premium web development services for every business need."
                        className="mb-12"
                    />

                    {/* Websites Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {websites.map((website, index) => (
                            <Card
                                key={website.id}
                                className={`${isVisible ? 'animate-slide-up' : 'opacity-0'} text-center group cursor-pointer`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Icon */}
                                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-blue-100 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-4xl">{website.icon}</span>
                                </div>

                                {/* Category Badge */}
                                <Badge variant="info" className="mb-3">
                                    {website.category}
                                </Badge>

                                {/* Title */}
                                <h4 className="text-xl font-bold text-dark-900 mb-2">{website.title}</h4>

                                {/* Description */}
                                <p className="text-gray-600 text-sm leading-relaxed">{website.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default WebsitesSection;
