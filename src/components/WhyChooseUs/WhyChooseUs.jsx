import React from 'react';
import { FaStar, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Free',
    price: '$0',
    frequency: '/ month',
    iconColor: 'text-success',
    features: [
      { label: 'Basic Features', included: true },
      { label: '5 GB Storage', included: true },
      { label: 'Premium Support', included: false },
    ],
    btnClass: 'btn btn-success',
  },
  {
    name: 'Gold',
    price: '$29',
    frequency: '/ month',
    iconColor: 'text-warning',
    features: [
      { label: 'Advanced Features', included: true },
      { label: '50 GB Storage', included: true },
      { label: 'Priority Support', included: true },
    ],
    btnClass: 'btn btn-warning text-dark',
  },
  {
    name: 'Platinum',
    price: '$99',
    frequency: '/ month',
    iconColor: 'text-secondary',
    features: [
      { label: 'All Features', included: true },
      { label: '200 GB Storage', included: true },
      { label: '24/7 Support', included: true },
    ],
    btnClass: 'btn btn-secondary text-white',
  },
];

const WhyChooseUs = () => {
  return (
    <>
      {/* Original HTML section */}
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Why choose <strong className="text-primary">Us</strong>
          </h2>
          <span>The trusted source for why choose us</span>
        </div>
        <div className="row align-items-center">
          <div className="col-sm-6 col-lg-4 mb-4 mb-sm-0">
            <div className="pr-md-3">
              <div className="text-center text-sm-end mb-4">
                <img src="https://www.bootdey.com/image/80x80/FFB6C1/000000" alt="..." className="rounded-circle mb-3" />
                <h4>Residential Cleaning</h4>
                <p className="text-muted">
                  Roin gravida nibh vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor.
                </p>
              </div>
              <div className="text-center text-sm-end">
                <img src="https://www.bootdey.com/image/80x80/87CEFA/000000" alt="..." className="rounded-circle mb-3" />
                <h4>Commercial Cleaning</h4>
                <p className="text-muted">
                  Gravida roin nibh vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <div className="text-center">
              <img src="https://www.bootdey.com/image/350x350/FF7F50/000000" alt="..." className="rounded-circle" />
            </div>
          </div>

          <div className="col-sm-6 col-lg-4">
            <div className="pl-md-3">
              <div className="text-center text-sm-start mb-4">
                <img src="https://www.bootdey.com/image/80x80/8A2BE2/000000" alt="..." className="rounded-circle mb-3" />
                <h4>Washing services</h4>
                <p className="text-muted">
                  Nibh roin gravida vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor.
                </p>
              </div>
              <div className="text-center text-sm-start">
                <img src="https://www.bootdey.com/image/80x80/20B2AA/000000" alt="..." className="rounded-circle mb-3" />
                <h4>Carpet cleaning</h4>
                <p className="text-muted">
                  Vel proin gravida nibh velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Plans added below */}
      <section className="container my-5 bg-white rounded shadow-sm py-5">
        <h2 className="text-center mb-4">Our Pricing Plans</h2>
        <div className="row text-center">
          {plans.map((plan, index) => (
            <div className="col-md-4 p-4" key={index}>
              <div className="pricing-card p-4 h-100 border rounded">
                <FaStar className={`fa-3x mb-3 ${plan.iconColor}`} />
                <h3>{plan.name}</h3>
                <div className="price display-6 fw-bold">
                  {plan.price} <small className="fs-6 text-muted">{plan.frequency}</small>
                </div>
                <ul className="list-unstyled my-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="my-2">
                      {feature.included ? (
                        <FaCheckCircle className="text-success me-2" />
                      ) : (
                        <FaTimesCircle className="text-danger me-2" />
                      )}
                      {feature.label}
                    </li>
                  ))}
                </ul>
                <button className={`btn ${plan.btnClass} mt-2`}>Sign Up</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
