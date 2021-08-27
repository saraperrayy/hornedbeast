import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Dropdown} from 'react-bootstrap';
import HornedBeast from './HornedBeast';

function Main({animalData}) {
  let filterArray = [1, 2, 3, 100];
  const [selectedHorns, setSelectedHorns] = useState(0);
  return (
    <>
      <Container>
        <Row>
              
          <Col xs={12}>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="Filter Dropdown">
                Filter Beast by Horn Amount
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {filterArray.map(number => (
                  <Dropdown.Item
                    onSelect={(eventKey)=> setSelectedHorns(parseInt(eventKey))}
                    eventKey={number}>
                    {number} Horn(s)
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          {animalData.filter(data=> data.horns === selectedHorns
          ).map((filteredData, key) => {
            return (
              <Col xs={12} md={6} lg={4}>
                <div key={key}>
                  <HornedBeast
                    key={key}
                    image_url={filteredData.image_url}
                    title={filteredData.title}
                    description={filteredData.description}
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