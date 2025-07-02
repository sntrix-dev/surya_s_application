import React from 'react';


const CallToActionSection: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="w-full lg:max-w-[1628px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-8 justify-start items-center w-full">
          
          {/* Left Content */}
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 justify-start items-center w-full lg:w-1/2">
            <div className="flex flex-col gap-1 sm:gap-2 justify-start items-start w-full">
              <span className="text-base sm:text-lg md:text-xl font-bold leading-relaxed text-left text-[#f57338] font-space-grotesk uppercase">
                Call to Action
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-left text-[#000000] font-space-grotesk">
                Let's Bring Your Vision to Life
              </h2>
            </div>
            
            <p className="text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-left text-[#000000] font-space-grotesk w-full">
              Get in touch to explore how we can turn your ideas into innovative solutions that drive success.
            </p>
          </div>
          
          {/* Right Content */}
          <div className="w-full lg:w-1/2">
            <div className="border-2 border-[#000000] rounded-lg p-6 sm:p-8 md:p-10 lg:p-8">
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-8 justify-start items-center">
                
                <div className="w-full sm:w-3/5">
                  <p className="text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-left text-[#000000] font-space-grotesk">
                    Connect with our team to begin crafting a strategy.
                  </p>
                </div>
                
                <div className="w-full sm:w-2/5">
                  <div className="flex items-center gap-3 sm:gap-4 md:gap-5 bg-[#f4bd3c] rounded-[30px] px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-4 cursor-pointer hover:bg-[#f4bd3c]/90 transition-colors duration-300">
                    <span className="text-lg sm:text-xl md:text-2xl font-medium text-[#000000] font-space-grotesk">
                      Portfolio
                    </span>
                    <img 
                      src="/images/img_arrowright_black_900_12x24.svg" 
                      alt="Arrow right"
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;