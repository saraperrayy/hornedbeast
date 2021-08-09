import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { BsFillHeartFill} from 'react-icons/bs';
import { Container, Row, Col } from 'react-bootstrap';
import SelectedBeast from './SelectedBeast';

const { useState } = React;

function HornedBeast({image_url, title, description}) {
  const handleClick = () => {
    setCounter(counter + 1);
    setModalOpen(!modalOpen);
  };

  const [counter, setCounter] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Container>
        <Row>
          <Col xs={12}>
            <Button style={{color: "black"}} className="bg-transparent border-0 shadow-none">
              <Image 
                src={image_url}
                alt={title}
                onClick={handleClick}
                className="img-fluid"
              />
            </Button>
          </Col>
          <Col xs={12}>
            <Col><BsFillHeartFill /></Col>
            <Col>{counter}</Col>
          </Col>
        </Row>
        <Row>
          <Col xs={12}><h2>{title}</h2></Col>
          <Col xs={12}><p>{description}</p></Col>
          <Col>
            <SelectedBeast
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              image_url={image_url}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HornedBeast;