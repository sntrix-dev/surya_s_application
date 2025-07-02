import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  type = 'button',
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-medium rounded-[30px] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer font-space-grotesk';
  
  const variants = {
    primary: 'bg-[#f4bd3c] text-[#000000] border-2 border-[#000000] hover:bg-[#f4bd3c]/80 disabled:bg-gray-400',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-100',
    outline: 'border-2 border-[#000000] text-[#000000] hover:bg-gray-50 disabled:border-gray-200 disabled:text-gray-400',
  };
  
  const sizes = {
    small: 'px-3 py-2 text-sm sm:px-4 sm:py-2.5 sm:text-base',
    medium: 'px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg md:px-7 md:py-3.5 md:text-xl',
    large: 'px-6 py-3 text-lg sm:px-8 sm:py-4 sm:text-xl md:px-10 md:py-5 md:text-2xl',
  };
  
  const buttonClasses = `
    ${baseClasses} 
    ${variants[variant]} 
    ${sizes[size]} 
    ${fullWidth ? 'w-full' : ''} 
    ${disabled ? 'cursor-not-allowed opacity-50' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;