import React from 'react';

const Article = props => {
  const { heading, paragraph } = props;
  return (
    <article>
      <h2 className="paragraphFirstLetter underline mb-4">{heading}</h2>
      <p className="paragraphFirstLetter">{paragraph}</p>
    </article>
  );
};

export default Article;
