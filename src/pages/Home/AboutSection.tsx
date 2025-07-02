import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="w-full lg:max-w-[1628px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 justify-start items-center w-full mb-12 sm:mb-16 md:mb-20">
          <div className="flex flex-col gap-1 sm:gap-2 justify-start items-center w-full sm:w-4/5 md:w-3/4 lg:w-1/2">
            <span className="text-base sm:text-lg md:text-xl font-bold leading-relaxed text-center text-[#f57338] font-space-grotesk uppercase">
              About
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center text-[#000000] font-space-grotesk">
              Exceptional Digital Experiences
            </h2>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-center text-[#000000] font-space-grotesk w-full sm:w-4/5 md:w-3/4 lg:w-1/2">
            Let us bring your concepts to life with designs that inspire and engage your brand's needs.
          </p>
        </div>
        
        {/* Image and CTA Section */}
        <div className="flex flex-col justify-start items-center w-full gap-0">
          {/* Main Image */}
          <div className="w-full relative">
            <img 
              src="/images/img_image.svg" 
              alt="Exceptional digital experiences showcase"
              className="w-full h-auto object-cover rounded-lg"
            />
            
            {/* Floating CTA Button */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <button 
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-[#f4bd3c] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                aria-label="Scroll down for more content"
              >
                <img 
                  src="/images/img_solar_arrow_down_linear.svg" 
                  alt="Arrow down"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;