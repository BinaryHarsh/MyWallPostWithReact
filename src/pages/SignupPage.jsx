import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, FormCheck } from 'react-bootstrap';
import { FaUser, FaLock, FaEnvelope, FaPhone, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupPage = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
    showPassword: false,
    showConfirmPassword: false
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const togglePasswordVisibility = (field) => {
    setCredentials(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!credentials.username.trim() ||
        !credentials.email ||
        !credentials.phone ||
        !credentials.password ||
        !credentials.confirmPassword) {
      toast.error('Please fill in all fields');
      return;
    }

    if (credentials.password !== credentials.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:8081/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: credentials.username,
          email: credentials.email,
          phone: credentials.phone,
          password: credentials.password,
          roles: ['STUDENT']
        })
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message || 'Signup failed');
        return;
      }

      if (result.token) {
        localStorage.setItem('token', result.token);
        toast.success('Signup successful!');
        setTimeout(() => navigate('/dashboard'), 2000);
      } else {
        toast.success(result.message || 'Signup completed, please login.');
        setTimeout(() => navigate('/'), 2000);
      }

      // Reset form
      setCredentials({
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        rememberMe: false,
        showPassword: false,
        showConfirmPassword: false
      });

    } catch (error) {
      console.error('Signup error:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center" style={{ backgroundColor: '#f8f9fa' }}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} className="bg-white rounded-4 shadow-lg overflow-hidden">
            <Row>
              <Col md={6} className="p-0 d-none d-md-block">
                <div
                  className="h-100"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '600px'
                  }}
                />
              </Col>

              <Col md={6} className="p-4 p-md-5 d-flex align-items-center">
                <div className="w-100">
                  <div className="text-center mb-5">
                    <h1 className="fw-bold text-primary">Create Account</h1>
                    <p className="text-muted">Fill in your details to get started</p>
                  </div>

                  <Form onSubmit={handleSubmit}>
                    {/* Username */}
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold text-uppercase small">USERNAME</Form.Label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <FaUser className="text-muted" />
                        </span>
                        <Form.Control
                          type="text"
                          name="username"
                          placeholder="Choose a username"
                          value={credentials.username}
                          onChange={handleChange}
                          className="py-3 border-start-0"
                          minLength="3"
                          maxLength="20"
                          required
                        />
                      </div>
                    </Form.Group>

                    {/* Email */}
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold text-uppercase small">EMAIL</Form.Label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <FaEnvelope className="text-muted" />
                        </span>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          value={credentials.email}
                          onChange={handleChange}
                          className="py-3 border-start-0"
                          required
                        />
                      </div>
                    </Form.Group>

                    {/* Phone */}
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold text-uppercase small">PHONE NUMBER</Form.Label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <FaPhone className="text-muted" />
                        </span>
                        <Form.Control
                          type="tel"
                          name="phone"
                          placeholder="Enter your phone number"
                          value={credentials.phone}
                          onChange={handleChange}
                          className="py-3 border-start-0"
                          pattern="^[+]?[0-9]{10,15}$"
                          title="Phone number should be valid (10-15 digits)"
                          required
                        />
                      </div>
                    </Form.Group>

                    {/* Password */}
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold text-uppercase small">PASSWORD</Form.Label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <FaLock className="text-muted" />
                        </span>
                        <Form.Control
                          type={credentials.showPassword ? "text" : "password"}
                          name="password"
                          placeholder="Create a password (6-40 characters)"
                          value={credentials.password}
                          onChange={handleChange}
                          className="py-3 border-start-0"
                          minLength="6"
                          maxLength="40"
                          required
                        />
                        <button
                          type="button"
                          className="input-group-text bg-light border-start-0"
                          onClick={() => togglePasswordVisibility('showPassword')}
                        >
                          {credentials.showPassword ? <FaEyeSlash className="text-muted" /> : <FaEye className="text-muted" />}
                        </button>
                      </div>
                    </Form.Group>

                    {/* Confirm Password */}
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold text-uppercase small">CONFIRM PASSWORD</Form.Label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <FaLock className="text-muted" />
                        </span>
                        <Form.Control
                          type={credentials.showConfirmPassword ? "text" : "password"}
                          name="confirmPassword"
                          placeholder="Confirm your password"
                          value={credentials.confirmPassword}
                          onChange={handleChange}
                          className="py-3 border-start-0"
                          minLength="6"
                          maxLength="40"
                          required
                        />
                        <button
                          type="button"
                          className="input-group-text bg-light border-start-0"
                          onClick={() => togglePasswordVisibility('showConfirmPassword')}
                        >
                          {credentials.showConfirmPassword ? <FaEyeSlash className="text-muted" /> : <FaEye className="text-muted" />}
                        </button>
                      </div>
                    </Form.Group>

                    {/* Remember Me */}
                    <div className="mb-4">
                      <FormCheck>
                        <FormCheck.Input
                          type="checkbox"
                          name="rememberMe"
                          checked={credentials.rememberMe}
                          onChange={handleChange}
                          required
                        />
                        <FormCheck.Label className="text-muted">
                          I agree to the Terms and Conditions
                        </FormCheck.Label>
                      </FormCheck>
                    </div>

                    <Button variant="primary" type="submit" className="w-100 py-3 fw-bold mb-4">
                      Sign Up
                    </Button>

                    <div className="text-center mt-4 pt-3 border-top">
                      <p className="text-muted mb-0">
                        Already have an account?{' '}
                        <Link to="/dashboard" className="text-decoration-none fw-bold text-primary">
                          Sign In
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

export default SignupPage;