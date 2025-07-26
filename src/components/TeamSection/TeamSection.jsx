import React from 'react';

import './TeamSection.css'
function TeamSection() {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      img: 'https://randomuser.me/api/portraits/women/64.jpg',
      desc: "Leading our company's vision and strategy with over 15 years of experience.",
      socials: ['linkedin', 'twitter', 'facebook']
    },
    {
      name: 'Michael Chen',
      role: 'Tech Lead',
      img: 'https://randomuser.me/api/portraits/men/64.jpg',
      desc: "Driving innovation and technical excellence in all our projects.",
      socials: ['linkedin', 'github', 'twitter']
    },
    {
      name: 'Emily Martinez',
      role: 'Design Director',
      img: 'https://randomuser.me/api/portraits/women/12.jpg',
      desc: 'Creating beautiful and intuitive designs that users love.',
      socials: ['linkedin', 'dribbble', 'instagram']
    },
    {
      name: 'David Wilson',
      role: 'Marketing Manager',
      img: 'https://randomuser.me/api/portraits/men/4.jpg',
      desc: 'Developing strategies that connect our brand with audiences.',
      socials: ['linkedin', 'twitter', 'instagram']
    }
  ];

  return (
    <section className="py-5">
      <div className="container">
        {/* Section Header */}
        <div className="row text-center mb-5">
          <div className="col-12">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="text-muted">Dedicated professionals working together to achieve excellence</p>
          </div>
        </div>

        {/* Team Members */}
        <div className="row g-4">
          {team.map((member, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="team-member text-center p-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="mb-4 shadow rounded-circle"
                  style={{ width: '140px', height: '140px', objectFit: 'cover' }}
                />
                <h5 className="mb-1">{member.name}</h5>
                <p className="text-muted mb-2">{member.role}</p>
                <p className="small mb-3">{member.desc}</p>
                <div className="social-links">
                  {member.socials.map((social, i) => (
                    <a key={i} href="#" className="mx-1 text-decoration-none">
                      <i className={`fab fa-${social}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
