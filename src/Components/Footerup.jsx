import { NavLink } from "react-router-dom";

function getImageFiles() {
  const width = window.innerWidth;

  if (width <= 320) {
    return "mobile";
  } else if (width >= 321 && width <= 767) {
    return "mobile";
  } else if (width >= 768 && width <= 1024) {
    return "laptop";
  }
  return "xlarge";
}

export default function Footer_top() {
  const image = getImageFiles();
  return (
    <div className="footer-top">
      <div className="footer-image">
        <img src={`/src/assets/footer/${image}.svg`} alt="footer-image" className="image" />
      </div>
      <div className="footer-text-input-button">
        <div className="footer-text">
          <div className="ftext-heading">
            <h1>Join Our</h1>
            <h1>Newsletter</h1>
          </div>
          <div className="ftext-content">Receive exclusive deals, discounts and many offers.</div>
        </div>
        <div className="footer-input">
          <input type="email" name="email" placeholder="Enter your email" />
        </div>
        {/* <div className="footer-button"></div> */}
        <div className="footer-button">
          <NavLink to="/categories">Subscribe</NavLink>
        </div>
      </div>
    </div>
  );
}
