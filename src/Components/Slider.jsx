import styled from "@emotion/styled";
import PropTypes from "prop-types";

export default function Slider({
  height = 0.15,
  translateY = 0,
  horizontal = false,
  currentIndex,
  setCurrentIndex,
  length,
  sliderRef
}) {
  const Slider = styled.div`
    width: ${horizontal ? `${window.innerWidth / 16 - 5}rem` : "0.15rem"};
    height: ${horizontal ? "0.15rem" : `${height}rem`};
    background-color: #07484a;
    position: relative;
    margin-bottom: 1.5rem;
    margin-top: ${horizontal ? "1rem" : "0rem"};

    &:before {
      content: "";
      position: absolute;
      width: ${horizontal ? "2rem" : "250%"};
      height: ${horizontal ? "0.3rem" : "2.47rem"};
      background-color: #228c22;
      top: ${horizontal ? "-0.1rem" : "0"};
      left: ${horizontal ? "0.5 rem" : "-0.1rem"};
      transform: ${horizontal ? `translateX(${translateY}rem)` : `translateY(${translateY}rem)`};
    }
  `;

  const prev = () => {
    const isFirst = currentIndex === 1;
    const newIndex = isFirst ? length : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const next = () => {
    const isLast = currentIndex === length;
    const newIndex = isLast ? 1 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const moveLeft = ()=>{
    if(sliderRef.current){
      const width = sliderRef.current.clientWidth;
      const scrollAmount = width / length;
      sliderRef.current.scrollLeft -= scrollAmount;
      const nextElement = sliderRef.current.children[currentIndex - 1];
      if (nextElement) {
        nextElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
        sliderRef.current.style.scrollPaddingRight = `${scrollAmount}`;
        setCurrentIndex(currentIndex - 1);
      }
    }
  }

  const moveRight = ()=>{
    if(sliderRef.current){
      const width = sliderRef.current.clientWidth;
      const scrollAmount = width / length;
      sliderRef.current.scrollLeft += scrollAmount;
      const nextElement = sliderRef.current.children[currentIndex + 1];
    if (nextElement) {
      nextElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
      sliderRef.current.style.scrollPaddingLeft = `${scrollAmount}`;
      setCurrentIndex(currentIndex + 1);
    }
    }
  }

  return (
    <div className="just-slider-things">
      <Slider />
      <div id="slider-arrows">
        <div className="slide-select prev" onClick={horizontal ? moveLeft :  prev}>
          {horizontal ? <span className="arrows">&#8592;</span> : <span className="arrows">&#8593;</span>}
        </div>
        <div className="slide-select next" onClick={horizontal ? moveRight : next}>
        {horizontal ? <span className="arrows">&#8594;</span> : <span className="arrows">&#8595;</span>}
        </div>
      </div>
    </div>
  );
}

Slider.propTypes = {
  height: PropTypes.number,
  translateY: PropTypes.number,
  horizontal: PropTypes.bool,
  currentIndex: PropTypes.number,
  setCurrentIndex: PropTypes.func,
  length: PropTypes.number,
};
