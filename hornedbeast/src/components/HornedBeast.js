import React from 'react';
import { BsFillHeartFill } from 'react-icons/bs'
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
const { useState } = React;


function HornedBeast({image_url, title, description}) {
  const handleClick = () => {
    setCounter(counter + 1);
  };

  const [counter, setCounter] = useState(0);


    return (
      <Container>
        <Row>
          <Col>
            <Button className="bg-transparent border-0">
              <Image
              src={image_url}
              onClick={handleClick}
              className="img-fluid"/>
            </Button>
          </Col>

          <Col xs={12}>
            <Col>
            <BsFillHeartFill/>
            </Col>

            <Col>
            {counter}
            </Col>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h2>
              {title}
            </h2>
          </Col>
          <Col>
            <p>
              {description}
            </p>
          </Col>
        </Row>
      </Container>
    // <>
    //   <h2>{title}</h2>
    //   <p>{description}</p>
    //   <button>
    //     <img 
    //     height="500px" 
    //     src={image_url} 
    //     alt="Parrot" 
    //     onClick={handleClick}
    //     title="Parrot">
    //     </img>
    //     <BsFillHeartFill/>
    //     {counter}
    //   </button>
    //   </>
    )
}
export default HornedBeast;
