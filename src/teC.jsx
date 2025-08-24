import React from 'react';

const TeC = ({ Name, teP, img }) => {
  return (
    <div className="tC-1">
      <div className="opfd">
        <img src={img} alt={`${Name}'s testimonial`} />
      </div>
      
      <div className="ff">
        <h5>{Name}</h5>
        <h6>reviews</h6>
        <p>{teP}</p>
      </div>
    </div>
  );
};

export default TeC;
