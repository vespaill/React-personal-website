import React from 'react';
import Card from './card';

const CardList = ({ data }) => (
  <div className="row">
    {data.map(item => (
      <div
        key={item.title}
        className="col-lg-6"
        style={{ marginBottom: '1in' }}
      >
        <div className="w-50 mx-auto">
          <Card item={item} />
        </div>
      </div>
    ))}
  </div>
);

export default CardList;
