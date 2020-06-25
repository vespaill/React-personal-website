import React from 'react';
import Card from './card';

const CardList = props => {
  const { data } = props;

  return (
    <div className="row">
      {data.map(item => (
        <div key={item.title} className="col-lg-6">
          <div className="w-50 mx-auto">
            <Card item={item} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
