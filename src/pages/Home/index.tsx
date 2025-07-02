import React from 'react';
import Header from '../../components/common/Header';
import HeroSection from './HeroSection';
import ProcessSection from './ProcessSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import PortfolioSection from './PortfolioSection';
import CallToActionSection from './CallToActionSection';
import CoreValuesSection from './CoreValuesSection';
import TeamSection from './TeamSection';
import FooterSection from './FooterSection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#eaeae3] font-space-grotesk">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="w-full">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Process Section */}
        <ProcessSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* Portfolio Section */}
        <PortfolioSection />
        
        {/* Call to Action Section */}
        <CallToActionSection />
        
        {/* Core Values Section */}
        <CoreValuesSection />
        
        {/* Team Section */}
        <TeamSection />
      </main>
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default HomePage;