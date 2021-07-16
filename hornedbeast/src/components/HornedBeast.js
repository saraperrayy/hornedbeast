import React from 'react';
import Bird from '../img/parrot.jpeg';

function HornedBeast(props) {
    return (
    <>
      <h2>{props.title}</h2>
      <img height="500px" src={props.imgurl} alt="Parrot" title="Parrot"/>
      <p>{props.desc}</p>
      </>
    )
}
export default HornedBeast;
