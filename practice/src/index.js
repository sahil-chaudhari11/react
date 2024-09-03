import React from'react';
import ReactDOM from 'react-dom';
import"./index.css"

const name="sahil";
const img1="https://picsum.photos/200/300";
const img2="https://picsum.photos/200/300";
const img3="https://picsum.photos/200/300"
const link="https://www.samsung.com/in/smartphones/galaxy-z-fold6/buy/?srsltid=AfmBOoptlk7EV8eHFGzRE2vyxdacWFVrztu0QilEmmRcuarc4Cd9jqNT"




ReactDOM.render(
  <>
  <h1 className='sahil'>
    my name is {name}


  </h1>,
  <div className='pankaj'>
  <img src={img1}/>;
  <a href={link} target='_blank'>
  <img src={img2}/>;
  </a>
  <img src={img3}/>;
  </div>

 


  {/* name:<input type="text" alt='this is haunted place'/> */}


  </>,
  document.getElementById('root')
  
);