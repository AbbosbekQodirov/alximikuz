import React from 'react'

function ProductList({products}) {
  return (
    <div className="cards_items">
      {products.map((item)=>{
        return (
          <div className="item">
            <div></div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.price} 000 uzs</p>
            </div>
          </div>
        );
      })}
      
      
    </div>
  );
}

export default ProductList