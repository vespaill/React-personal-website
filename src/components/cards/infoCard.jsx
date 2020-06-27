import React from 'react';
import { Image } from 'react-bootstrap';

const InfoCard = props => {
  const { image, email, phone } = props;
  return (
    <>
      <Image
        fluid
        className="shadow-lg rounded-xl"
        src={`${process.env.PUBLIC_URL}${image.path}`}
        alt={image.title}
      />
      <div className="mx-0 p-0 bg-bone">
        <a className="no-wrap tiny link" href={`mailto:${email}`}>
          {email}
        </a>
        <p className="tiny">{phone}</p>
      </div>
    </>
  );
};

export default InfoCard;
