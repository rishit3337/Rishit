import PropTypes from "prop-types";
import "../styles/Pack.css";
import Package_Card from "./PackCard";
import { useEffect, useRef } from "react";

function getImageFiles() {
  const width = window.innerWidth;

  if (width <= 320) {
    return "small";
  } else if (width >= 321 && width <= 768) {
    return "medium";
  } else if (width >= 769 && width <= 1024) {
    return "large";
  }
  return "xlarge";
}

const images = getImageFiles();

const package_data = [
  {
    name: "Living Room Family Set",
    stars: 5,
    price: 229.99,
    desc: "Cast Aluminum Outdoor Chaise Lounge As an elegant and classic touch to your outdoor space.",
  },
  {
    name: "Living Room Family Set",
    stars: 5,
    price: 229.99,
    desc: "Cast Aluminum Outdoor Chaise Lounge As an elegant and classic touch to your outdoor space.",
  },
  {
    name: "Living Room Family Set",
    stars: 5,
    price: 229.99,
    desc: "Cast Aluminum Outdoor Chaise Lounge As an elegant and classic touch to your outdoor space.",
  },
];

export default function Package({ data }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (panelRef.current) {
      let childs = panelRef.current.childNodes.length;
      panelRef.current.style.gridTemplateColumns = `repeat(${childs},1fr)`;
    }
  });

  return (
    <div className="package-container">
      <div className="left-side-panel">
        <Package_Card data={data[0]} image={images} />
        <div className="all-right-panel" ref={panelRef}>
          {package_data.map((el, index) => (
            <div className="right-side-panel" key={index}>
              <Package_Card data={el} image={images} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Package.propTypes = {
  data: PropTypes.array,
};
