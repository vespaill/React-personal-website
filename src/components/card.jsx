import React from 'react';
import ConditionalWrapper from './common/conditionalWrapper';

const bgDark = {
  backgroundColor: '#202020'
};

const Card = ({ item: { link, externalLink, title, assetName, extension } }) => (
  <ConditionalWrapper
    condition={link}
    wrapper={children => (
      <a
        className="link"
        target={externalLink ? '_blank' : '_self'}
        href={link}
      >
        {children}
      </a>
    )}
  >
    <div className="card rounded-1em text-center" style={bgDark}>
      <img
        className="card-img-top"
        src={`${process.env.PUBLIC_URL}/images/${assetName}.${extension}`}
        alt={assetName}
        style={{ borderRadius: '1em' }}
      ></img>
      <div className="card-body" style={bgDark}>
        <p className="card-text">{title}</p>
      </div>
    </div>
  </ConditionalWrapper>
);

export default Card;
