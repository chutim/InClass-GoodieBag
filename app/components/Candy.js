import React from "react";
import { Link } from "react-router-dom";
const Candy = props => {
  return (
    <div>
      {props.name}
      <Link to={`candies/${props.id}`}>
        <img src={props.imageUrl} />
      </Link>
    </div>
  );
};

export default Candy;
