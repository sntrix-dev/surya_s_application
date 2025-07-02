import React from 'react';
import Button from '../../components/ui/Button';
import EditText from '../../components/ui/EditText';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="w-full lg:max-w-[1628px] mx-auto">
        {/* Main Hero Content */}
        <div className="flex flex-col gap-16 sm:gap-20 md:gap-24 lg:gap-32 justify-start items-center w-full">
          
          {/* Hero Title Stack */}
          <div className="relative w-full flex justify-center items-center min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[318px]">
            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[150px] xl:text-[200px] 2xl:text-[250px] font-bold leading-tight text-center text-[#000000] font-space-grotesk uppercase tracking-tight">
              Edios Studio
            </h1>
            
            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Top Right Circle */}
              <div className="absolute top-4 sm:top-8 md:top-12 lg:top-16 right-8 sm:right-16 md:right-24 lg:right-32">
                <img 
                  src="/images/img_placeholder.svg" 
                  alt="Decorative element" 
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 rounded-full"
                />
              </div>
              
              {/* Left Side Circle */}
              <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 left-8 sm:left-16 md:left-24 lg:left-32">
                <img 
                  src="/images/img_placeholder.svg" 
                  alt="Decorative element" 
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 lg:w-15 lg:h-15 rounded-full"
                />
              </div>
              
              {/* Right Side Elements */}
              <div className="absolute bottom-0 right-0 flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 lg:gap-16 items-end">
                <div className="hidden sm:block">
                  <img 
                    src="/images/img_placeholder.svg" 
                    alt="Decorative element" 
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 lg:w-15 lg:h-15 rounded-full"
                  />
                </div>
                
                <div className="hidden md:block">
                  <img 
                    src="/images/img_placeholder.svg" 
                    alt="Decorative element" 
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 rounded-full"
                  />
                </div>
                
                {/* Stats Card */}
                <div className="bg-[#f4bd3c] rounded-2xl p-2 sm:p-3 md:p-4 flex items-center gap-2 sm:gap-3">
                  <img 
                    src="/images/img_profile.svg" 
                    alt="Profile" 
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                  />
                  <span className="text-lg sm:text-xl md:text-2xl font-medium text-[#000000] font-space-grotesk">
                    2.5K
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Row */}
          <div className="flex flex-col lg:flex-row justify-start items-start w-full gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            
            {/* Left Content */}
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 justify-start items-center w-full lg:w-1/4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-left text-[#000000] font-space-grotesk w-full">
                The Best Diet Solutions for a Healthy, Happy Life
              </h2>
              <p className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-left text-[#000000] font-space-grotesk w-full">
                Discover the best diet solutions for a healthier and happier life. Make health a priority and achieve the.
              </p>
            </div>
            
            {/* Center Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12 justify-center items-center w-full lg:flex-1 px-0 sm:px-8 md:px-12 lg:px-14">
              {/* Get Started Button */}
              <div className="flex items-center gap-3 sm:gap-4 md:gap-5 bg-[#0c0b09] rounded-[30px] px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-4 w-full sm:w-auto">
                <span className="text-lg sm:text-xl md:text-2xl font-medium text-[#ffffff] font-space-grotesk">
                  Get Started
                </span>
                <img 
                  src="/images/img_arrow_right.svg" 
                  alt="Arrow right" 
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                />
              </div>
              
              {/* Learn More Button */}
              <Button 
                variant="outline"
                size="large"
                className="w-full sm:w-auto"
              >
                Learn More
              </Button>
            </div>
            
            {/* Right Content - Service Links */}
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 justify-start items-center w-full lg:w-1/4">
              <EditText
                placeholder="Our Service"
                leftIcon="/images/img_arrowright_black_900.svg"
                className="bg-[#f4e3cd]"
              />
              <EditText
                placeholder="Our Team"
                leftIcon="/images/img_arrowright_black_900.svg"
                className="bg-[#f4e3cd]"
              />
              <EditText
                placeholder="Our Portfolio"
                leftIcon="/images/img_arrowright_black_900.svg"
                className="bg-[#f4e3cd]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;