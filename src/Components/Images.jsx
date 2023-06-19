import { NavLink } from "react-router-dom";

function getImageFiles() {
  const width = window.innerWidth;
  let images = [];

  let folder = "";

  if (width <= 320) {
    folder = "small_Image";
  } else if (width >= 321 && width <= 786) {
    folder = "medium_Image";
  } else if (width >= 787 && width <= 1024) {
    folder = "large_Image";
  } else {
    folder = "XLarge_Image";
  }

  for (let i = 1; i <= 6; i++) {
    images.push(`/src/assets/${folder}/00${i}.svg`);
  }
  console.log(images);
  return images;
}

export default function Images() {
  const images = getImageFiles();
  const data = ["Bedroom", "Dinning Room", "Meetings Room", "Workspace", "Living Room", "Kitchen Room"];
  return (
    <div className="image-container">
      {images.map((img, index) => (
        <div key={index}>
          <div className="name">{data[index]}</div>
          <NavLink>
            <span style={{ width: "fit-content" }}>Explore</span>
          </NavLink>
          <img src={img} alt="diff-images" key={index} />
        </div>
      ))}
    </div>
  );
}
