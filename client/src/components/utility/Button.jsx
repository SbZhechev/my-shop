import React from 'react';
import './Button.css';

export default function Button({active, action, children}) {

  return (
    <button 
      type='button' 
      className={`MS-Button ${active ? 'MS-Button--active' : ''}`}
      onClick={action}
    >
      {children}
    </button>
  );
};