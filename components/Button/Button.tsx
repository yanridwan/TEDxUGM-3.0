import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  href?: string;
  className?: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  href,
  className = '',
  text,
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
        {text}
      </Link>
    );
  }

  return <button className={buttonClasses}>{text}</button>;
};

export default Button;
