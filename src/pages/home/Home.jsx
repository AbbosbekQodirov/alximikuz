import React, { useState } from "react";
import Hero from "../../components/Hero";
import "./Home.css";
import ProductList from "../../components/ProductList";

function Home() {
  const [heroElements, setHeroElements] = useState([
    {
      title: "Imunitetni oshiruvchi tabiiy sirop.",
      desc: "Lorem ipsum dolor sit amet consectetur. Sit facilisi ac habitant lacinia amet enim morbi risus.",
      img: "./assets/imgs/1.png",
    }
  ]);

  const [products, setProducts] = useState([
    {
      title: "Argeta 100ml",
      price: 119000,
    },
    {
      title: "Argeta 100ml",
      price: 119000,
    },
    {
      title: "Argeta 100ml",
      price: 119000,
    },
    {
      title: "Argeta 100ml",
      price: 119000,
    },
    {
      title: "Argeta 100ml",
      price: 119000,
    },
    {
      title: "Argeta 100ml",
      price: 119000,
    },
    {
      title: "Argeta 100ml",
      price: 119000,
    },
    {
      title: "Argeta 100ml",
      price: 119000,
    },
  ]);


  return (
    <div className="home_page">
      <Hero heroElements={heroElements} />
      <div className="container products">
        <div className="title">Mahsulotlar</div>
        <h3>
          <span>100 000uzs</span> dan yuqori bo’lgan haridlar uchun yetkazib
          berish bepul!
        </h3>
        <div className="cards_one">
          <div className="card">
            <img src="./assets/imgs/immunity 1.png" alt="" />
            <h4>Immunitet</h4>
          </div>
          <div className="card">
            <img src="./assets/imgs/immunity 1.png" alt="" />
            <h4>Immunitet</h4>
          </div>
          <div className="card">
            <img src="./assets/imgs/immunity 1.png" alt="" />
            <h4>Immunitet</h4>
          </div>
          <div className="card">
            <img src="./assets/imgs/immunity 1.png" alt="" />
            <h4>Immunitet</h4>
          </div>
          <div className="card">
            <img src="./assets/imgs/immunity 1.png" alt="" />
            <h4>Immunitet</h4>
          </div>
        </div>
      </div>
      <div className="container news">
        <div className="title">Yangiliklar</div>
        <img src="./assets/imgs/newsimg.png" alt="" />
        <h3>Farmaseftika yangiliklari</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Magna consectetur pulvinar ac
          suspendisse ornare id at suspendisse. Tempus nibh vitae consectetur id
          vel. Mauris egestas posuere quam lacus turpis metus sem non commodo.
          Accumsan habitant eget quisque gravida sed eget morbi. Eleifend a
          elementum lacinia justo duis molestie elementum. Massa pretium nulla
          gravida odio vulputate fringilla nam ligula leo.
        </p>
        <button className="btn">Barchasi</button>
      </div>
      <div className="container products">
        <div className="title">Mahsulotlar</div>
        <h3>
          <span>100 000uzs</span> dan yuqori bo’lgan haridlar uchun yetkazib
          berish bepul!
        </h3>
        <div className="cards_two">
          <div className="filter">
            <div>Ommabop</div>
            <div>Reytingi yuqori</div>
          </div>
          <ProductList products={products} />
          <button className="btn">Barchasi</button>
        </div>
      </div>
      <div className="container ">
        <div className="discount">
          <div>
            <h3>35% chegirma</h3>
            <h2>Oyning eng ommabop mahsuloti</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur.
            </p>
            <ul>
              <li>
                {" "}
                <img src="./assets/icons/chack.svg" alt="" /> Lorem ipsum
                dolor sit amet consectetur.
              </li>
              <li>
                {" "}
                <img src="./assets/icons/chack.svg" alt="" /> Lorem ipsum
                dolor sit amet consectetur.
              </li>
              <li>
                {" "}
                <img src="./assets/icons/chack.svg" alt="" /> Lorem ipsum
                dolor sit amet consectetur.
              </li>
              <li>
                {" "}
                <img src="./assets/icons/chack.svg" alt="" /> Lorem ipsum
                dolor sit amet consectetur.
              </li>
              <li>
                {" "}
                <img src="./assets/icons/chack.svg" alt="" /> Lorem ipsum
                dolor sit amet consectetur.
              </li>
            </ul>
            <button className="btn">Sotib olish!</button>
          </div>
          <div>
            <img src="./assets/imgs/discountimg.png" alt="" />
          </div>
        </div>
      </div>
      <div className="container products">
        <div className="title">Yangi tarkiblar</div>
        <h3>
          <span>100 000uzs</span> dan yuqori bo’lgan haridlar uchun yetkazib
          berish bepul!
        </h3>
        <div className="cards_items">
          <div className="item">
            <div></div>
            <div>
              <h3>Argeta 100ml</h3>
              <p>119 000 uzs</p>
            </div>
          </div>
          <div className="item">
            <div></div>
            <div>
              <h3>Argeta 100ml</h3>
              <p>119 000 uzs</p>
            </div>
          </div>
          <div className="item">
            <div></div>
            <div>
              <h3>Argeta 100ml</h3>
              <p>119 000 uzs</p>
            </div>
          </div>
          <div className="item">
            <div></div>
            <div>
              <h3>Argeta 100ml</h3>
              <p>119 000 uzs</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container custom_container">
        <div className="title">Mijozlar fikri</div>
        <div className="customers">
          <div className="customer">
            <div className="user">
              <img src="./assets/imgs/userimg.png" alt="" />
              <div>
                <h4>Aziz Shukurov</h4>
                <p>Shifokor</p>
              </div>
            </div>
            <p>
              Ushbu tabiiy dorilar bemorlarni sog’ligini ijobiy holatga
              keltirishda katta hissa qo’shdi! <br /> <br /> Sizga ham tavsiya
              qilaman 👍
            </p>
            <h5>07.03.2023</h5>
          </div>
          <div className="customer">
            <div className="user">
              <img src="./assets/imgs/userimg.png" alt="" />
              <div>
                <h4>Aziz Shukurov</h4>
                <p>Shifokor</p>
              </div>
            </div>
            <p>
              Ushbu tabiiy dorilar bemorlarni sog’ligini ijobiy holatga
              keltirishda katta hissa qo’shdi! Sizga ham tavsiya qilaman 👍
            </p>
            <h5>07.03.2023</h5>
          </div>
          <div className="customer">
            <div className="user">
              <img src="./assets/imgs/userimg.png" alt="" />
              <div>
                <h4>Aziz Shukurov</h4>
                <p>Shifokor</p>
              </div>
            </div>
            <p>
              Ushbu tabiiy dorilar bemorlarni sog’ligini ijobiy holatga
              keltirishda katta hissa qo’shdi! Sizga ham tavsiya qilaman 👍
            </p>
            <h5>07.03.2023</h5>
          </div>
          <div className="customer">
            <div className="user">
              <img src="./assets/imgs/userimg.png" alt="" />
              <div>
                <h4>Aziz Shukurov</h4>
                <p>Shifokor</p>
              </div>
            </div>
            <p>
              Ushbu tabiiy dorilar bemorlarni sog’ligini ijobiy holatga
              keltirishda katta hissa qo’shdi! Sizga ham tavsiya qilaman 👍
            </p>
            <h5>07.03.2023</h5>
          </div>
        </div>
        <div className="custom_btn">Barchasi</div>
      </div>
      <div className="container">
        <div className="title">Hamkorlar</div>
        <div className="partners">
          <div className="partner">
            <img src="./assets/imgs/hamkor1.png" alt="" />
          </div>
          <div className="partner">
            <img src="./assets/imgs/hamkor2.png" alt="" />
          </div>
          <div className="partner">
            <img src="./assets/imgs/hamkor3.png" alt="" />
          </div>
          <div className="partner">
            <img src="./assets/imgs/hamkor4.png" alt="" />
          </div>
        </div>
      </div>
      <div className="container explanation_container">
        <div className="title">Tavsiyalar</div>
        <div className="explanation">
          <div>
            <div className="user_img">
              <img src="./assets/imgs/women.png" alt="" />
            </div>
            <div className="user_info">
              <h3>Bosh og’rig’i</h3>
            </div>
          </div>
          <div>
            <div className="user_img">
              <img src="./assets/imgs/women.png" alt="" />
            </div>
            <div className="user_info">
              <h3>Bosh og’rig’i</h3>
            </div>
          </div>
          <div>
            <div className="user_img">
              <img src="./assets/imgs/women.png" alt="" />
            </div>
            <div className="user_info">
              <h3>Bosh og’rig’i</h3>
            </div>
          </div>
          <div>
            <div className="user_img">
              <img src="./assets/imgs/women.png" alt="" />
            </div>
            <div className="user_info">
              <h3>Bosh og’rig’i</h3>
            </div>
          </div>
        </div>
        <div className="btn">Barchasi</div>
      </div>
    </div>
  );
}

export default Home;
