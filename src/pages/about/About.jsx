import { useState } from "react";
import "./About.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function About() {
  const [counterOn, setCounterOn] = useState(false);
  const [team, setTeam] = useState([
    {
      name: "Zoirjon Ahmedov",
      job: "CEO",
      desc: '"RIZON" va "ALKIMYOGAR PHARM" kompaniyalari asoschisi va rahbari. Tadbirkor',
      imgs: [
        "./assets/imgs/ceoimg1.png",
        "./assets/imgs/ceoimg2.png",
        "./assets/imgs/ceoimg3.png",
      ],
    },
    {
      name: "Matnazar Izbosarov",
      job: "Bo'lim rahbari",
      desc: 'Texnolog konsultant. Oliy toifali farmatsevt - provizor. Respublika "Dori Darmon" OAJ innovatsion rivojlantirish boʻlimi raxbari.',
      imgs: [
        "./assets/imgs/ceoimg2.png",
        "./assets/imgs/ceoimg3.png",
        "./assets/imgs/ceoimg1.png",
      ],
    },
    {
      name: "Mavludaxon Muxitdinova",
      job: "Shifokor",
      desc: "Oliy toifali shifokor. Med konsultant",
      imgs: [
        "./assets/imgs/ceoimg3.png",
        "./assets/imgs/ceoimg1.png",
        "./assets/imgs/ceoimg2.png",
      ],
    },
  ]);

  const [index, setIndex] =useState(0)


  const next = ()=>{
    if (index == team.length - 1 ) {
      setIndex(0)
    } else{
      setIndex((index) => index + 1);
    }
    
  }

   const prev = () => {
    if (index == 0) {
      setIndex(team.length - 1);
    }else{

      setIndex((index) => index - 1);
    }
   };
 
  return (
    <div className="about_page">
      <div className="container about_hero">
        <img src="./assets/logo/aboutlogo.png" alt="" />
        <h1>Biz insonlarga salomatlik ulashamiz!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Rutrum sit quisque varius
          interdum dictumst id. Eget mi sed tempus mattis lectus orci. Amet sit
          accumsan nec suspendisse neque netus neque adipiscing. Porttitor
          tincidunt quisque a ornare donec.Lorem ipsum dolor sit amet
          consectetur. Rutrum sit quisque varius interdum dictumst id. Eget mi
          sed tempus mattis lectus orci
        </p>
      </div>
      <div className="container">
        <hr />
      </div>
      <div className="container purpose">
        <h2>
          <span>Alkimyogar</span> <br /> mijozlar foydasini o'ylaydi
        </h2>
        <div className="purpose_info">
          lkimyogar Farm Kompaniyasi Kanada nanotexnologiyalari asosida yuqori
          sifatli kolloid minerallar hamda dorivor o’simliklardan tayyorlangan
          shifobaxsh ekstraktlar ishlab chiqarish bilan shug’ullanadi.
          Ekstraktlar gidrolat usulida bo’lib, MDX davlatlari ichida ularni
          iste’mol uchun chiqargan ilk kompaniya hisoblanadi! Korxona 2019-yilda
          tashkil topgan bo’lib, mana shu qisqa vaqt mobaynida 20 dan ortiq
          mahsulot assortimenti hamdan 5000 dan ortiq o’zining mamnun
          mijozlariga ega. Kompaniya sifatli, tabiiy hamda hamyonbob mahsulotlar
          ishlab chiqarish asosida millatning salomatligiga hissa qo’shishni o’z
          oldiga maqsad qilib qo’ygan.
        </div>
      </div>
      <div className="container">
        <hr />
      </div>
      <ScrollTrigger
        onEnter={() => {
          setCounterOn(true);
        }}
        onExit={() => {
          setCounterOn(false);
        }}
      >
        <div className="container count">
          <div>
            <h3>
              Xorijiy va mahalliy ilmiy- tadqiqot markazlari bilan hamkorlik!
            </h3>
            <h1>
              {counterOn && (
                <CountUp start={0} end={7} duration={2} delay={0} />
              )}

              <span>+</span>
            </h1>
          </div>
          <div>
            <h3>Doimiy mamnun iste'molchilar!</h3>
            <h1>
              {counterOn && (
                <CountUp start={0} end={4000} duration={2} delay={0} />
              )}

              <span>+</span>
            </h1>
          </div>
          <div>
            <h3>Shifobaxsh mahsulotlar assortimenti</h3>
            <h1>
              {counterOn && (
                <CountUp start={0} end={22} duration={2} delay={0} />
              )}

              <span>+</span>
            </h1>
          </div>
        </div>
      </ScrollTrigger>

      <div className="container">
        <hr />
      </div>
      <div className="container about_partners">
        <h1>Hamkorlar</h1>
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
          <div className="partner">
            <img src="./assets/imgs/hamkor5.png" alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <hr />
      </div>
      <div className="container connect">
        <h1>Kanada bilan aloqalarimiz</h1>
        <p>
          lkimyogar Farm Kompaniyasi Kanada nanotexnologiyalari asosida yuqori
          sifatli kolloid minerallar hamda dorivor o’simliklardan tayyorlangan
          shifobaxsh ekstraktlar ishlab chiqarish bilan shug’ullanadi.
          Ekstraktlar gidrolat usulida bo’lib, MDX davlatlari ichida ularni
          iste’mol uchun chiqargan ilk kompaniya hisoblanadi! Korxona 2019-yilda
          tashkil topgan bo’lib, mana shu qisqa vaqt mobaynida 20 dan ortiq
          mahsulot assortimenti hamdan 5000 dan ortiq o’zining mamnun
          mijozlariga ega. Kompaniya sifatli, tabiiy hamda hamyonbob mahsulotlar
          ishlab chiqarish asosida millatning salomatligiga hissa qo’shishni o’z
          oldiga maqsad qilib qo’ygan.
        </p>
        <div className="connect_img">
          <img src="./assets/imgs/flag.png" alt="" />
        </div>
      </div>
      <div className="container">
        <hr />
      </div>
      <div className="container team_container">
        <h1>Jamoamiz bilan tanishing!</h1>
        <div className="team">
          {team && (
            <div className="member_info">
              <h2>
                {team[index].name} <br /> <span>{team[index].job}</span>
              </h2>
              <p>{team[index].desc}</p>
              <div className="btns">
                <div className="left">
                  <img
                    onClick={prev}
                    src="./assets/icons/left.svg"
                    alt=""
                  />
                </div>
                <div className="right">
                  <img
                    onClick={next}
                    src="./assets/icons/right.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          )}

          <div className="member_imgs">
            {team[index].imgs.map((item) => {
              return <img src={item} alt="" />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
