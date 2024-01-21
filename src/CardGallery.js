
import React from 'react';
import { Link } from 'react-router-dom';

const CardGallery = ({ data }) => {
  return (
    <div className="card-gallery">
      {data.map(item => (
        <Link to={`/details/${item.id}`} key={item.id}>
          <div className="card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardGallery;
