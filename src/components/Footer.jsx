import React from 'react'
import {
  FaTelegramPlane,
  FaInstagram,
  FaFacebookF,
  FaPhone,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="container footer_container">
        <div className="siteFooter">
          <div>
            <img src="./assets/logo/footerlogo.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur. In elementum morbi amet
              diam vel nisl amet vel. Eu tellus cras scelerisque rhoncus
              malesuada cras id at. In mattis ac adipiscing aliquam massa
              pellentesque donec laoreet.
            </p>
          </div>
          <ul>
            <h3>Xarita</h3>
            <li>
              <a href="">Asosiy</a>
            </li>
            <li>
              <a href="">Biz haqimizda</a>
            </li>
            <li>
              <a href="">Mahsulotlar</a>
            </li>
            <li>
              <a href="">Sotib olish</a>
            </li>
            <li>
              <a href="">Tavsiyalar</a>
            </li>
            <li>
              <a href="">Kareyra</a>
            </li>
          </ul>
          <ul>
            <h3>Maxfiylik siyosati</h3>
            <li>
              <a href="">Yordam</a>
            </li>
            <li>
              <a href="">Eng ko’p so’ralgan savollar</a>
            </li>
            <li>
              <a href="">Foydalanish shartlari</a>
            </li>
            <li>
              <a href="">Sotib olish</a>
            </li>
            <li>
              <a href="">Tavsiyalar</a>
            </li>
            <li>
              <a href="">Kareyra</a>
            </li>
          </ul>
          <ul>
            <h3>Ijtimoiy tarmoqlar</h3>
            <li>
              <span>
                <FaTelegramPlane />
              </span>
              <a href="https://t.me/alkimyogar_info">alkimyogar_info</a>
            </li>
            <li>
              <span>
                <FaInstagram />
              </span>
              <a href="https://www.instagram.com/alkimyogaruz/">alkimyogaruz</a>
            </li>
            <li>
              <span>
                <FaFacebookF />
              </span>
              <a href="https://www.facebook.com/search/top/?q=al%20kimyogar%20pharm">
                Al kimyogar pharm
              </a>
            </li>
            <h3 style={{ marginTop: "20px" }}>Aloqa markazi</h3>
            <a
              style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
              href="tel://+998 73 240 00 30"
            >
              <FaPhone /> <h4>+998 73 240 00 30</h4>
            </a>
            <a
              style={{ display: "flex", gap: "10px" }}
              href="tel://+998 99 401 30 00"
            >
              <FaPhone /> <h4>+998 99 401 30 00</h4>
            </a>
          </ul>
        </div>
        <hr />
        <div className="after">
          © 2022 <a href="">alximik.uz</a> Barcha huquqlar himoyalangan!
        </div>
      </div>
    </div>
  );
}

export default Footer