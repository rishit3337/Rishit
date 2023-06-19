import Footer_top from "./Footerup";
import "../styles/Footer.css";
import Footer_bottom from "./FooterDown";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-above">
        <Footer_top/>
      </div>
      <div className="footer-below">
        <Footer_bottom/>
      </div>
    </div>
  );
}
