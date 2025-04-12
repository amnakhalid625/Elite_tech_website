import React from 'react';
import './about.css';
import aboutImg from '../../assets/aboutImg.png';
import pdf from '../../pdf/AmnaKhalidResume.pdf';


const About = () => {
  return (
    <section className="about-modern container-fluid" id='about'>
      <div className="container">
        <div className="row align-items-center">

          {/* Text Section */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="about-text">
              <h2>Who We Are</h2>
              <p>
                At Elite Tech, we turn ideas into innovative software. With a blend of creativity, strategy, and tech expertise, we craft solutions that scale, adapt, and lead.
              </p>
              <p>
                Whether it's custom software, digital transformation, or product development — we're your go-to tech team.
              </p>
           <a href={pdf} download="AmnaKhalidResume.pdf"><button className="btn-explore">Explore More</button> </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-md-6">
            <div className="image-wrapper">
              <img
                src={aboutImg}
                alt="About illustration"
                className="img-fluid rounded-3"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
