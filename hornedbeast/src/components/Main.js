import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import HornedBeast from './HornedBeast';
// import SelectedBeast from './SelectedBeast';

function Main({animalData}) {
  return (
    <>
      <Container>
        <Row>
          {animalData.map((data, key) => {
            return (
              <Col xs={12} md={6} lg={4}>
                <div key={key}>
                  <HornedBeast
                    key={key}
                    image_url={data.image_url}
                    title={data.title}
                    description={data.description}
                  />
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Main;