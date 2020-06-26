import React from 'react';
import { Row, Col } from 'react-bootstrap';
import InfoCard from './common/cards/infoCard';
import Article from './common/article';

const AboutMe = () => {
  const cardInfo = {
    image: {
      title: 'me',
      path: '/images/me/me-portrait.jpg'
    },
    email: 'victor_espaillat@student.uml.edu',
    phone: '(978) 566 8344'
  };

  const articleInfo = {
    heading: 'Who I Am',
    paragraph:
      'I am a computer science graduate from UMass Lowell and I am passionate about full stack web developement and strength training.'
  };

  return (
    <Row className="mb-5">
      <Col md="8">
        <Article {...articleInfo} />
      </Col>
      <Col md="4">
        <InfoCard {...cardInfo} />
      </Col>
    </Row>
  );
};

export default AboutMe;
