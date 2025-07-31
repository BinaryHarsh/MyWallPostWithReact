import React from 'react';

function ProcessSection() {
  const steps = [
    { title: 'Idea Generator' },
    { title: 'Info Collect' },
    { title: 'Product Design' },
    { title: 'Launch Project' },
  ];

  return (
    <section className="container py-5 bg-white">
      <h2 className="text-center mb-4">Working Process</h2>
      <div className="row text-center">
        {steps.map((step, index) => (
          <div className="col-sm-3 mb-4" key={index}>
            <div className="p-3 border rounded shadow-sm h-100">
              {/* Optional icon or number */}
              <div className="mb-2 fw-bold fs-4 text-primary">Step {index + 1}</div>
              <h5 className="mb-0">{step.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProcessSection;
