import React from "react";
import PropTypes from "prop-types";

const Toy = (props) => {
  let toy = props.data;
  return (
    <div>
      <h2>{toy.brand}</h2>
      <section>
        <p>Name: {toy.name}</p>
        <p>Type: {toy.type}</p>
        <p>Description: {toy.description}</p>
        <p>Owner Name: {toy.owner_first} {toy.owner_last}</p>
        <p>Owner Email: {toy.owner_email}</p>
        <img src={toy.imageurl} alt={toy.name} width="100" height="100"></img>
      </section>
    </div>
  );
};

Toy.prototypes = {
  data: PropTypes.object,
};

export default Toy;
