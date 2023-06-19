import "../styles/Testimonial.css";
import Testimonial_Card from "./Testimonial_Card";
import PropTypes from "prop-types";


export default function Testimonials({data}) {
  return (
    <div className="top-container">
      <h1>Testimonials</h1>
      <div className="happy-message">Over 15,000 happy customers</div>
      <div className="messages">
        <Testimonial_Card data={data} />
      </div>
    </div>
  );
}
