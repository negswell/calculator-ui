import React from 'react';

interface IProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Result: React.FC<IProps> = ({ value, onChange }) => {
  return <input type='text' value={value} onChange={onChange} />;
};

export default Result;
