import React from 'react';
import ReactDOM from 'react-dom';
import Sdata from './Sdata';

function Card(props) {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
        width: '300px',
        overflow: 'hidden',
        textAlign: 'center',
        margin: '20px',
        transition: 'transform 0.3s ease, boxShadow 0.3s ease',
      }}
    >
      <img
        src={props.imgsrc}
        alt={props.sname}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
        }}
      />
      <div style={{ padding: '20px' }}>
        <h2
          style={{
            fontSize: '1.8em',
            margin: '15px 0',
            color: '#34495e',
          }}
        >
          {props.sname}
        </h2>
        <p>{props.title}</p>
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            backgroundColor: '#e74c3c',
            color: 'white',
            padding: '10px 25px',
            borderRadius: '50px',
            fontSize: '1em',
            fontWeight: '500',
            transition: 'background-color 0.3s ease',
          }}
        >
          Watch Now
        </a>
      </div>
    </div>
  );
}

ReactDOM.render(
  <>
    <h1
      style={{
        textAlign: 'center',
        color: '#2c3e50',
        fontSize: '2.5em',
        fontWeight: '600',
        margin: '30px 0',
      }}
    >
      List of Top Netflix Series in 2024
    </h1>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        padding: '20px',
      }}
    >
      
     
     {Sdata.map( (val)=>{
      return(
        <Card
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
  />

      );
     })}
    </div>
  </>,
  document.getElementById('root')
);


function Myname(a,b){
  return a+b

}

const myname=(a,b)=> a+b;

