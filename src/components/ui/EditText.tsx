import React, { useState } from 'react';

interface EditTextProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'email' | 'password' | 'search';
  disabled?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  className?: string;
  fullWidth?: boolean;
}

const EditText: React.FC<EditTextProps> = ({
  placeholder = '',
  value = '',
  onChange,
  type = 'text',
  disabled = false,
  leftIcon,
  rightIcon,
  className = '',
  fullWidth = true,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const baseClasses = 'rounded-[24px] border-0 focus:outline-none focus:ring-2 focus:ring-[#f4bd3c] transition-all duration-200 font-space-grotesk';
  
  const inputClasses = `
    ${baseClasses}
    ${fullWidth ? 'w-full' : ''}
    ${leftIcon ? 'pl-12 sm:pl-14' : 'pl-4 sm:pl-5'}
    ${rightIcon ? 'pr-12 sm:pr-14' : 'pr-4 sm:pr-5'}
    py-2 sm:py-3 md:py-3.5
    text-sm sm:text-base md:text-lg lg:text-xl
    bg-[#f4e3cd] text-[#000000]
    placeholder:text-[#000000]/70
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={`relative ${fullWidth ? 'w-full' : 'w-auto'}`}>
      {leftIcon && (
        <img
          src={leftIcon}
          alt="Left icon"
          className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
        />
      )}
      
      <input
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        disabled={disabled}
        className={inputClasses}
        {...props}
      />
      
      {rightIcon && (
        <img
          src={rightIcon}
          alt="Right icon"
          className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
        />
      )}
    </div>
  );
};

export default EditText;