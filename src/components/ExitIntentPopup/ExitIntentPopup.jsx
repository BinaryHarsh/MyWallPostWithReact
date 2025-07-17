import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function ExitIntentPopup () {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleMouseOut = e => {
      
      if (e.clientY < 10) {
        setShow(true);
      }
    };
    document.addEventListener('mouseout', handleMouseOut);
    return () => {
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const handleClose = () => setShow(false);

  const handleSubmit = event => {
    event.preventDefault();
   
    console.log('Form submitted!');
    setShow(false);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton style={{ background: '#ffd54f' }}>
        <Modal.Title>Exclusive Offer Ke Liye Sign Up Karein</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Control type="text" placeholder="Your Name" required />
          </Form.Group>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Control type="email" placeholder="Email Address" required />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ExitIntentPopup;