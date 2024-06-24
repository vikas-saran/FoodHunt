import React from "react";
import { FaInstagram,FaTelegram,FaWhatsapp,FaGithub } from "react-icons/fa";
import "../styles/footer.css"
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">FOODHUNT<br/><br/> <p className="text-sm font-thin">For Further Questions, Please Call(:-8616209094)</p></div>
          <div className="right">
            <p> Jodhpur, Rajasthan</p>
            <p>Open: 05:00 PM - 12:00 AM</p>
            <br/><p className="text-sm font-thin">Tuesday-Sunday</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Developed By Vikas_Saran</p>
          </div>
          <div>
          <div className="modallinks">
            <a href="https://www.instagram.com/saggi._/" id="instagram-icon" className="icon" >
            <i><FaInstagram/></i>
            </a>
            <a href="https://t.me/Vikassaran" id="telegram-icon" className="icon" >
                <FaTelegram/>
            </a>
            <a href="https://wa.me/918619623108?text=Hi%20Vikas" id="whatsapp-icon" className="icon" >
                <FaWhatsapp/>
            </a>
            <a href="https://github.com/vikas-saran" id="github-icon" className="icon" >
                <FaGithub/>
            </a>

        </div>
          </div>
          <div className="right">
            <p>All Rights Reserved by FoodHunt  </p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;