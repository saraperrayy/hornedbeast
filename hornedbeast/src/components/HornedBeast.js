import React from 'react';
const { useState } = React;

function HornedBeast({image_url, title, description}) {
  const handleClick = () => {
    setCounter(counter + 1);
  };

  const [counter, setCounter] = useState(0);


    return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <button>
        <img 
        height="500px" 
        src={image_url} 
        alt="Parrot" 
        onClick={handleClick}
        title="Parrot">
        </img>
      
        {counter}
      </button>
      </>
    )
}
export default HornedBeast;
