import React, { FC } from 'react';

interface Props {
  color: 'black' | 'red';
  fontSize: '10px' | '14px' | '20px';
  placeholder: string;
}

const Input: FC<Props> = ({ color, fontSize, children, placeholder }) => (
  <input placeholder={placeholder} style={{ color, fontSize }}>
    {children}
  </input>
);
export default Input;
