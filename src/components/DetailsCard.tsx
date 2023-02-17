import React, { FC } from "react";
import { detailNamespace } from '../types.d'


const DetailsCard: FC<detailNamespace.iDetails> = ({ image, name, id, location,origin }) => {
  return (
    <div className="card col-sm-3 col-xs-12">
    <img src={image} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">
        Location : {location?.name}
        <br />
        Origin:{origin?.name}
      </p> 
    </div>
  </div>
  )
}

export default DetailsCard
