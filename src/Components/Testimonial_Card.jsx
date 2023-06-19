import PropTypes from "prop-types";

function getImageFiles() {
  const width = window.innerWidth;

  if (width <= 320) {
    return "mobile";
  } else if (width >= 321 && width <= 768) {
    return "mobile";
  } else if (width >= 769 && width <= 1024) {
    return "laptop";
  }
  return "xlarge";
}

export default function Testimonial_Card({ data }) {
  const image = getImageFiles();
  return (
    <div className="test-card">
      <div className="image-container">
        <div className="test-image-person">
          <img src={`/src/assets/testimonial/${image}.svg`} alt="person" className="person-image" />
          <div className="vectors">
            <div className="test-image-vec1">
              <img src={`/src/assets/testimonial/${image}-1.svg`} alt="commas" />
            </div>
            <div className="test-image-vec2">
              <img src={`/src/assets/testimonial/${image}-2.svg`} alt="commas" />
            </div>
          </div>
        </div>
      </div>
      <div className="test-info">
        {data.map((item, i) => (
          <div key={i} className="test-info-content">
            <div className="test-experience">{item.message}</div>
            <div className="test-name-post">
              <div className="test-name">{item.name}</div>
              <div className="test-post">{item.post}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
