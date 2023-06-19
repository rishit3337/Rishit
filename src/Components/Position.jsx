
import "../styles/Position.css";

export default function Pos() {
  const data = [
    {
      img: "/src/assets/payment.svg",
      title: "Payment Method",
      content: "We offer flexible payment options, to make easier.",
    },
    {
        img : "/src/assets/return.svg",
        title : "Return Policy" , 
        content : "You can return a product within 30 days."
    },
    {
        img : "/src/assets/customer.svg",
        title : "Customer Support",
        content :"Our customer support is 24/7."
    }
  ];

  return (
    <div className="pos">
      <h1>Benefits for your Expediency</h1>
      <div className="pos-content">
       {
         data.map((el,index)=>(
          <div key={index} className="pos-groups">
            <div className="pos-image"><img src={el.img} alt="pos-image"/></div>
            <div className="pos-title">{el.title}</div>
            <div className="pos-desc">{el.content}</div>
          </div>
         ))
       }
      </div>
    </div>
  );
}
