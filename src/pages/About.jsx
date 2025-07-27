// // src/components/About.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css';

// Import images (make sure to place them in your src/assets folder)
// If using create-react-app, you can import them directly
import missionImage from '../assets/images/mission.jpg';
import visionImage from '../assets/images/vision.jpg';
import valuesImage from '../assets/images/core-value.jpg';
import { div } from 'framer-motion/client';

const About = () => {
  return (
    <Container className="about-container py-5">
      <Row className="mb-4">
        <Col className="text-center">
          <h1 className="display-4 text-primary mb-3">About Our Company</h1>
          <div className="divider mb-4 mx-auto"></div>
          <p className="lead text-muted">
            We are a leading IT solutions provider dedicated to helping businesses thrive in the digital world.
          </p>
        </Col>
      </Row>
      
      {/* Mission Section */}
      <Row className="mb-5 align-items-center">
        <Col md={6} className="mb-4 mb-md-0">
          <div className="image-frame p-3">
            <img 
              src={missionImage} 
              alt="Our Mission" 
              className="img-fluid rounded"
              style={{ maxHeight: '300px', objectFit: 'cover', width: '100%' }}
            />
          </div>
        </Col>
        <Col md={6}>
          <Card className="border-0 shadow-lg h-100">
            <Card.Body className="p-4">
              <Card.Title as="h2" className="text-primary mb-3">
                <span className="icon-circle me-2">🚀</span> Our Mission
              </Card.Title>
              <Card.Text className="text-dark">
                <p>
                  Our commitment to our valued clients throughout the world is reflected in
                  our aim to deliver IT solutions that are customer-focused, results-oriented,
                  cost-effective, innovative, and functional.
                </p>
                <p className="mt-3">
                  When working with a customer, we prioritize meeting their specific
                  demands. With the intent of satisfying the needs of the customers.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Vision Section */}
      <Row className="mb-5 align-items-center">
        <Col md={6} className="order-md-2 mb-4 mb-md-0">
          <div className="image-frame p-3">
            <img 
              src={visionImage} 
              alt="Our Vision" 
              className="img-fluid rounded"
              style={{ maxHeight: '300px', objectFit: 'cover', width: '100%' }}
            />
          </div>
        </Col>
        <Col md={6} className="order-md-1">
          <Card className="border-0 shadow-lg h-100">
            <Card.Body className="p-4">
              <Card.Title as="h2" className="text-primary mb-3">
                <span className="icon-circle me-2">👁️</span> Our Vision
              </Card.Title>
              <Card.Text className="text-dark">
                <p>
                  We Perfect Online strives to be a pioneer and industry innovator in order to
                  present your business to a global audience via the internet.
                </p>
                <p className="mt-3">
                  With the use of digitization, we plan to offer the best solutions to our
                  respected clients and safeguard their business from any unforeseen events
                  that may arise following Covid-19.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Value Section */}
      <Row>
        <Col lg={8} className="mx-auto">
          <Card className="border-0 shadow-lg">
            <Card.Body className="p-5">
              <Card.Title as="h2" className="text-primary mb-4 text-center">
                <span className="icon-circle me-2">💎</span> Our Values
              </Card.Title>
              <Row>
                <Col md={6} className="mb-4 mb-md-0">
                  <div className="image-frame p-3">
                    <img 
                      src={valuesImage} 
                      alt="Our Values" 
                      className="img-fluid rounded"
                      style={{ maxHeight: '300px', objectFit: 'cover', width: '100%' }}
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <Card.Text className="text-dark">
                    <p>
                      We are connected and we are confident in our technology and management abilities. 
                      We're here for people all over the world, all the time, 24 hours a day, seven days a week. 
                      Customer satisfaction is more important to us than financial gain. 
                      Easily handled a wide variety of clients and projects. 
                      We are always supported by the most latest tech available in the world.
                    </p>
                    <p className="mt-3 fw-bold text-primary">
                      KG Digital is known for digital marketing services and how we can help you with is all about our brand's value.
                    </p>
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Stats Section */}
      <Row className="mt-5 pt-4">
        <Col md={3} className="text-center mb-4">
          <div className="stat-circle mx-auto mb-3">
            <span className="stat-number">15+</span>
          </div>
          <h4 className="text-primary">Years Experience</h4>
        </Col>
        <Col md={3} className="text-center mb-4">
          <div className="stat-circle mx-auto mb-3">
            <span className="stat-number">500+</span>
          </div>
          <h4 className="text-primary">Clients Worldwide</h4>
        </Col>
        <Col md={3} className="text-center mb-4">
          <div className="stat-circle mx-auto mb-3">
            <span className="stat-number">120+</span>
          </div>
          <h4 className="text-primary">Team Members</h4>
        </Col>
        <Col md={3} className="text-center mb-4">
          <div className="stat-circle mx-auto mb-3">
            <span className="stat-number">24/7</span>
          </div>
          <h4 className="text-primary">Support</h4>
        </Col>
      </Row>
    </Container>
 
  );
};

export default About;