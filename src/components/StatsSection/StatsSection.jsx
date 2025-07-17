// StatsSection.jsx
function StatsSection() {
  return (
    <section className="bg-light py-4">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-3">
            <h3>49</h3>
            <p>Satisfied Clients</p>
          </div>
          <div className="col-md-3">
            <h3>09</h3>
            <p>Successful Internships</p>
          </div>
          {/* ...other stats */}
        </div>
      </div>
    </section>
  );
}
export default StatsSection;
