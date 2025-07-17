import { Link } from 'react-router-dom';
import AboutHero from '../components/AboutHero/AboutHero.jsx';

function About() {
  return (
    <>
      <AboutHero />
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="office.jpg" alt="Office" className="img-fluid rounded mb-4" />
          </div>
          <div className="col-md-6">
            <h2>Perfect Solution Makes Success Company</h2>
            <p><strong>Smart Digital Wings is a leading digital marketing company in India</strong>, offering services such as web development, web designing, SEO, SMO, PPC, email marketing, mobile app development, and more to various business sectors.</p>
            <p>We are committed to delivering awesome results at affordable prices while maintaining transparency. Our mission is to become a leading digital marketing services provider, focusing on customer satisfaction and data-driven strategies.</p>
            <Link className="btn btn-primary" to="/">Click to Call</Link>{' '}
            <Link className="btn btn-secondary" to="/">Let’s Get Started</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
