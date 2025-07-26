import React from 'react';
import { BsPeople, BsBriefcase, BsTrophy, BsGlobe } from 'react-icons/bs';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true });

  const stats = [
    {
      icon: <BsPeople className="fs-1 text-primary mb-2" />,
      count: 49,
      label: 'Satisfied Clients',
    },
    {
      icon: <BsBriefcase className="fs-1 text-primary mb-2" />,
      count: 9,
      label: 'Successful Internships',
    },
    {
      icon: <BsTrophy className="fs-1 text-primary mb-2" />,
      count: 50,
      label: 'Awards',
    },
    {
      icon: <BsGlobe className="fs-1 text-primary mb-2" />,
      count: 20,
      label: 'Countries',
    },
  ];

  return (
    <section className="bg-light py-5">
      <div className="container" ref={ref}>
        <div className="row mt-4">
          {stats.map((stat, index) => (
            <div className="col-md-3 col-6 mb-4" key={index}>
              <div className="text-center">
                {stat.icon}
                <h2 className="fw-bold">
                  {inView ? <CountUp end={stat.count} duration={2} /> : 0}+
                </h2>
                <p className="text-muted">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
