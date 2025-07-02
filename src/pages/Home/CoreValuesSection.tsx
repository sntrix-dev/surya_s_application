import React from 'react';

interface CoreValue {
  id: string;
  number: string;
  title: string;
  description?: string;
  icon: string;
  bgColor: string;
  textColor: string;
  iconBgColor: string;
}

const CoreValuesSection: React.FC = () => {
  const coreValues: CoreValue[] = [
    {
      id: "1",
      number: "01",
      title: "Creativity at the Heart of Everything",
      icon: "/images/img_icon_black_900.svg",
      bgColor: "bg-[#0c0b09]",
      textColor: "text-[#ffffff]",
      iconBgColor: "bg-[#f4bd3c]"
    },
    {
      id: "2",
      number: "02", 
      title: "Commitment to Excellence in Every Project",
      description: "We aim for superior quality and impactful results.",
      icon: "/images/img_icon_white_a700.svg",
      bgColor: "bg-[#f4bd3c]",
      textColor: "text-[#000000]",
      iconBgColor: "bg-[#0c0b09]"
    },
    {
      id: "3",
      number: "03",
      title: "Collaboration for Greater Success",
      icon: "/images/img_icon_black_900.svg",
      bgColor: "bg-[#0c0b09]",
      textColor: "text-[#ffffff]",
      iconBgColor: "bg-[#f4bd3c]"
    },
    {
      id: "4",
      number: "04",
      title: "Integrity in All Our Interactions",
      icon: "/images/img_icon_black_900.svg",
      bgColor: "bg-[#0c0b09]",
      textColor: "text-[#ffffff]",
      iconBgColor: "bg-[#f4bd3c]"
    }
  ];

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="w-full lg:max-w-[1628px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 justify-start items-center w-full mb-12 sm:mb-16 md:mb-20">
          <div className="flex flex-col gap-1 sm:gap-2 justify-start items-center w-full sm:w-4/5 md:w-3/4 lg:w-1/2 px-4 sm:px-0">
            <span className="text-base sm:text-lg md:text-xl font-bold leading-relaxed text-center text-[#f57338] font-space-grotesk uppercase">
              Core Values
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center text-[#000000] font-space-grotesk">
              Guiding Principles of Our Agency
            </h2>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-center text-[#000000] font-space-grotesk w-full sm:w-4/5 md:w-3/4 lg:w-1/2">
            Our passion for innovation, dedication to quality, and focus on client success drive everything we do.
          </p>
        </div>
        
        {/* Core Values Grid */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-8 w-full">
          {coreValues.map((value) => (
            <div 
              key={value.id}
              className={`${value.bgColor} rounded-lg p-6 sm:p-8 md:p-10 flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-64 justify-start items-start w-full lg:w-1/4 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[630px]`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 ${value.iconBgColor} rounded-[30px] flex items-center justify-center p-3 sm:p-4`}>
                <img 
                  src={value.icon} 
                  alt={`${value.title} icon`}
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                />
              </div>
              
              {/* Content */}
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 justify-start items-start">
                <span className={`text-base sm:text-lg md:text-xl font-normal leading-relaxed text-left ${value.textColor} font-space-grotesk`}>
                  {value.number}
                </span>
                <h3 className={`text-lg sm:text-xl md:text-2xl font-bold leading-relaxed text-left ${value.textColor} font-space-grotesk`}>
                  {value.title}
                </h3>
                {value.description && (
                  <p className={`text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-left ${value.textColor} font-space-grotesk`}>
                    {value.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;