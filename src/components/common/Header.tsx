import React, { useState } from 'react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = ['Home', 'Service', 'Portfolio', 'Team'];

  const handleMenuItemClick = (item: string) => {
    setActiveMenuItem(item);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full px-4 sm:px-6 md:px-8 lg:px-8 py-4 sm:py-5 md:py-6">
      <div className="flex justify-between items-center w-full">
        {/* Left Section - Logo and Profile Button */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Logo/Icon Button */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 bg-[#f4bd3c] rounded-[30px] flex items-center justify-center border-2 border-[#000000] p-2 sm:p-3 md:p-3.5">
            <img 
              src="/images/img_solar_phone_bold.svg" 
              alt="EDIOS Studio Logo" 
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
            />
          </div>
          
          {/* Go To Profile Button - Hidden on mobile */}
          <div className="hidden sm:block">
            <Button 
              variant="outline"
              size="medium"
              onClick={() => console.log('Go to profile clicked')}
            >
              Go To Profile
            </Button>
          </div>
        </div>

        {/* Center Section - Navigation Menu (Desktop) */}
        <nav className="hidden lg:block">
          <div className="bg-[#f4bd3c] rounded-[30px] border-2 border-[#000000] px-4 py-3">
            <ul className="flex items-center gap-16 xl:gap-20" role="menubar">
              {menuItems.map((item) => (
                <li key={item} role="menuitem">
                  <button
                    onClick={() => handleMenuItemClick(item)}
                    className={`text-lg xl:text-xl font-medium font-space-grotesk transition-colors duration-200 ${
                      activeMenuItem === item 
                        ? 'text-[#000000] font-semibold' 
                        : 'text-[#000000]/80 hover:text-[#000000]'
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Right Section - Register Button and Mobile Menu */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Register Button - Hidden on mobile */}
          <div className="hidden sm:block">
            <Button 
              variant="outline"
              size="medium"
              onClick={() => console.log('Register clicked')}
            >
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-md border-2 border-[#000000] bg-[#f4bd3c]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 p-4 bg-[#f4bd3c] rounded-[24px] border-2 border-[#000000]">
          <nav className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleMenuItemClick(item)}
                className={`text-left py-2 px-3 rounded-lg font-medium font-space-grotesk transition-colors duration-200 ${
                  activeMenuItem === item 
                    ? 'text-[#000000] bg-[#000000]/10 font-semibold' 
                    : 'text-[#000000]/80 hover:text-[#000000] hover:bg-[#000000]/5'
                }`}
              >
                {item}
              </button>
            ))}
            
            {/* Mobile-only buttons */}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-[#000000]/20">
              <Button 
                variant="outline"
                size="medium"
                fullWidth
                onClick={() => console.log('Go to profile clicked')}
              >
                Go To Profile
              </Button>
              <Button 
                variant="outline"
                size="medium"
                fullWidth
                onClick={() => console.log('Register clicked')}
              >
                Register
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;