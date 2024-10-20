import React from 'react'

const Card = ({img, name, price, quantity}) => {
    
   

  return (
    <div style={{backgroundColor:'white', boxShadow:'2px 2px 2px black ', border:'1px solid red', padding:'10px', width:'150px'}}>
      <div>
        <img src={img} alt=""  style={{width:'100px'}}/>
      </div>

      <p>{name}</p>
      <p>#{price}</p>
      <p>{quantity} items left</p>
    </div>
  );
}

export default Card