import './ContactUs.css';
import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import DevImage from '../../assets/images/webDev.png'

function ContactUS() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8081/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="contact-hero text-white d-flex align-items-center">
        <div className="custom-container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="fw-bold text-2xl">Contact Us</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent p-0">
                  <li className="breadcrumb-item"><a href="/" className="text-dark">Home</a></li>
                  <li className="breadcrumb-item active text-orange" aria-current="page">Contact Us</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="contact-info-section">
        <div className="contact-container">
          <div className="info-card">
            <div className="info-item">
              <FaMapMarkerAlt className="icon orange" />
              <p>Khatauli, Uttar Pradesh</p>
            </div>
            <div className="vertical-divider"></div>
            <div className="info-item">
              <FaEnvelope className="icon blue" />
              <p><a href="mailto:ht0257445@gmail.com">ht0257445@gmail.com</a></p>
            </div>
            <div className="vertical-divider"></div>
            <div className="info-item">
              <FaPhoneAlt className="icon orange" />
              <p>+91-9310891024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section">
        <Container fluid>
          <Row className="align-items-center">
            {/* Left Image */}
            <Col md={6} className="contact-image-side d-none d-md-block">
              <div className="overlay-text">
                <h2>Leave a <br /> Message</h2>
              </div>
              <img src="/assets/contact-image.png" alt="contact" className="img-fluid contact-img" />
            </Col>

            {/* Right Form */}
            <Col md={6} className="contact-form-side p-5">
              <h2 className="mb-4">Send A Message</h2>
              {status === 'success' && <Alert variant="success">Thank you!</Alert>}
              {status === 'error' && <Alert variant="danger">Oops! Something went wrong.</Alert>}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Your Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Your Phone No."
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Write Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit">Send Message</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Free Consultation Section */}
      <section className="free-consultation-section d-flex align-items-center text-white">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={10}>
              <p className="quote-text mb-2">Get A Quote</p>
              <h1 className="consult-heading mb-4">Free Consultations</h1>
              <Button className="btn-orange" size="lg">Request A Quote</Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="container py-5" style={{ backgroundColor: "#f3f7fc" }}>
              <div className="row justify-content-center align-items-center text-center g-4">
                {[...Array(6)].map((_, i) => (
                  <div className="col-4 col-sm-2" key={i}>
                    <img
                      src={DevImage}
                      alt={`Tech ${i}`}
                      className="img-fluid rounded-circle"
                      style={{ width: "120px", height: "120px", objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            </section>
    </div>
  );
}

export default ContactUS;
