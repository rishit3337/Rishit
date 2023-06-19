import "../styles/extracomponents.css";
import { NavLink } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import Image_Slider from "./ImageSlide";
import Slider from "./Slider";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 769 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1023, min: 321 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 320, min: 100 },
    items: 1,
  },
};

const images = [];

export default function Own_Creation({ data, own_creation_ref }) {
  for (let i = 1; i <= data.length; i++) {
    images.push(`/src/assets/creation/00${i}.svg`);
  }

  console.log("Ref is - > ", own_creation_ref);
  return (
    <div className="top-creation">
      <div className="side-banner">
        <div className="header">
          <h1>Our Own Creation</h1>
        </div>
        <div className="content">Designed in our studio</div>
        <div className="link">
          <NavLink to="/products/our_creation">More</NavLink>
        </div>
      </div>
      <div className="wrapper">
        <div className="slider-carousel" ref={own_creation_ref}>
          <Image_Slider data={data} image={images} />
        </div>
      </div>
    </div>
  );
}

{
  /* <Carousel infinite draggable responsive={responsive}>
          {products}
        </Carousel> */
  // console.log(images);
  // const products = data.map((item, index) => <Own_Creation_Card data={item} image={images[index]} key={index} />);
}
