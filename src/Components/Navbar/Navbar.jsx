import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/tirpo.png"
import './Navbar.css'
export default function Navbar() {
  return (
    <>
      <nav className="navbar bg-white navbar-expand-lg rtl mainColorBackground">
        <div className="container-fluid">
          <Link className="navbar-brand m-0 p-0 pe-sm-2 w-15" to="/#whoWeAre">
            <img src={logo} className="logo" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto paddingSmall mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <Link
                  className="nav-link  mainColor fw-semibold active"
                  aria-current="page"
                  to="/#whoWeAre"
                >
                  من نحن
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link fw-semibold mainColor"
                  to="/#products"
                >
                  منتجاتنا
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link fw-semibold mainColor" to="#">
                  تواصل معنا
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 paddingSmall mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link mainColor active"
                  aria-current="page"
                  to="https://www.facebook.com/profile.php?id=100076237508401&mibextid=ZbWKwL"
                >
                  <i className="fa-brands fa-facebook fa-2x"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mainColor"
                  aria-current="page"
                  to="https://www.instagram.com/samar.kandel_designs?igsh=bXBqaGY3ZTcwMWZ5"
                >
                  <i className="fa-brands fa-instagram fa-2x"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mainColor"
                  aria-current="page"
                  to="https://wa.me/message/3IGUN4AGQ53II1"
                >
                  <i className="fa-brands fa-whatsapp fa-2x"></i>
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
