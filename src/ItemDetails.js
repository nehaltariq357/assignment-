
import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = ({ data }) => {
  const { itemId } = useParams();
  const selectedItem = data.find(item => item.id === parseInt(itemId, 10));

  if (!selectedItem) {
    return <div>Item not found!</div>;
  }

  return (
    <div className="item-details">
      <img src={selectedItem.image} alt={selectedItem.title} />
      <h2>{selectedItem.title}</h2>
      <p>{selectedItem.description}</p>
    </div>
  );
};

export default ItemDetails;
