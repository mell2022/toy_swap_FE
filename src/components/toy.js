import PropTypes from "Prop-types";

const toy = ({brand, imageurl, name, type}) => {
  return (
    <div>
      <h2>{brand}</h2>
      <section>
        <p>{name}</p>
        <p>{type}</p>
        <img src={imageurl} alt={name}></img>
      </section>
    </div>
  );
};

toy.prototypes = {
  brand: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  imageurl: PropTypes.string,
};

export default toy;
