import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import PresetSection from './components/sections/PresetSection';
import WebsitesSection from './components/sections/WebsitesSection';
import WhySquishSection from './components/sections/WhySquishSection';
import HowItWorksSection from './components/sections/HowItWorksSection';
import UseCasesSection from './components/sections/UseCasesSection';
import CoreFeaturesSection from './components/sections/CoreFeaturesSection';
import PresetsGallerySection from './components/sections/PresetsGallerySection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import PricingSection from './components/sections/PricingSection';
import FAQSection from './components/sections/FAQSection';
import ContactSection from './components/sections/ContactSection';
import './index.css';

/**
 * Main App Component
 * Assembles all sections of the Squish website clone
 */
function App() {
    return (
        <div className="App">
            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main>
                <HeroSection />
                <PresetSection />
                <WhySquishSection />
                <HowItWorksSection />
                <UseCasesSection />
                <WebsitesSection />
                <CoreFeaturesSection />
                <PresetsGallerySection />
                <TestimonialsSection />
                <PricingSection />
                <FAQSection />
                <ContactSection />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default App;
