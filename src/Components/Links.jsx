
import { NavLink } from "react-router-dom";

const Links = ({ data, currentIndex }) => {
  return (
    <div className="links">
      {data.map((el, index) => (
        <span key={index}>
          <NavLink to={el[index + 1][1]}>{el[index + 1][0]}</NavLink>
        </span>
      ))}
    </div>
  );
};

export default Links;
