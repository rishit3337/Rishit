import { useEffect, useState, useRef } from "react";
import "../styles/Carousel.css";
import SearchBar from "./SearchBar";
import Links from "./Links";
import Slider from "./Slider";
import { NavLink } from "react-router-dom";

export default function Carousel({ data }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [translateY, setTranslateY] = useState(2);
  const [height, setHeight] = useState(data.length * 1.5);
  const sliderRef = useRef(null);

  useEffect(() => {
    document.documentElement.style.setProperty("--index", currentIndex.toString());
    const index = getComputedStyle(document.documentElement).getPropertyValue("--index");
    const links = document.querySelectorAll("#content > .links span");
    links.forEach((link, i) => {
      if (i + 1 === parseInt(index)) {
        link.classList.add("highlighted");
      } else {
        link.classList.remove("highlighted");
      }
    });
    console.log(currentIndex);
    const newTranslateY = (currentIndex - 1) * 5.5; // Calculate the new translateY value
    setTranslateY(newTranslateY);
  }, [currentIndex]);

  useEffect(() => {
    if (sliderRef.current) {
      const height = sliderRef.current.clientHeight / 16;
      setHeight(height);
      setTranslateY(0);
    }
  }, [data]);

  return (
    <div className="container">
      <div className="container-left">
        <div id="searchBar">
          <SearchBar />
        </div>
        <div className="slider-content">
          <div id="content" ref={sliderRef}>
            <Links data={data} currIndex={currentIndex} />
          </div>
          <Slider
            height={height}
            translateY={translateY}
            horizontal={false}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            length={data.length}
          />
        </div>
        <div className="another-category-button">
          <NavLink to="/categories" className="button">
            All Categories &nbsp; &rarr;
          </NavLink>
        </div>
      </div>
    </div>
  );
}
