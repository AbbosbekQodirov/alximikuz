import React, { useState } from "react";

import { BiArrowToTop } from "react-icons/bi";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [showBtn, setShowbnt] = useState(false);

  window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY > 155) {
      setShowbnt(true);
    } else {
      setShowbnt(false);
    }
  });

  return (
    <div className="navbar">
      <section className="navSection_one">
        <div className="container navOne_container">
          <div>
            <div>
              <img src="./assets/logo/map.svg" alt="" />
              <h4>Manzilimiz</h4>
            </div>
            <div>
              <img src="./assets/logo/tg.svg" alt="" />
              <h4>Savollar yo’llang!</h4>
            </div>
          </div>
          <div>
            <div>
              Biz bilan bog’laning!:
              <h4>
                <a href="">+998 73 240 00 30</a>
              </h4>
            </div>
            <select name="" id="" className="lang">
              <option value="uz">O'zbekcha</option>
              <option value="ru">Ruscha</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </section>
      <section className="navSection_two">
        <div className="container navTwo_container">
          <div>
            <img src="./assets/logo/logo.png" alt="" />
            <img src="./assets/logo/logo2.svg" alt="" />
          </div>
          <div className="form">
            <div className="search">
              <form action="">
                <input type="text" placeholder="Bu yerdan Qidiring..." />
              </form>
              <img src="./assets/logo/search.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section
        className={showBtn ? "navSection_three active" : "navSection_three"}
      >
        <div className="container navthree_container">
          <ul>
            <li>
              <NavLink to="/">Asosiy</NavLink>
            </li>
            <li>
              <NavLink to="/about">Biz haqimizda</NavLink>
            </li>
            <li>
              <NavLink to="/products">Mahsulotlar</NavLink>
            </li>
            <li>
              <NavLink to="/news">Yangiliklar</NavLink>
            </li>
            <li>
              <NavLink to="/career">Kareyra</NavLink>
            </li>
            <li>
              <NavLink to="/partners">Hamkorlik</NavLink>
            </li>
          </ul>
          <div className="circles">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>
      <div
        onClick={() => {
          document.documentElement.scrollTop = 0;
        }}
        class={showBtn ? "scrollToTop-btn active" : "scrollToTop-btn"}
      >
        <BiArrowToTop />
      </div>
    </div>
  );
}

export default Navbar;
