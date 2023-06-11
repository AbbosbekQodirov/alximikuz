import React, { useState } from "react";
import Hero from "../../components/Hero";
import ProductList from "../../components/ProductList";
import "./Products.css"
import VideoGuide from "../../components/VideoGuide";

function Products() {
  const [heroElements, setHeroElements] = useState([
    {
      title: "Imunitetni oshiruvchi tabiiy sirop.",
      desc: "Lorem ipsum dolor sit amet consectetur. Sit facilisi ac habitant lacinia amet enim morbi risus.",
      img: "./assets/imgs/heroimg2.png",
    },
  ]);

  const [videoTitle, setVideoTitle] = useState(
    "Sayt yaratuvchisi haqida ma'lumot"
  );

  const [videoLink, setVideoLink] = useState(
    "https://www.youtube.com/embed/lE_AIWLo7L0"
  );

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
   }
 ]);

  return (
    <div className="products_page">
      <Hero heroElements={heroElements} />
      <div className="container">
        <div className="products_filter">
          <li className="active">Imunitet</li>
          <li>Erkaklar</li>
          <li>Ayollar</li>
          <li>Bolalar</li>
          <li>Keksalar</li>
        </div>
        <ProductList products={products}/>
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
      <div className="container videoGuide">
        <VideoGuide videoTitle={videoTitle} videoLink={videoLink} />
      </div>
    </div>
  );
}

export default Products;
