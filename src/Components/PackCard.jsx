import PropTypes from "prop-types";
import cart from "../assets/package/cart.svg";
import { MdOutlineExpandMore } from "react-icons/md";
import { FaSearchPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";

const stars = {
  1: "\u2605",
  2: "\u2605 \u2605",
  3: "\u2605 \u2605 \u2605",
  4: "\u2605 \u2605 \u2605 \u2605",
  5: "\u2605 \u2605 \u2605 \u2605 \u2605",
};

export default function Package_Card({ data, image }) {
  const packageRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    if (packageRef.current && aboutRef.current) {
      aboutRef.current.style.width = `${packageRef.current.offsetWidth / 16 + 0.01}rem`;
    }
  });

  return (
    <>
      <div className="image-div">
        <img src={`/src/assets/package/${image}.svg`} alt="package-looks" className="package-image" />
      </div>
      {/* about the product */}
      <div className="package-desc" ref={packageRef}>
        <div className="group-package-desc">
          <div className="package-name">{data.name}</div>
          <div className="package-stars">{stars[data.stars]}</div>
          <div className="package-price">$ {data.price}</div>
        </div>
        <div>
          <NavLink>
            <div className="add-to-cart">
              Add to Cart &nbsp;
              <div className="cart">
                <img src={cart} alt="cart" />
              </div>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="about-package" ref={aboutRef}>
        <h2>Description</h2>
        <span>{data.desc}</span>
        <div className="expand">
          <div>
            See more <MdOutlineExpandMore />
          </div>
          <div id="plus-search">
            <FaSearchPlus />
          </div>
        </div>
      </div>
    </>
  );
}

Package_Card.propTypes = {
  data: PropTypes.object,
  image: PropTypes.string,
};
