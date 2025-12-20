import React, { useState } from 'react';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import { faqItems } from '../../data/content';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/**
 * FAQ section with accordion functionality
 */
const FAQSection = () => {
    const [ref, isVisible] = useScrollAnimation();
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="section-padding bg-white">
            <Container maxWidth="narrow">
                <div ref={ref} className={isVisible ? 'animate-fade-in' : 'opacity-0'}>
                    <SectionHeader
                        label="FAQ"
                        title="Frequently Asked Questions"
                        description="Quick answers to common questions about FlowSite AI services."
                        className="mb-16"
                    />

                    {/* FAQ Accordion */}
                    <div className="space-y-4">
                        {faqItems.map((item, index) => (
                            <div
                                key={item.id}
                                className={`bg-cream-50 rounded-2xl overflow-hidden ${isVisible ? 'animate-slide-up' : 'opacity-0'
                                    }`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Question Button */}
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-cream-100 transition-colors"
                                >
                                    <span className="font-semibold text-dark-900 text-lg pr-8">
                                        {item.question}
                                    </span>
                                    <svg
                                        className={`w-6 h-6 text-dark-900 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>

                                {/* Answer */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                        }`}
                                >
                                    <div className="px-6 pb-5 text-gray-700">{item.answer}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default FAQSection;
