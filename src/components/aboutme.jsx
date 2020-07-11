import React from 'react';
import { Row, Col } from 'react-bootstrap';
import InfoCard from './cards/infoCard';
// import { Link } from 'react-router-dom';

const AboutMe = () => {
  const cardInfo = {
    image: {
      title: 'me',
      path: '/images/me/me-portrait.jpg'
    },
    email: 'victor_espaillat@student.uml.edu',
    phone: '978-566-8344'
  };

  return (
    <Row className="mb-5">
      <Col md="8">
        <article>
          <h2 className="custom-h2 paragraphFirstLetter underline mb-4">
            Who I Am
          </h2>
          <p className="bold paragraphFirstLetter">
            I am a computer science graduate from UMass Lowell and I am
            passionate about full stack web developement and{' '}
            {/* <Link className="link" to="/training"> */}
              strength training
            {/* </Link>. */}
          </p>
        </article>
      </Col>
      <Col md="4">
        <InfoCard {...cardInfo} />
      </Col>
    </Row>
  );
};

export default AboutMe;
