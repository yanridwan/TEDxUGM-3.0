import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  href?: string;
  className?: string;
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  href,
  className = '',
  text,
  onClick,
  type
}) => {
  const buttonClasses = `px-2 py-1 rounded font-bold rounded-full text-center ${
    variant === 'primary'
      ? 'bg-c-red text-white'
      : variant === 'secondary'
      ? 'bg-white text-c-red border border-white border-2'
      : 'bg-white text-c-red border border-c-red border-2' // Add styles for the 'tertiary' variant
  } ${className}`;

  if (href) {
    return (
      <Link className={buttonClasses} href={href}>
        <button type={type}>

        {text}
        </button>
      </Link>
    );
  }

  return <button type={type} onClick={onClick} className={buttonClasses}>{text}</button>;
};

export default Button;
