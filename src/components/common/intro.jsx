import React from 'react';

const Intro = props => {
  const { children } = props;
  return <p className="intro mb-5">{children}</p>;
};

export default Intro;
