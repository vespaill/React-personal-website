import React from 'react';

const Header = props => {
  return (
    <div className="bg-nero text-left pt-4 pb-3">
      <h1 className="headerText">
        {props.children.split(' ').map((word, index) => (
          <React.Fragment key={index}>
            <span className="headerFirstLetter">{word[0]}</span>
            {word.substring(1, word.length) + ' '}
          </React.Fragment>
        ))}
      </h1>
    </div>
  );
};

export default Header;
