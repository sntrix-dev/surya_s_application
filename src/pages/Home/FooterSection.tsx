import React, { useState } from 'react';

const FooterSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="w-full bg-[#0c0b09] py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="w-full lg:max-w-[1628px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        
        <div className="flex flex-col gap-16 sm:gap-20 md:gap-24 lg:gap-24 justify-start items-center w-full">
          
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-start items-center w-full gap-8 lg:gap-16">
            
            {/* Left Content */}
            <div className="flex flex-col justify-start items-start w-full lg:flex-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-left text-[#ffffff] font-space-grotesk mb-4 sm:mb-6 md:mb-8">
                Reach Out for
              </h2>
              
              <div className="flex flex-col sm:flex-row justify-start items-center w-full gap-4 sm:gap-5 md:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 bg-[#f4bd3c] rounded-[30px] flex items-center justify-center p-3 sm:p-4">
                  <img 
                    src="/images/img_arrowright_black_900_12x24.svg" 
                    alt="Arrow right"
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                  />
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-left text-[#ffffff] font-space-grotesk">
                  Innovative Solutions
                </h2>
              </div>
            </div>
            
            {/* Right Content - Email Signup */}
            <div className="w-full lg:w-2/5">
              <form onSubmit={handleEmailSubmit} className="border-b-2 border-[#ffffff] pb-4 sm:pb-5 md:pb-6">
                <div className="flex items-center gap-0">
                  <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent text-lg sm:text-xl md:text-2xl font-normal text-[#ffffff] placeholder:text-[#ffffff]/70 font-space-grotesk py-3 sm:py-4 md:py-4 px-0 border-0 focus:outline-none"
                    required
                  />
                  
                  <button 
                    type="submit"
                    className="flex items-center gap-3 sm:gap-4 md:gap-5 bg-[#f4bd3c] rounded px-2 sm:px-3 md:px-3 py-1 sm:py-2 md:py-2 hover:bg-[#f4bd3c]/90 transition-colors duration-300 ml-2"
                  >
                    <span className="text-sm sm:text-base md:text-lg font-medium text-[#000000] font-space-grotesk">
                      Get Started
                    </span>
                    <img 
                      src="/images/img_solar_arrow_right_up_linear_black_900.svg" 
                      alt="Submit"
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Footer Bottom */}
          <div className="flex flex-col sm:flex-row justify-center items-center w-full border-t-2 border-[#ffffff] pt-8 sm:pt-10 md:pt-12 lg:pt-12 gap-4 sm:gap-8 md:gap-12 lg:gap-16">
            
            {/* Copyright */}
            <div className="w-full sm:w-auto text-center sm:text-left">
              <p className="text-lg sm:text-xl md:text-2xl font-normal leading-tight text-[#ffffff] font-space-grotesk">
                © 2024 Edios. All Rights Reversed
              </p>
            </div>
            
            {/* Footer Links */}
            <div className="flex flex-col sm:flex-row justify-end items-center w-full sm:flex-1 gap-4 sm:gap-8 md:gap-12 lg:gap-12">
              <a 
                href="#privacy" 
                className="text-lg sm:text-xl md:text-2xl font-normal leading-tight text-[#ffffff] font-space-grotesk hover:text-[#f4bd3c] transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a 
                href="#terms" 
                className="text-lg sm:text-xl md:text-2xl font-normal leading-tight text-[#ffffff] font-space-grotesk hover:text-[#f4bd3c] transition-colors duration-300"
              >
                Terms & Conditions
              </a>
              <a 
                href="#faqs" 
                className="text-lg sm:text-xl md:text-2xl font-normal leading-tight text-[#ffffff] font-space-grotesk hover:text-[#f4bd3c] transition-colors duration-300"
              >
                FAQs
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;