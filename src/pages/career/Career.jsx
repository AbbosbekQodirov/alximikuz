import React, { useState } from "react";
import "./Career.css";
import NewsList from "../../components/NewsList";

function Career() {
  const [newsList, setNewsList] = useState([
    {
      img: "./assets/imgs/careerimg.png",
      title: "Professionallar bilan ishlash!",
      desc: "Lorem ipsum dolor sit amet consectetur. In posuere morbi enim lectus nulla amet. Vitae urna egestas porttitor ullamcorper neque nunc rhoncus potenti vulputate. Penatibus interdum condimentum pellentesque amet arcu lobortis. Amet nisl arcu malesuada lacus tempus tellus nam nunc at. Posuere feugiat pellentesque viverra pulvinar lectus. Egestas ante tellus quis elit sed. Proin risus mi bibendum imperdiet nisl sodales ultrices. Ullamcorper diam vel nisl feugiat pretium quis mattis dolor ac.",
    },
    {
      img: "./assets/imgs/careerimg2.png",
      title: "Ahil jamoa",
      desc: "Lorem ipsum dolor sit amet consectetur. In posuere morbi enim lectus nulla amet. Vitae urna egestas porttitor ullamcorper neque nunc rhoncus potenti vulputate. Penatibus interdum condimentum pellentesque amet arcu lobortis. Amet nisl arcu malesuada lacus tempus tellus nam nunc at. Posuere feugiat pellentesque viverra pulvinar lectus. Egestas ante tellus quis elit sed. Proin risus mi bibendum imperdiet nisl sodales ultrices. Ullamcorper diam vel nisl feugiat pretium quis mattis dolor ac.",
    },
  ]);

  const [index, setIndex] = useState(0);

  const next = () => {
    if (index == newsList.length - 1) {
      setIndex(0);
    } else {
      setIndex((index) => index + 1);
    }
  };

  const prev = () => {
    if (index == 0) {
      setIndex(newsList.length - 1);
    } else {
      setIndex((index) => index - 1);
    }
  };

  return (
    <div className="career_page">
      <div className="container career_hero">
        <img src="./assets/logo/careerLogo.png" alt="" />
        <h1>
          Alximik jamoasining <br /> farmaseftiga <br /> aylaning!
        </h1>
        <button className="btn">Ariza qoldirish</button>
      </div>
      <div className="container">
        <div className="title">Bizning qadriyatlar!</div>
        {newsList && (
          <div className="news ">
            <img className="team_img" src={newsList[index].img} alt="" />
            <h3>{newsList[index].title}</h3>
            <p>{newsList[index].desc}</p>
            <div className="btns">
              <div className="left">
                <img onClick={prev} src="./assets/icons/left.svg" alt="" />
              </div>
              <div className="right">
                <img onClick={next} src="./assets/icons/right.svg" alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="container news ">
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
        <div className="title">
          <h5>Bizga ariza qoldiring!</h5>
        </div>
        <form className="career_form" action="">
          <label className="jobs">
            <h4>Vakansiyalar</h4>
            <select name="" id="">
              <option value="farmaseft">farmaseft</option>
              <option value="distributer">farm distributer</option>
              <option value="konsultant">med konsultant</option>
            </select>
          </label>
          <div className="data">
            <div>
              <label>
                <h4>Ism va familiya </h4>
                <input placeholder="Ismingizni kiriting" type="text" />
              </label>
              <label>
                <h4>Tug’ilgan sana </h4>
                <input type="date" />
              </label>
              <label>
                <h4>Ism va familiya </h4>
                <textarea
                  name=""
                  id=""
                  cols="10"
                  rows="1"
                  placeholder="O'zingiz haqingizda yozing..."
                ></textarea>
              </label>
            </div>
            <div>
              <label>
                <h4>Manzil</h4>
                <select name="manzil" id="">
                  <option value="">Toshkent</option>
                  <option value="">Farg'ona</option>
                  <option value="">Andijon</option>
                </select>
              </label>
              <label>
                <h4>Telefon raqam </h4>
                <input placeholder="+998911612501" type="text" />
              </label>
              <label>
                <h4>Maosh</h4>
                <select name="maosh" id="">
                  <option value="">200$ - 400$</option>
                  <option value="">400$ - 600$</option>
                  <option value="">600$ - 100$</option>
                </select>
              </label>
            </div>
          </div>
          <label htmlFor="img" id="create_img">
            + Foto
            <input className="create_img" type="file" id="img" />
          </label>
          <button className="btn form_btn">Yuborish</button>
        </form>
      </div>
    </div>
  );
}

export default Career;
