import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import ConditionalWrapper from '../conditionalWrapper';

const LinkCard = props => {
  const { item } = props;
  return (
    <Card>
      <Card.Img variant="top" src={item.imgSrc} />
      <Card.Body className="bg-nero">

        <ConditionalWrapper
          key={item.index}
          condition={item.href}
          wrapper={children => (
            <a className="link" target="#blank" href={item.href}>
              {children}
            </a>
          )}
        >
          <Card.Text className='text-center' >{item.title}</Card.Text>
        </ConditionalWrapper>
        <Card.Text className='text-center'>
          {item.tags.map(tag => (
            <React.Fragment>
              <Badge variant="warning">{tag}</Badge>&nbsp;
            </React.Fragment>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default LinkCard;
