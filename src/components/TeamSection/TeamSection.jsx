// TeamSection.jsx
function TeamSection() {
  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">Meet Our Experts</h2>
      <div className="row text-center">
        <div className="col-md-4 mb-3">
          <img src="team1.jpg" alt="Meenakshi" className="rounded-circle mb-2" width="120"/>
          <h6>Meenakshi</h6>
          <small>Digital Marketing</small>
        </div>
        <div className="col-md-4 mb-3">
          <img src="team2.jpg" alt="Harsh" className="rounded-circle mb-2" width="120"/>
          <h6>Harsh</h6>
          <small>Website Designer</small>
        </div>
        <div className="col-md-4 mb-3">
          <img src="team3.jpg" alt="Rohit" className="rounded-circle mb-2" width="120"/>
          <h6>Rohit Khanna</h6>
          <small>Mobile App Developer</small>
        </div>
      </div>
    </section>
  );
}
export default TeamSection; // 👈 This is important!
