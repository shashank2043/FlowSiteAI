import React, { useState, useEffect } from 'react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import SectionHeader from '../ui/SectionHeader';
import { testimonials } from '../../data/content';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/**
 * Testimonials section with horizontal carousel
 */
const TestimonialsSection = () => {
    const [ref, isVisible] = useScrollAnimation();
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-play carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section className="section-padding bg-white">
            <Container>
                <div ref={ref} className={isVisible ? 'animate-fade-in' : 'opacity-0'}>
                    <SectionHeader
                        title="What Our Clients Say"
                        description="Hear from businesses that transformed their operations with FlowSite AI."
                        className="mb-16"
                    />

                    {/* Carousel Container */}
                    <div className="relative max-w-4xl mx-auto">
                        {/* Testimonial Cards */}
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-700 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {testimonials.map((testimonial) => (
                                    <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                                        <Card hover={false} className="text-center py-12">
                                            {/* Quote Icon */}
                                            <div className="text-6xl text-primary mb-6 opacity-20">"</div>

                                            <blockquote className="text-2xl md:text-3xl text-dark-900 mb-8 italic leading-relaxed">
                                                "{testimonial.quote}"
                                            </blockquote>
                                            <div>
                                                <p className="font-bold text-dark-900 text-xl">{testimonial.author}</p>
                                                <p className="text-gray-600 mt-1">{testimonial.role}</p>
                                            </div>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Carousel Dots */}
                        <div className="flex justify-center space-x-2 mt-8">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                                        ? 'bg-dark-900 w-8'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default TestimonialsSection;
