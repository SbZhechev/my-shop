import React from 'react';
import './Button.css';

export default function Button({active, action, buttonType = 'button', children}) {
  return (
    <button
      type={buttonType}
      className={`MS-Button ${active ? 'MS-Button--active' : ''}`}
      onClick={action}
    >
      {children}
    </button>
  );
};