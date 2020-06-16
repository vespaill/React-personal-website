import React from 'react';

const introStyle = {
  borderTop: '1px solid gray',
  borderBottom: '1px solid gray',
  padding: '30px',
  lineHeight: '200%'
};

const Intro = ({ children }) => {
  return (
    <p className="intro mb-5" style={introStyle}>
      {children}
    </p>
  );
};

export default Intro;
