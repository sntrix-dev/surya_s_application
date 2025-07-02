import React from 'react';
import Button from '../../components/ui/Button';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  backgroundImage: string;
}

const PortfolioSection: React.FC = () => {
  const portfolioItems: PortfolioItem[] = [
    {
      id: "1",
      title: "Innovative Branding",
      description: "Crafted a modern and impactful brand identity.",
      backgroundImage: "/images/img_image_black_900.svg"
    },
    {
      id: "2",
      title: "E-commerce Platform", 
      description: "Redesigned an e-commerce website to enhance user experience.",
      backgroundImage: "/images/img_image_black_900.svg"
    },
    {
      id: "3",
      title: "Creative Campaign",
      description: "Developed a visually striking marketing campaign that elevated a fashion.",
      backgroundImage: "/images/img_image_black_900.svg"
    }
  ];

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="w-full lg:max-w-[1628px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 justify-start items-center w-full mb-12 sm:mb-16 md:mb-20">
          <div className="flex flex-col gap-1 sm:gap-2 justify-start items-center w-full sm:w-4/5 md:w-3/4 lg:w-1/2">
            <span className="text-base sm:text-lg md:text-xl font-bold leading-relaxed text-center text-[#f57338] font-space-grotesk uppercase">
              Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center text-[#000000] font-space-grotesk">
              Bringing Imagination to Life
            </h2>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-center text-[#000000] font-space-grotesk w-full sm:w-4/5 md:w-3/4 lg:w-1/2">
            Take the first step towards realizing your vision. Reach out now to begin working with a professional who brings expertise.
          </p>
        </div>
        
        {/* Portfolio Grid */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-8 w-full mb-12 sm:mb-16 md:mb-20">
          {portfolioItems.map((item) => (
            <div 
              key={item.id}
              className="relative w-full lg:w-1/3 h-64 sm:h-80 md:h-96 lg:h-[520px] rounded-lg overflow-hidden bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${item.backgroundImage})` }}
            >
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-6 sm:p-8 md:p-10">
                
                {/* Top - Get Started Button */}
                <div className="flex justify-end">
                  <button className="flex items-center gap-3 sm:gap-4 border-2 border-[#ffffff] rounded-xl px-4 sm:px-5 md:px-6 py-2 sm:py-3 md:py-3 hover:bg-[#ffffff] hover:text-[#000000] transition-colors duration-300">
                    <span className="text-sm sm:text-base md:text-lg font-medium text-[#ffffff] font-space-grotesk">
                      Get Started
                    </span>
                    <img 
                      src="/images/img_solararrowrightuplinear.svg" 
                      alt="Arrow up right"
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                    />
                  </button>
                </div>
                
                {/* Bottom - Content */}
                <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 justify-start items-start">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-left text-[#ffffff] font-space-grotesk">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-left text-[#ffffff] font-space-grotesk">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center w-full">
          <button className="flex items-center gap-4 sm:gap-5 md:gap-6 bg-[#0c0b09] rounded-[30px] px-6 sm:px-8 md:px-16 py-3 sm:py-4 md:py-4 hover:bg-[#0c0b09]/90 transition-colors duration-300">
            <span className="text-lg sm:text-xl md:text-2xl font-medium text-[#ffffff] font-space-grotesk">
              Get Started
            </span>
            <img 
              src="/images/img_arrow_right.svg" 
              alt="Arrow right"
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;