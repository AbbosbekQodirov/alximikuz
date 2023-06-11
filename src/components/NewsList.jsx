import React from "react";

function NewsList({ newsList, children }) {
  return (
    <>
      {newsList && newsList.map((item)=>{
        return (
          <div className="news">
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Magna consectetur pulvinar
              ac suspendisse ornare id at suspendisse. Tempus nibh vitae
              consectetur id vel. Mauris egestas posuere quam lacus turpis metus
              sem non commodo. Accumsan habitant eget quisque gravida sed eget
              morbi. Eleifend a elementum lacinia justo duis molestie elementum.
              Massa pretium nulla gravida odio vulputate fringilla nam ligula
              leo.
            </p>
            {children}
          </div>
        );
      })}
    </>
  );
}

export default NewsList;
