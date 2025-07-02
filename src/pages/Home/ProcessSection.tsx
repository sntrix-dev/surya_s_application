import React from 'react';

interface ProcessItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const ProcessSection: React.FC = () => {
  const processItems: ProcessItem[] = [
    {
      id: "1",
      icon: "/images/img_icon.svg",
      title: "Discovery & Strategy",
      description: "We analyze your brand's goals to craft a strategic plan tailored to your needs."
    },
    {
      id: "2", 
      icon: "/images/img_icon.svg",
      title: "Design & Development",
      description: "Our team creates and refines compelling designs to bring your vision to life."
    },
    {
      id: "3",
      icon: "/images/img_icon.svg", 
      title: "Launch & Optimization",
      description: "We launch and continuously optimize your project to maximize and performance."
    }
  ];

  return (
    <section className="w-full bg-[#0c0b09] py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="w-full lg:max-w-[1628px] mx-auto px-4 sm:px-6 md:px-8 lg:px-14">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-center items-center w-full mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 justify-start items-start w-full lg:flex-1">
            <span className="text-base sm:text-lg md:text-xl font-bold leading-relaxed text-left text-[#f57338] font-space-grotesk uppercase">
              Process
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-left text-[#ffffff] font-space-grotesk w-full lg:w-4/5">
              Designing Impactful Stories Through Bold Creativity
            </h2>
          </div>
          
          <div className="w-full lg:w-2/5 mt-6 lg:mt-0">
            <p className="text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-left text-[#ffffff] font-space-grotesk">
              Discover how our innovative approach can transform your vision into a captivating reality.
            </p>
          </div>
        </div>
        
        {/* Process Items */}
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-28 w-full">
          {processItems.map((item, index) => (
            <div key={item.id} className="flex flex-col sm:flex-row md:flex-col gap-4 sm:gap-6 md:gap-8 justify-start items-start w-full md:w-1/3">
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#f4bd3c] rounded-3xl flex items-center justify-center p-2 sm:p-3 md:p-4 flex-shrink-0">
                <img 
                  src={item.icon} 
                  alt={`${item.title} icon`}
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                />
              </div>
              
              {/* Content */}
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 justify-start items-start flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium leading-tight text-left text-[#ffffff] font-space-grotesk">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-left text-[#ffffff] font-space-grotesk">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;