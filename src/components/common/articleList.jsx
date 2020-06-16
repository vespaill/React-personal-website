import React from 'react';

const articleStyle = {
  margin: 'auto',
  padding: '30px 0 30px 0',
  textAlign: 'center',
  width: '250px',
  color: '#bbb'
};

const imgStyle = {
  margin: 'auto',
  display: 'block',
  border: '3px solid #202020',
  borderRadius: '30px',
  width: '80%'
};

const ArticleList = ({ data }) => {
  return (
    <React.Fragment>
      {data.map(item => (
        <article key={item.title} style={articleStyle}>
          <img
            src={`${process.env.PUBLIC_URL}/images/${item.assetName}.jpg`}
            alt={item.assetName}
            style={imgStyle}
          />
          <p>{item.title}</p>
        </article>
      ))}
    </React.Fragment>
  );
};

export default ArticleList;
