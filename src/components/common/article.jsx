import React from 'react';

const Article = props => {
  const { heading, paragraph } = props;
  return (
    <article>
      <h2 className="custom-h2 paragraphFirstLetter underline mb-4">{heading}</h2>
      <p className="bold paragraphFirstLetter">{paragraph}</p>
    </article>
  );
};

export default Article;
