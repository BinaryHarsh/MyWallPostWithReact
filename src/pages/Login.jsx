import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, FormCheck } from 'react-bootstrap';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    rememberMe: false,
    showPassword: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const togglePasswordVisibility = () => {
    setCredentials(prev => ({
      ...prev,
      showPassword: !prev.showPassword
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!credentials.username.trim() || !credentials.password) {
      alert('Please fill in all fields');
      return;
    }

    // In a real app, you would make an API call here
    alert(`Login successful!\nUsername: ${credentials.username}\nRemember me: ${credentials.rememberMe ? 'Yes' : 'No'}`);
    
    // Reset form
    setCredentials({
      username: '',
      password: '',
      rememberMe: false,
      showPassword: false
    });
  };

  return (
    <div className="min-vh-100 d-flex align-items-center" style={{ 
      backgroundColor: '#f8f9fa'
    }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} className="bg-white rounded-4 shadow-lg overflow-hidden">
            <Row>
              {/* Left Column - Image */}
              <Col md={6} className="p-0 d-none d-md-block">
                <div 
                  className="h-100" 
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '500px'
                  }}
                />
              </Col>
              
              {/* Right Column - Login Form */}
              <Col md={6} className="p-4 p-md-5 d-flex align-items-center">
                <div className="w-100">
                  <div className="text-center mb-5">
                    <h2 className="fw-bold mb-3">Sign In</h2>
                    <p className="text-muted">Access your account to continue</p>
                  </div>
                  
                  <Form onSubmit={handleSubmit}>
                    {/* Username Field */}
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold text-uppercase small">USERNAME</Form.Label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <FaUser className="text-muted" />
                        </span>
                        <Form.Control
                          type="text"
                          name="username"
                          placeholder="Username"
                          value={credentials.username}
                          onChange={handleChange}
                          className="py-3 border-start-0"
                        />
                      </div>
                    </Form.Group>

                    {/* Password Field */}
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold text-uppercase small">PASSWORD</Form.Label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <FaLock className="text-muted" />
                        </span>
                        <Form.Control
                          type={credentials.showPassword ? "text" : "password"}
                          name="password"
                          placeholder="Password"
                          value={credentials.password}
                          onChange={handleChange}
                          className="py-3 border-start-0"
                        />
                        <button 
                          type="button" 
                          className="input-group-text bg-light border-start-0"
                          onClick={togglePasswordVisibility}
                        >
                          {credentials.showPassword ? (
                            <FaEyeSlash className="text-muted" />
                          ) : (
                            <FaEye className="text-muted" />
                          )}
                        </button>
                      </div>
                    </Form.Group>

                    {/* Sign In Button */}
                    <Button 
                      variant="primary" 
                      type="submit" 
                      className="w-100 py-3 fw-bold mb-4"
                    >
                      Sign In
                    </Button>

                    {/* Remember Me & Forgot Password */}
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <FormCheck>
                        <FormCheck.Input
                          type="checkbox"
                          name="rememberMe"
                          checked={credentials.rememberMe}
                          onChange={handleChange}
                        />
                        <FormCheck.Label className="text-muted">Remember Me</FormCheck.Label>
                      </FormCheck>
                      
                      <a href="#forgot-password" className="text-decoration-none text-primary">
                        Forgot Password?
                      </a>
                    </div>

                    {/* Sign Up Link */}
                    <div className="text-center mt-4 pt-3 border-top">
                      <p className="text-muted mb-0">
                        Not a member?{' '}
                        <Link to="/signup" className="text-decoration-none fw-bold text-primary">
                          Sign Up
                        </Link>
                      </p>
                    </div>
                  </Form>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;