import React, { useState } from "react";
import {GrInstagram} from "react-icons/gr"
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import "./News.css";
import NewsList from "../../components/NewsList";

function News() {
  const [newsList, setNewsList] = useState([
    {
      img: "./assets/imgs/newsimg.png",
      title: "Farmaseftika yangiliklari",
      desc: "Lorem ipsum dolor sit amet consectetur. Magna consectetur pulvinar acsuspendisse ornare id at suspendisse. Tempus nibh vitae consectetur idvel. Mauris egestas posuere quam lacus turpis metus sem non commodo. Accumsan habitant eget quisque gravida sed eget morbi. Eleifend aelementum lacinia justo duis molestie elementum. Massa pretium nullagravida odio vulputate fringilla nam ligula leo"
    },
  ]);
  const [achieveList, setEchieveList] = useState([
    {
      img: "./assets/imgs/achieveImg.png",
      title: "Yil brendi 2021",
    },
    {
      img: "./assets/imgs/achieveImg.png",
      title: "Yil brendi 2021",
    },
    {
      img: "./assets/imgs/achieveImg.png",
      title: "Yil brendi 2021",
    },
    {
      img: "./assets/imgs/achieveImg.png",
      title: "Yil brendi 2021",
    },
    {
      img: "./assets/imgs/achieveImg.png",
      title: "Yil brendi 2021",
    },
    {
      img: "./assets/imgs/achieveImg.png",
      title: "Yil brendi 2021",
    },
  ]);
  return (
    <div className="news_page">
      <div className="container ">
        <img
          className="newsLogo"
          src="./assets/logo/newsLogo.png"
          alt=""
        />
        <div className="title">Yutuqlar</div>
        <div className="achievements">
          {achieveList.map((item) => {
            return (
              <div className="achieve">
                <div className="achieve_img">
                  <img src={item.img} alt="" />
                </div>
                <h4>{item.title}</h4>
                <a href="">Batafsil</a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container">
        <div className="title">Yangiliklar</div>
        <NewsList newsList={newsList} />
      </div>

      <div className="container news">
        <div className="title">Ish jarayonidan lavhalar</div>
        <img src="./assets/imgs/newsimg.png" alt="" />
        <h3>Marketing bo‘limi</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Magna consectetur pulvinar ac
          suspendisse ornare id at suspendisse. Tempus nibh vitae consectetur id
          vel. Mauris egestas posuere quam lacus turpis metus sem non commodo.
          Accumsan habitant eget quisque gravida sed eget morbi. Eleifend a
          elementum lacinia justo duis molestie elementum. Massa pretium nulla
          gravida odio vulputate fringilla nam ligula leo.
        </p>
      </div>
      <div className="container">
        <div className="manual">
          <div className="manual_info">
            <h1>Bosh og’rig’ini davolashning 10 usuli</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Rutrum sit quisque varius
              interdum dictumst id. Eget mi sed tempus mattis lectus orci. Amet
              sit accumsan nec suspendisse neque netus neque adipiscing.
              Porttitor tincidunt quisque a ornare donec.Lorem ipsum dolor sit
              amet consectetur. Rutrum sit quisque varius interdum dictumst id.
              Eget mi sed tempus mattis lectus orci
            </p>
            <button className="btn">Batafsil</button>
          </div>
          <div className="manual_img">
            <img src="./assets/imgs/manual_img.png" alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="title">Bizni ijtimoiy tarmoqlarda kuzatib boring!</div>
        <div className="news_social">
          <a href="https://www.facebook.com/search/top/?q=al%20kimyogar%20pharm">
            <div>
              <FaFacebookF />
            </div>
          </a>
          <a href="https://www.instagram.com/alkimyogaruz/">
            <div>
              <GrInstagram />
            </div>
          </a>
          <a href="https://t.me/alkimyogar_info">
            <div>
              <FaTelegramPlane />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default News;
