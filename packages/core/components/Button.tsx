import React, { PropsWithChildren } from 'react';

interface Props {
  color: 'red' | 'yellow' | 'blue' | 'pink';
}

export const Button = ({ color, children }: PropsWithChildren<Props>)  => (
  <button style={{ width:'fit-content',color:'white', fontWeight:'bold', cursor:'pointer', backgroundColor: color, border:'none', padding: '0.5rem 2rem', borderRadius:'0.5rem' }} onClick={() => {alert('from core package')}}>{children}</button>
);
