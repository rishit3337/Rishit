import "../styles/Home.css";
import { NavLink } from "react-router-dom";
import Categories from "./Categories";
import Carousel from "./Carousel";
import Images from "./Images";
import Image_Slider from "./ImageSlide";
import Slider from "./Slider";
import { useRef, useState } from "react";
import Package from "./Pack";
import Pos from "./Position";
import Testimonials from "./Testimonials";
import Footer from "./footer";
import Own_Creation from "./extracomponents";
import Side_Navbar from "./Navbar2";

export default function Home({navbarRef}) {
  const data = [
    { 1: ["Bedroom", "/categories/bedroom"] },
    { 2: ["Dinning Room", "/categories/dinning-room"] },
    { 3: ["Meeting Room", "/categories/meeting-room"] },
    { 4: ["Workspace", "/categories/workspace"] },
    { 5: ["Living Room", "/categories/living-room"] },
    { 6: ["Room Kitchen", "/categories/room-kitchen"] },
    { 7: ["Living Space", "/categories/living-space"] },
  ];

  const Product_Data = [
    {
      img: "./src/assets/products/chair.svg",
      name: "Armchair",
      type: "Light Single Chair",
      price: "145",
    },
    {
      img: "./src/assets/products/001.svg",
      name: "Armchair",
      type: "Light Single Chair",
      price: "145",
    },
    {
      img: "./src/assets/products/002.svg",
      name: "Premium Sofa",
      type: "Light Single Chair",
      price: "145",
    },
    {
      img: "./src/assets/products/003.svg",
      name: "Minimal Sofa",
      type: "Light Single Chair",
      price: "145",
    },
    {
      img: "./src/assets/products/004.svg",
      name: "Dinning Chair",
      type: "Light Single Chair",
      price: "145",
    },
  ];

  const package_data = [
    {
      name: "Larkin Wood Full Set",
      stars: 5,
      price: 729.99,
      desc: "Cast Aluminum Outdoor Chaise Lounge As an elegant and classic touch to your outdoor space, this cast. Aluminum Chaise Lounge combines the appearance, function and quality all together, offering you with the best experience.",
    },
  ];

  const testimonial_data = [
    {
      message:
        "“My experience with Mark is a complete success, from customer service, wide range of products, clean store, purchasing experience, the newsletter. Thank you.”",
      name: "Leona Paul",
      post: "CEO of Float.com",
    },
  ];

  const own_creation_data = [
    {
      id: 1,
      message: "Explore all Rooms",
    },
    {
      id: 2,
      message: "Explore all Rooms",
    },
    {
      id: 3,
      message: "Explore all Rooms",
    },
  ];

  const nav_data = [
    { 1: ["Home", "/"] },
    { 2: ["Products", "/products"] },
    { 3: ["Categories", "/categories"] },
    { 4: ["About", "/about"] },
    { 5: ["Contact Us", "/contact"] },
  ];

  const sliderRef = useRef(null);
  const own_creation_ref = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <div className="chair">
      <Side_Navbar data={nav_data} navbarRef={navbarRef}/>
        <div>
          <div className="desc">
            <span>Exclusive Deals of</span> <span className="hidden">Furniture Collection</span>
          </div>
          <div className="sub-desc">Explore different categories. Find the best deals</div>
          <div className="nav-link">
            <NavLink to="/products" className="button">
              Shop now
            </NavLink>
          </div>
        </div>
      </div>
      <h2>Explore by Category</h2>
      <Categories />
      <div className="category-button">
        <NavLink to="/categories" className="button">
          All Categories &nbsp; &rarr;
        </NavLink>
      </div>
      <div className="carousel-images">
        <Carousel data={data} />
        <div className="images">
          <Images />
        </div>
      </div>
      <h2 style={{ marginBottom: "1rem" }}>Popular Products</h2>
      <div className="image-slider-container">
        <div className="image-slider" ref={sliderRef}>
          <Image_Slider data={Product_Data} sliderRef={sliderRef} />
        </div>
        <div id="slider">
          <Slider
            horizontal={true}
            length={Product_Data.length - 1}
            sliderRef={sliderRef}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
        <div className="category-button">
          <NavLink to="/categories" className="button">
            Explore All Items &nbsp; &rarr;
          </NavLink>
        </div>
        <h2 id="sp_package">Special Package</h2>
        <Package data={package_data} />
        <Own_Creation data={own_creation_data} own_creation_ref={own_creation_ref} />
        <div id="own_creation_slider">
          <Slider horizontal={true} length={data.length} />
        </div>
        <Pos />
        <Testimonials data={testimonial_data} />
        <div className="testimonial-slider">
          <Slider horizontal={true} length={testimonial_data.length} sliderRef={own_creation_ref} />
        </div>
        <Footer />
      </div>
    </>
  );
}
