import PropTypes from 'Prop-types';
import ToyLists from "./ToyLists";

const Toy = (props) => {
  return (
    <div>
      {}
    </div>
  );
};




Toy.prototypes = {
  brand: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
};

export default Toy;