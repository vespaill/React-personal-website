import React from 'react';
import { Row, Col } from 'react-bootstrap';
import LinkCard from './linkCard';

const CardList = props => {
  const { children, items, colNum } = props;
  return (
    <Row className="mt-5">
      {children && (
        <Col md="12" className="text-center">
          <h2 className="paragraphFirstLetter  underline mb-4">{children}</h2>
        </Col>
      )}
      {items.map((item, index) => (
        <Col md={colNum} className="mb-4">
          <LinkCard item={{ ...item, index }} />
        </Col>
      ))}
    </Row>
  );
};

export default CardList;
