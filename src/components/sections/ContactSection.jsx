import React, { useState } from 'react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/**
 * Contact page section with form and direct contact options
 */
const ContactSection = () => {
    const [ref, isVisible] = useScrollAnimation();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const whatsappNumber = '8886113839';
    const handleWhatsAppSubmit = (e) => {
        e.preventDefault();
        const message = encodeURIComponent(
            `Hi! I'm ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`
        );
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="section-padding bg-white">
            <Container>
                <div ref={ref} className={isVisible ? 'animate-fade-in' : 'opacity-0'}>
                    {/* Main Heading */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold text-dark-900 mb-6">
                            Let's Connect
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Get in touch with our team for consultations, quotes, or questions about our services.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <Card className="p-8">
                            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                                {/* Name Field */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-dark-900 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-cream-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="Your name"
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-dark-900 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-cream-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-dark-900 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 bg-cream-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <Button type="submit" className="w-full">
                                    Send via WhatsApp
                                </Button>
                            </form>
                        </Card>

                        {/* Direct Contact Options */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-dark-900 mb-6">
                                Reach Us Directly
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Prefer a direct approach? Reach out through the channels below.
                            </p>

                            {/* WhatsApp Card */}
                            <Card className="p-6 hover:shadow-xl transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">💬</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-bold text-dark-900 mb-2">WhatsApp Us</h4>
                                        <p className="text-gray-600 text-sm mb-3">
                                            Get instant responses and quick quotes on WhatsApp.
                                        </p>
                                        <a
                                            href={`https://wa.me/${whatsappNumber}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary font-semibold hover:underline"
                                        >
                                            +91 {whatsappNumber}
                                        </a>
                                    </div>
                                </div>
                            </Card>

                            {/* Email Card */}
                            <Card className="p-6 hover:shadow-xl transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">📧</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-bold text-dark-900 mb-2">Email Us</h4>
                                        <p className="text-gray-600 text-sm mb-3">
                                            Send detailed inquiries and project requirements via email.
                                        </p>
                                        <a
                                            href="mailto:info@flowsiteai.com"
                                            className="text-primary font-semibold hover:underline"
                                        >
                                            pulluriaravind@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </Card>

                            {/* Call Card */}
                            <Card className="p-6 hover:shadow-xl transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">📞</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-bold text-dark-900 mb-2">Call Us</h4>
                                        <p className="text-gray-600 text-sm mb-3">
                                            Speak directly with our team for consultations.
                                        </p>
                                        <a
                                            href={`tel:${whatsappNumber}`}
                                            className="text-primary font-semibold hover:underline"
                                        >
                                            +91 {whatsappNumber}
                                        </a>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ContactSection;
