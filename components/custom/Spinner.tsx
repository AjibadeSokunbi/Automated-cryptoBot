import React from 'react';

interface SpinnerProps {
  size?: number;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 24, color = 'blue' }) => {
  const spinnerStyle = {
    width: size,
    height: size,
    borderTopColor: color,
  };

  return (
    <div className="flex justify-center items-center">
      <div className="border-t-4 border-gray-200 border-solid rounded-full animate-spin" style={spinnerStyle}></div>
    </div>
  );
};

export default Spinner;
