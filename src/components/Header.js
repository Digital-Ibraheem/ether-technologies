import React, { useState } from "react";
import Ether from "../assets/svgs/ether-blue-white.svg";
import { PiMapPinFill } from "react-icons/pi";
import { TbMailFilled } from "react-icons/tb";
import { PiPhoneFill } from "react-icons/pi";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const Header = ({ setScrolled }) => {
  const [opened, setOpened] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setOpened(!opened);
    if (!opened) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  };

  return (
    <div className="header hide move-in move-in-top">
      <Link to="/">
        <img
          src={Ether}
          alt="ether logo"
          className="header-logo"
          ariaHidden="true"
          decoding="async"
        />
      </Link>
      <ul className="header-navigation">
        <li>
          <Link to="/" className={location.pathname === "/" && "link-selected"}>
            Home
          </Link>
          <span className="li-line"></span>
        </li>
        <li>
          <Link
            to="/services"
            className={location.pathname === "/services" && "link-selected"}
          >
            Services
          </Link>
          <span className="li-line"></span>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => {
              setScrolled(true);
            }}
          >
            Projects
          </Link>
          <span className="li-line"></span>
        </li>
        <li>
          <Link
            to="/blog"
            className={location.pathname === "/blog" && "link-selected"}
          >
            Blog
          </Link>
          <span className="li-line"></span>
        </li>
        <button
          className={`header-contact btn-solid ${
            location.pathname === "/contact" && "button-selected"
          }`}
        >
          <Link to="/contact">Contact Us</Link>
        </button>
      </ul>
      <button
        className={`menu ${opened ? "opened" : ""}`}
        onClick={handleClick}
        aria-label="Main Menu"
        aria-expanded={opened}
      >
        <svg width="50" height="70" viewBox="0 0 100 100">
          <path
            className="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path className="line line2" d="M 20,50 H 80" />
          <path
            className="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </button>
      <div className={`dark ${opened && "dark-opened"}`}></div>
      <div className={`header-sidebar ${opened && "header-sidebar-open"}`}>
        <ul>
          <li>
            <Link
              to="/"
              onClick={handleClick}
              className={location.pathname === "/" && "link-selected"}
            >
              Home
            </Link>
            <span
              className={`li-line ${
                location.pathname === "/" && "line-selected"
              }`}
            ></span>
          </li>
          <li>
            <Link
              to="/services"
              onClick={handleClick}
              className={location.pathname === "/services" && "link-selected"}
            >
              Services
            </Link>
            <span
              className={`li-line ${
                location.pathname === "/services" && "line-selected"
              }`}
            ></span>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => {
                setScrolled(true);
                setOpened(false);
                handleClick();
              }}
            >
              Projects
            </Link>
            <span className="li-line"></span>
          </li>
          <li>
            <Link
              to="/blog"
              onClick={handleClick}
              className={location.pathname.includes("/blog") && "link-selected"}
            >
              Blog
            </Link>
            <span
              className={`li-line ${
                location.pathname.includes("/blog") && "line-selected"
              }`}
            ></span>
          </li>
          <button
            onClick={handleClick}
            className={`header-contact btn-solid ${
              location.pathname === "/contact" && "button-selected"
            }`}
          >
            <Link to="/contact">Contact Us</Link>
          </button>
        </ul>
        <div className="header-contact-section">
          <p>
            +1 (613) 355-3311 <PiPhoneFill className="phone" />
          </p>
          <p>
            Ottawa, ON <PiMapPinFill className="phone" />
          </p>
          <p>
            info@ethertechnologies.ca <TbMailFilled className="phone" />
          </p>
        </div>
        <div className="header-contact-icons">
          <FaFacebook />
          <RiInstagramFill />
          <FaLinkedin />
          <FaGoogle />
        </div>
      </div>
    </div>
  );
};

export default Header;
