import React, { useState } from "react";
import Card from "./Card";
import Button from "./Button";

const Forms = () => {
 
 

const clickk =(name)=>{
  alert(`I am working, ${name}`)
}
  


  return (
    
     
      
<>
<Button click={clickk}/>
</>
  );
};

export default Forms;
