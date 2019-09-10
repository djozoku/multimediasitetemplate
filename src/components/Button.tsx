import React from 'react';

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const Button: React.FC<ButtonProps> = props => {
  const { onClick, text } = props;
  return (
    <button onClick={onClick} className={`p-2 rounded-xl ${'bg-blue-600'} ${'text-gray-100'}`}>
      {text}
    </button>
  );
};

export default Button;
