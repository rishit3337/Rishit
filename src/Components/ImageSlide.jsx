import Card from "./DisplayCard";

export default function Image_Slider({ data, sliderRef, image }) {
  const width = window.innerWidth;
  const isSmall = () => {
    width <= 320 ? true : false;
  };
  const arr = Array.from({ length: 4 });
  arr.fill(data[0]);



  // console.log(image)
  return (
    <>
      {isSmall()
        ? arr.map((el, index) => (
            <Card key={index} image={image && image.length > index ? image[index] : null} data={el} />
          ))
        : data.map((el, index) => (
            <Card key={index} image={image && image.length > index ? image[index] : null} data={el} />
          ))}
    </>
  );
}
