import React from "react";
import portfolioPhoto from "../../assets/images/portfolioProfileImage.png";
import "./FeelingProud.css";

function FeelingProud(props) {
  // const theme = props.theme;
  return <img src={portfolioPhoto} alt="portfolio-profile" style={{ borderRadius: '60px', width: '500px', height: 'auto', marginLeft:'0px' }} />;
}

export default FeelingProud;
