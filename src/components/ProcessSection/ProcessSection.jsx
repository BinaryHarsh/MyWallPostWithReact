// ProcessSection.jsx
function ProcessSection() {
  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">Working Process</h2>
      <div className="row text-center">
        <div className="col-sm-3">
          <img src="idea.jpg" alt="Idea" className="mb-2" />
          <h5>Idea Generator</h5>
        </div>
        <div className="col-sm-3">
          <img src="info.jpg" alt="Info" className="mb-2" />
          <h5>Info Collect</h5>
        </div>
        <div className="col-sm-3">
          <img src="design.jpg" alt="Design" className="mb-2" />
          <h5>Product Design</h5>
        </div>
        <div className="col-sm-3">
          <img src="launch.jpg" alt="Launch" className="mb-2" />
          <h5>Launch Project</h5>
        </div>
      </div>
    </section>
  );
}
export default ProcessSection; // 👈 This is important!
