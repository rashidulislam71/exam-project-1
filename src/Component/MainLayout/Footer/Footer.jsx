import React from "react";
import "./Footer.css";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import logo1 from "../../../assets/images/LOGO3.png"

const Footer = () => {
  return (
    <div className="footerSection">
      <footer className="footer">
        <div className="navLogo footerLogo ">
          <img src={logo1} alt="HALAL JIBIKA" />
        </div>
        
        {/* <h1 className="footerLogo">HALAL JIBIKA</h1> */}
        <div className="footer-column">
          
          <h2>Contact Us</h2>
          <div className="social-icons">
            <a href="#" target="_blank">
              <FaInstagramSquare />
            </a>
            <a href="https://www.linkedin.com/in/rashidulislam7/" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/rashidulislam72/" target="_blank">
              <FaSquareFacebook />
            </a>

            <a href="#" target="_blank">
              <FaSquareTwitter />
            </a>
            <a href="#" target="_blank">
              <BsDiscord />
            </a>
            
          </div>
          <ul>
            <li> <a href="#">123 Street, Dhaka, Bangladesh</a></li>
            <li>Email: <a href="#">jrashidulislam0103@gmail.com</a>  </li>
            <li> Phone: <a href="#">+880173400071</a></li>
          </ul>
        </div>

        <div className="footer-column">
          {/* Jobs Categories */}
          <h2>Jobs Categories</h2>
          <ul>
            <li>
              <a href="#">IT</a>
            </li>
            <li>
              <a href="#">Marketing</a>
            </li>
            <li>
              <a href="#">Finance</a>
            </li>
            <li>
              <a href="#">Engineering</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          {/* Remote Jobs */}
          <h2>Remote Jobs</h2>
          <ul>
            <li>
              <a href="#">Software Developer</a>
            </li>
            <li>
              <a href="#">Digital Marketing</a>
            </li>
            <li>
              <a href="#">Financial Analyst</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          {/* Privacy & Policy */}
          <h2>Privacy & Policy</h2>
          <ul>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
          </ul>
        </div>

        <div className="footerHr" />
        <div className="footer-bottom">
          <p>&copy; 2024 Your Company. All rights reserved by Rashidul Islam Rashed.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
