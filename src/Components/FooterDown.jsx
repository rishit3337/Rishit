import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "/src/assets/Logo.svg";
import fb from "/src/assets/logos/fb.svg";
import twitter from "/src/assets/logos/twitter.svg";
import insta from "/src/assets/logos/insta.svg";
import dribble from "/src/assets/logos/dribble.svg";
import linkedin from "/src/assets/logos/linkedin.svg";

const data = {
  address: {
    number: "+123 654 987",
    street: "877 The Bronx, NY",
    country: "14568, USA",
  },
  copyright: "Copyright ©2020 INWOOD. All Rights Reserved",
  links: [
    { title: "My Account", items: ["Sign In", "Register", "Order Status"] },
    { title: "Help", items: ["Shipping", "Returns", "Sizing"] },
    { title: "Shop", items: ["All products", "Bedroom", "Dinning Room"] },
    { title: "Legal Stuff", items: ["Shipping & Delivery", "Terms & Conditions", "Privacy & Policy"] },
  ],
};

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="footer-logo">
        <div className="company-logo">
          <img src={Logo} alt="company logo" />
        </div>
        <div className="social-links">
          <img src={fb} alt="facebook logo" />
          <img src={insta} alt="insta logo" />
          <img src={linkedin} alt="linkedin logo" />
          <img src={dribble} alt="dribble logo" />
          <img src={twitter} alt="twitter logo" />
        </div>
      </div>
      <div className="footer-address">
        <h2>Address</h2>
        <div className="footer-address-content">
          <div className="number">{data.address.number}</div>
          <div className="street">{data.address.street}</div>
          <div className="country">{data.address.country}</div>
        </div>
      </div>
      <div className="footer-nav-links">
        {data.links.map((link, index) => (
          <div className="links-content" key={index}>
            <h1>{link.title}</h1>
            {link.items.map((item, subIndex) => (
              <div className="three-links" key={subIndex}>
                <NavLink>{item}</NavLink>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="copyright-message">
        <p>{data.copyright}</p>
      </div>
    </div>
  );
};

export default FooterBottom;
