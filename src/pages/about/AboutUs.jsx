import React from 'react';
import './about.css';

const About = () => {
  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h2 className="about-title">Who We Are</h2>
            <p className="about-description">
           ELITE TECH is a full-service technology solutions provider, offering custom software, digital innovation, and IT services across industries. Our mission is to empower businesses with scalable digital products and result-driven strategies that push boundaries and deliver measurable impact.
            </p>
           
            <button className=" mt-3 px-4 py-2 rounded-pill about-btn">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
