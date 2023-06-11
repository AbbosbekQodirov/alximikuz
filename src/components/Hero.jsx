import React from 'react'

function Hero({ heroElements }) {
  console.log(heroElements);
  return (
    <div className="container hero_containner">
      <div className="hero_info">
        <h2>{heroElements[0].title}</h2>
        <p>{heroElements[0].desc}</p>
        <button className="btn">Batafsil</button>
      </div>
      <div className="hero_img">
        <img src={heroElements[0].img} alt="" />
      </div>
    </div>
  );
}

export default Hero