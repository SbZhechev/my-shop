import React from 'react';
import './Button.css';

export default function Button({active, action, buttonType = 'button', actionType, children}) {
  return (
    <button
      name='actionType'
      value={actionType}
      type={buttonType}
      className={`MS-Button ${active ? 'MS-Button--active' : ''}`}
      onClick={action}
    >
      {children}
    </button>
  );
};