import React from 'react';
import { navLinks } from '../../data/content';

/**
 * Footer component with navigation links and social media
 */
const Footer = () => {
    const scrollToSection = (href) => {
        const sectionId = href.replace('#', '');
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-dark-900 text-white py-12">
            <div className="container-width">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Logo & Description */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="/images/FlowSite nt.png"
                                alt="FlowSite AI Icon"
                                className="h-12 w-auto object-contain"
                            />
                            <div className="flex items-center gap-2">
                                <h3 className="text-2xl font-bold tracking-wide" style={{ color: '#7f8f9d' }}>
                                    FlowSite
                                </h3>
                                <span className="text-sm font-bold text-white bg-primary px-1.5 py-0.5 rounded">
                                    AI
                                </span>
                            </div>
                        </div>
                        <p className="text-gray-400 leading-relaxed max-w-sm">
                            Transform your business with premium web development and intelligent AI automation.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Find us on</h4>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                                aria-label="Twitter"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                                aria-label="Instagram"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="17.5" cy="6.5" r="1.5" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} Squish. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            Terms of Service
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
