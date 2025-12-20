import React, { useState, useEffect } from 'react';
import { navLinks } from '../../data/content';
import { useScrollSpy } from '../../hooks/useScrollSpy';

/**
 * Navigation bar component with sticky behavior and mobile menu
 */
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const activeSection = useScrollSpy(['services', 'industries', 'websites', 'automation', 'pricing', 'contact']);

    // Handle scroll for navbar shadow
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href) => {
        const sectionId = href.replace('#', '');
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav
            className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled
                ? 'bg-white/70 backdrop-blur-2xl backdrop-saturate-150 shadow-sm border-b border-black/5'
                : 'bg-white/40 backdrop-blur-2xl backdrop-saturate-200 border-b border-black/5'
                }`}
            style={{
                WebkitBackdropFilter: isScrolled
                    ? 'blur(40px) saturate(150%)'
                    : 'blur(40px) saturate(200%)',
            }}
        >
            <div className="container-width">
                <div className="flex items-center justify-between h-20">
                    {/* Logo with Text */}
                    <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <img
                            src="/images/FlowSite nt.png"
                            alt="FlowSite AI Icon"
                            className="h-10 w-auto object-contain"
                        />
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold tracking-wide" style={{ color: '#7f8f9d' }}>
                                FlowSite
                            </span>
                            <span className="text-sm font-bold text-white bg-primary px-1.5 py-0.5 rounded">
                                AI
                            </span>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => {
                            const sectionId = link.href.replace('#', '');
                            const isActive = activeSection === sectionId;

                            return (
                                <button
                                    key={link.name}
                                    onClick={() => scrollToSection(link.href)}
                                    className={`text-base font-medium transition-colors relative ${isActive ? 'text-dark-900' : 'text-gray-600 hover:text-dark-900'
                                        }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-dark-900"></span>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-dark-900 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.href)}
                                className="block w-full text-left py-3 text-base font-medium text-gray-600 hover:text-dark-900 transition-colors"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
