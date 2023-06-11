import { useState } from "react";
import NewsList from "../../components/NewsList";
import "./Partner.css"
import {BsTelephone} from "react-icons/bs"
import VideoGuide from "../../components/VideoGuide";


function Partner() {
  const [newsList, setNewsList] = useState([
    {
      img: "./assets/imgs/partner1.png",
      title: "Fermer xo’jaliklari",
      desc: "Lorem ipsum dolor sit amet consectetur. Magna consectetur pulvinar acsuspendisse ornare id at suspendisse. Tempus nibh vitae consectetur idvel. Mauris egestas posuere quam lacus turpis metus sem non commodo. Accumsan habitant eget quisque gravida sed eget morbi. Eleifend aelementum lacinia justo duis molestie elementum. Massa pretium nullagravida odio vulputate fringilla nam ligula leo",
    },
    {
      img: "./assets/imgs/partner2.png",
      title: "Xususiy shifoxonalar",
      desc: "Lorem ipsum dolor sit amet consectetur. Magna consectetur pulvinar acsuspendisse ornare id at suspendisse. Tempus nibh vitae consectetur idvel. Mauris egestas posuere quam lacus turpis metus sem non commodo. Accumsan habitant eget quisque gravida sed eget morbi. Eleifend aelementum lacinia justo duis molestie elementum. Massa pretium nullagravida odio vulputate fringilla nam ligula leo",
    },
    {
      img: "./assets/imgs/partner3.png",
      title: "Dorixonalar",
      desc: "Lorem ipsum dolor sit amet consectetur. Magna consectetur pulvinar acsuspendisse ornare id at suspendisse. Tempus nibh vitae consectetur idvel. Mauris egestas posuere quam lacus turpis metus sem non commodo. Accumsan habitant eget quisque gravida sed eget morbi. Eleifend aelementum lacinia justo duis molestie elementum. Massa pretium nullagravida odio vulputate fringilla nam ligula leo",
    },
  ]);



  const [videoTitle, setVideoTitle] = useState("Biz sizga yordam beramiz!");

  const [videoLink, setVideoLink] = useState(
    "https://www.youtube.com/embed/lE_AIWLo7L0"
  );
  return (
    <div className="partner_page">
      <div className="container partner_hero">
        <div>
          <h1>
            Qanday qilib <br /> Al-ximik hamkori <br /> bo’lish mumkin?
          </h1>
          <button className="btn partner_btn">Ariza qoldirish</button>
        </div>
        <img src="./assets/imgs/partnerimg.png" alt="" />
      </div>
      <div className="container">
        <div className="title">Hamkorlik turlari</div>
        <NewsList newsList={newsList}>
          <div className="partner_btns">
            <button className="btn">Ariza qoldirish</button>
            <button className="btn">
              <BsTelephone /> Qo'ng'iroq qilish
            </button>
          </div>
        </NewsList>
      </div>
      <div className="container videoGuide">
        <VideoGuide videoTitle={videoTitle} videoLink={videoLink} />
      </div>
      <div className="container">
        <div className="title">Ariza qoldirish</div>
        <div className="partner_form">
          <div>
            <h3>
              Operator sizga aloqaga chiqishi uchun ma’lumotlarni to’liq
              kiritishni unutmang!
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Luctus vulputate in purus
              et dictum. Justo ullamcorper laoreet suspendisse nisl vitae
              praesent interdum. Dui semper velit in dolor volutpat. Id in amet
              aenean vestibulum aenean scelerisque. Scelerisque iaculis pretium
              amet netus nulla metus. Magna imperdiet feugiat pretium aliquam
              velit tincidunt nulla nisl. Semper pellentesque urna ut sit
              porttitor purus. Fusce viverra ornare ullamcorper ornare in
              aliquam sed quis diam. Mauris risus scelerisque pretium arcu
              vulputate amet.
            </p>
          </div>
          <div>
            <form action="">
              <label htmlFor="">
                Hamkorlik turi <br />
                <select name="" id="">
                  <option value="">Fermer xo’jaliklari</option>
                  <option value="">Xususiy shifoxonalar</option>
                  <option value="">Dorixonalar</option>
                </select>
              </label>
              <label htmlFor="">
                Ism va familiya <br />
                <input type="text" placeholder="ismingizni kiriting..." />
              </label>
              <label htmlFor="">
                Telefon raqam <br />
                <input type="text" placeholder="Telefon raqamingizni kiriting..." />
              </label>
              <button className="btn">Yuborish</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partner