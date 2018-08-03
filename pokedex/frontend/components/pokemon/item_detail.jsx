import React from 'react';

const ItemDetail = (props) => {
  return (
    <ul>
      <li>{props.item.name}</li>
      <li>Hapiness: {props.item.happiness}</li>
      <li>Price: {props.item.price}$</li>
    </ul>
  );
};

export default ItemDetail;
