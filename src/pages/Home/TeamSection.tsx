import React from 'react';
import Button from '../../components/ui/Button';

const TeamSection: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="w-full lg:max-w-[1628px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-center items-center w-full mb-12 sm:mb-16 md:mb-20 gap-8 lg:gap-16">
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 justify-start items-start w-full lg:flex-1">
            <span className="text-base sm:text-lg md:text-xl font-bold leading-relaxed text-left text-[#f57338] font-space-grotesk uppercase">
              Process
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-left text-[#000000] font-space-grotesk w-full lg:w-3/5">
              Meet the Experts Driving Innovation
            </h2>
          </div>
          
          <div className="w-full lg:w-auto">
            <Button 
              variant="primary"
              size="large"
              className="w-full lg:w-auto flex items-center gap-4 sm:gap-5 md:gap-6"
            >
              Our Team
              <img 
                src="/images/img_arrowright_black_900_12x24.svg" 
                alt="Arrow right"
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              />
            </Button>
          </div>
        </div>
        
        {/* Team Grid */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-8 w-full">
          
          {/* Team Member 1 - Placeholder */}
          <div className="w-full lg:w-1/4 h-64 sm:h-80 md:h-96 lg:h-[380px] bg-[#d9d9d9] rounded-lg"></div>
          
          {/* Team Member 2 - Image */}
          <div className="w-full lg:w-1/4 h-64 sm:h-80 md:h-96 lg:h-[380px] rounded-lg overflow-hidden">
            <img 
              src="/images/img_image.svg" 
              alt="Team member"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Featured Team Member - Anthony Lin */}
          <div 
            className="w-full lg:w-1/4 h-64 sm:h-80 md:h-96 lg:h-[380px] rounded-lg overflow-hidden bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: 'url(/images/img_image_black_900_580x380.svg)' }}
          >
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 sm:p-8 md:p-10">
              <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 justify-start items-center text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center text-[#ffffff] font-space-grotesk">
                  Anthony Lin
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl font-normal leading-tight text-center text-[#ffffff] font-space-grotesk">
                  Creative People
                </p>
                
                {/* CTA Button */}
                <div className="mt-2 sm:mt-3 md:mt-4">
                  <button className="w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 bg-[#f4bd3c] rounded-[30px] flex items-center justify-center hover:bg-[#f4bd3c]/90 transition-colors duration-300">
                    <img 
                      src="/images/img_arrowright_black_900_12x24.svg" 
                      alt="View profile"
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Team Member 4 - Placeholder */}
          <div className="w-full lg:w-1/4 h-64 sm:h-80 md:h-96 lg:h-[380px] bg-[#d9d9d9] rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;