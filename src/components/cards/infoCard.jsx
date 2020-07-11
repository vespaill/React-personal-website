import React from 'react';
import { Image } from 'react-bootstrap';

const InfoCard = props => {
  const { image, email, phone } = props;
  return (
    <>
      <Image
        fluid
        className="shadow-xl rounded-xl image animate-zoom-in-and-lift"
        src={`${process.env.PUBLIC_URL}${image.path}`}
        alt={image.title}
      />
      <div className="bg-bone text-center mt-2">
        <a className="tiny link" href={`mailto:${email}`}>
          <div className="popup-box animate-zoom-in-and-lift d-inline-block">
            {email}
          </div>
        </a>
        <a className="tiny link" href={`tel:${phone}`}>
          <div className="popup-box animate-zoom-in-and-lift d-inline-block">
            {phone}
          </div>
        </a>
      </div>
    </>
  );
};

export default InfoCard;
