import React, { FC } from "react";
import { Link } from "react-router-dom";
interface iCards {
  image: string;
  name: string;
  id: number;
}
const Cards: FC<iCards> = ({ image, name, id }) => {
  return (
    <div className="card col-sm-3 col-xs-12">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Link to={`/characters/${id}`} className="btn btn-primary">
          Go somewhere
        </Link>
      </div>
    </div>
  );
};

export default Cards;
