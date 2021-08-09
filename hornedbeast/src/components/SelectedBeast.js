import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

function SelectedBeast({modalOpen, setModalOpen, image_url}) {
  return (
    <>
      <Button onClick={() => setModalOpen(!modalOpen)}>
          MODAL BUTTON
      </Button>
      <Modal show={modalOpen} onHide={() => setModalOpen(!modalOpen)}>
        <Modal.Body>
          <Image src={image_url} className="img-fluid"/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setModalOpen(!modalOpen)}>
              Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default SelectedBeast;