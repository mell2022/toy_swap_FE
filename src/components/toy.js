import React from "react";
import PropTypes from "prop-types";

const Toy = (props) => {
  let toy = props.data
  return (
    <div>
      <h2>{toy.brand}</h2>
      <section>
        <p>{toy.name}</p>
        <p>{toy.type}</p>
        <img src={toy.imageurl} alt={toy.name} width="300" height="300"></img>
      </section>
    </div>
  );
};

Toy.prototypes = {
  data: PropTypes.object
};

export default Toy;
