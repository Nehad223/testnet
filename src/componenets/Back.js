import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Back = () => {
    const [text,setText]=useState("");
    const [data,setData]=useState("");


    const add = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post(`https://nehadshretahh.pythonanywhere.com/add/`,{x:text});
        console.log(response.data);
      setData(response.data);
      }
      catch(error){
        console.log(error);
      }
      }
  return (
    <div>
      <input type='text' onChange={(e)=>setText(e.target.value)} />
      <button onClick={()=> add}>add</button>
      <h1>{data}</h1>
      
    </div>
  )
}

export default Back
