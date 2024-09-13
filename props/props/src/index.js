import React from  'react';
import ReactDOM from'react-dom';
import img from './images/Dark_Souls_Cover_Art.jpg';
import ironman from'./images/ironman.jpg'
import steve from './images/steve.jpg'


function Card(props){
  console.log(props);
  
 return(
  <>
  <div className='cards'>
    <div className='card'>
      <img 
      src={props.imgsrc} 
      alt='mypic' 
      className='card__img'
      />

      <div className='card__info'>
        <span className='card__category'>{props.title} </span>
        <h3 className='card__title'>{props.sname}</h3>
        <a href={props.link} target="_blank">
          <button> Watch Now</button>
        </a>

      </div>

    </div>
  </div>
  </>
 );
}

ReactDOM.render(<>
<Card imgsrc={img}
title="A Netflix Original Series"
sname="ironman"
link="https://store.steampowered.com/app/374320/DARK_SOULS_III/"
/>

<Card imgsrc={ironman}
title="This Is The Ironman"
sname="ironman"
link="https://www.ironman.com/im703-races"
/>
<Card imgsrc={steve}
title="This Is The Steve Roger"
sname="Steve Roger"
link="https://marvelcinematicuniverse.fandom.com/wiki/Steve_Rogers"
/>

</>,
  
  document.getElementById('root')
);
