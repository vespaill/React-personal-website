import React from 'react';
import { Row, Col } from 'react-bootstrap';

const strengthTraining = () => {
  const videoKeys = [
    'WLQm3POfwlk',
    '0WXyi7fyfRk',
    'EqvBwEMAYos',
    'Nxju9pxXjGw'
  ];

  return (
    <Row>
      {videoKeys.map((vidkey, index) => (
        <Col
          key={index}
          md="4"
          style={{ marginBottom: '90px', textAlign: 'center' }}
        >
          <iframe
            className="shadow-lg rounded-xl"
            style={{ display: 'inline-block' }}
            title={index}
            src={`https://www.youtube.com/embed/${vidkey}`}
            frameBorder="0"
            width="270"
            height="480"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
          />
        </Col>
      ))}
    </Row>
  );
};

export default strengthTraining;
