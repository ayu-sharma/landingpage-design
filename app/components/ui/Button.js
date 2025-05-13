'use client';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  href,
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200 ease-in-out focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 shadow-sm',
    secondary: 'bg-white text-indigo-700 hover:bg-indigo-50 focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 border border-indigo-200',
    outline: 'bg-transparent focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2',
    ghost: 'bg-transparent text-indigo-600 hover:bg-indigo-50 focus:ring-2 focus:ring-indigo-300 focus:ring-offset-1',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-2.5 text-lg',
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component
      href={href}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}