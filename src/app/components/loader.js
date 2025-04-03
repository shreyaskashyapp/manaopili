import React from 'react';

const LoadingIndicator = ({ size = 'medium', color = 'indigo' }) => {
  // Map size to Tailwind classes
  const sizeClasses = {
    small: 'w-6 h-6 border-2',
    medium: 'w-10 h-10 border-3',
    large: 'w-16 h-16 border-4',
  };

  // Map color to Tailwind classes
  const colorClasses = {
    indigo: 'border-indigo-500',
    blue: 'border-blue-500',
    red: 'border-red-500',
    green: 'border-green-500',
    gray: 'border-gray-500',
    lime: 'border-lime-500',
  };

  // Get the correct classes based on props
  const spinnerSize = sizeClasses[size];
  const spinnerColor = colorClasses[color] || 'border-yellow-500';

  return (
    <div className="fixed w-screen h-screen inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div 
        className={`${spinnerSize} rounded-full ${spinnerColor} border-t-transparent animate-spin`}
        role="status"
        aria-label="Loading"
      />
    </div>
  );
};

export default LoadingIndicator;
