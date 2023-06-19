import "../styles/DisplayCard.css";

export default function Card({ data , image }) {
  // console.log("Inside the Image_Slider , Data are ->",image);
  return (
    <div className="card">
      <div className="product-image">
        <img src={image === null ? data.img : image} alt="Furniture" />
      </div>
      <div className="product-desc">
        <div className="product-name">{data.name}</div>
        <div className="product-type">{data.type}</div>
        <div className="product-price"><span>{data.price != null ? '$' : ""}</span>{data.price}</div>
      </div>
      <div className="explore">{data.message}</div>
    </div>
  );
}
