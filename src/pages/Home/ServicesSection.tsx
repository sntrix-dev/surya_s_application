import React from 'react';

import EditText from '../../components/ui/EditText';

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  textColor: string;
  iconBgColor: string;
}

const ServicesSection: React.FC = () => {
  const services: ServiceCard[] = [
    {
      id: "1",
      title: "Brand Strategy",
      description: "Develop comprehensive brand strategies that define and elevate your market presence.",
      icon: "/images/img_icon_white_a700.svg",
      bgColor: "bg-[#f4bd3c]",
      textColor: "text-[#000000]",
      iconBgColor: "bg-[#0c0b09]"
    },
    {
      id: "2", 
      title: "Digital Marketing",
      description: "Implement targeted digital marketing campaigns to drive engagement and growth.",
      icon: "/images/img_icon_black_900.svg",
      bgColor: "bg-[#0c0b09]",
      textColor: "text-[#ffffff]",
      iconBgColor: "bg-[#f4bd3c]"
    },
    {
      id: "3",
      title: "UI/UX Design", 
      description: "Create intuitive and visually engaging designs that enhance user experiences.",
      icon: "/images/img_icon_black_900.svg",
      bgColor: "bg-[#f4e3cd]",
      textColor: "text-[#000000]",
      iconBgColor: "bg-[#f4bd3c]"
    },
    {
      id: "4",
      title: "Content Creation",
      description: "Produce high-quality content that captures your brand's voice and connects.",
      icon: "/images/img_icon_black_900.svg", 
      bgColor: "bg-[#f4e3cd]",
      textColor: "text-[#000000]",
      iconBgColor: "bg-[#f4bd3c]"
    },
    {
      id: "5",
      title: "Web Development",
      description: "Build responsive and functional websites that align with your business goals.",
      icon: "/images/img_icon_white_a700.svg",
      bgColor: "bg-[#f4bd3c]", 
      textColor: "text-[#000000]",
      iconBgColor: "bg-[#0c0b09]"
    }
  ];

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="w-full lg:max-w-[1628px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-start items-center w-full mb-12 sm:mb-16 md:mb-20 gap-8 lg:gap-16">
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 justify-start items-start w-full lg:flex-1">
            <span className="text-base sm:text-lg md:text-xl font-bold leading-relaxed text-left text-[#f57338] font-space-grotesk uppercase">
              Service
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-left text-[#000000] font-space-grotesk w-full lg:w-11/12">
              Elevate Your Brand with Cutting-Edge Creative Solutions
            </h2>
          </div>
          
          <div className="w-full lg:w-2/5">
            <p className="text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-left text-[#000000] font-space-grotesk">
              We elevate your brand by combining the latest design trends with innovative strategies to stand out in a crowded market.
            </p>
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-8 w-full">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-8 w-full lg:w-1/4">
            {services.slice(0, 2).map((service) => (
              <div key={service.id} className={`${service.bgColor} rounded-lg p-6 sm:p-8 md:p-10 flex flex-col gap-6 sm:gap-8 md:gap-10 justify-start items-start`}>
                <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 justify-start items-start flex-1">
                  <h3 className={`text-lg sm:text-xl md:text-2xl font-bold leading-tight text-left ${service.textColor} font-space-grotesk`}>
                    {service.title}
                  </h3>
                  <p className={`text-base sm:text-lg md:text-xl font-normal leading-relaxed text-left ${service.textColor} font-space-grotesk`}>
                    {service.description}
                  </p>
                </div>
                
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 ${service.iconBgColor} rounded-[30px] flex items-center justify-center p-3 sm:p-4`}>
                  <img 
                    src={service.icon} 
                    alt={`${service.title} icon`}
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Center Column */}
          <div className="w-full lg:w-1/4">
            <div className={`${services[2].bgColor} rounded-lg p-6 sm:p-8 md:p-10 flex flex-col gap-6 sm:gap-8 md:gap-10 justify-start items-start h-full`}>
              <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 justify-start items-start flex-1">
                <h3 className={`text-lg sm:text-xl md:text-2xl font-bold leading-tight text-left ${services[2].textColor} font-space-grotesk`}>
                  {services[2].title}
                </h3>
                <p className={`text-base sm:text-lg md:text-xl font-normal leading-relaxed text-left ${services[2].textColor} font-space-grotesk`}>
                  {services[2].description}
                </p>
              </div>
              
              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 ${services[2].iconBgColor} rounded-[30px] flex items-center justify-center p-3 sm:p-4`}>
                <img 
                  src={services[2].icon} 
                  alt={`${services[2].title} icon`}
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                />
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-8 w-full lg:w-1/2">
            
            {/* Content Creation Service */}
            <div className={`${services[3].bgColor} rounded-lg p-6 sm:p-8 md:p-10 flex flex-col gap-6 sm:gap-8 md:gap-10 justify-start items-start`}>
              <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 justify-start items-start flex-1">
                <h3 className={`text-lg sm:text-xl md:text-2xl font-bold leading-tight text-left ${services[3].textColor} font-space-grotesk`}>
                  {services[3].title}
                </h3>
                <p className={`text-base sm:text-lg md:text-xl font-normal leading-relaxed text-left ${services[3].textColor} font-space-grotesk w-full sm:w-2/5`}>
                  {services[3].description}
                </p>
              </div>
              
              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 ${services[3].iconBgColor} rounded-[30px] flex items-center justify-center p-3 sm:p-4`}>
                <img 
                  src={services[3].icon} 
                  alt={`${services[3].title} icon`}
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                />
              </div>
            </div>
            
            {/* Bottom Row */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-8">
              
              {/* Web Development Service */}
              <div className={`${services[4].bgColor} rounded-lg p-6 sm:p-8 md:p-10 flex flex-col gap-6 sm:gap-8 md:gap-10 justify-start items-start w-full sm:w-1/2`}>
                <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 justify-start items-start flex-1">
                  <h3 className={`text-lg sm:text-xl md:text-2xl font-bold leading-tight text-left ${services[4].textColor} font-space-grotesk`}>
                    {services[4].title}
                  </h3>
                  <p className={`text-base sm:text-lg md:text-xl font-normal leading-relaxed text-left ${services[4].textColor} font-space-grotesk`}>
                    {services[4].description}
                  </p>
                </div>
                
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 ${services[4].iconBgColor} rounded-[30px] flex items-center justify-center p-3 sm:p-4`}>
                  <img 
                    src={services[4].icon} 
                    alt={`${services[4].title} icon`}
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                  />
                </div>
              </div>
              
              {/* CTA Card */}
              <div className="bg-[#0c0b09] rounded-lg p-6 sm:p-8 md:p-10 flex flex-col gap-8 sm:gap-10 md:gap-12 justify-center items-center w-full sm:w-1/2">
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-center text-[#ffffff] font-space-grotesk">
                  Ready to Transform Your Brand?
                </h3>
                
                <div className="w-full px-4 sm:px-6 md:px-8">
                  <EditText
                    placeholder="Get Started"
                    rightIcon="/images/img_arrowright_black_900_12x24.svg"
                    className="bg-[#f4bd3c]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;