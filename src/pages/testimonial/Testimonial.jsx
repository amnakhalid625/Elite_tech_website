import React from 'react';
import './testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const testimonials = [
  {
    name: "Amarpreet Sharma",
    role: "CEO, InnovateX",
    quote: "Elite Tech Solutions transformed our digital presence. Their team delivered exactly what we envisioned, and more!",
  },
  {
    name: "Priya Mehta",
    role: "Marketing Head, FinTrend",
    quote: "We saw a 40% increase in engagement after they revamped our website and streamlined our CRM. Incredible team!",
  },
  {
    name: "Rahul Verma",
    role: "Founder, Shopwise",
    quote: "Their SaaS development expertise helped us launch faster with zero downtime. Highly recommended!",
  },
];

const TestimonialSection = () => {
 
  return (

<>    <Swiper
    slidesPerView={3}
    spaceBetween={30}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="mySwiper"
  >
    </Swiper>


    <section className="testimonial-section" id="testimonials">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2>What Our Clients Say</h2>
          <p>Real stories from businesses we’ve helped grow.</p>
        </div>
        <div className="row">
          {testimonials.map((testimonial, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="testimonial-box p-4 shadow-sm h-100">
                <p className="testimonial-quote">“{testimonial.quote}”</p>
                <h5 className="mt-3 mb-1">{testimonial.name}</h5>
                <p className="text-muted small">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>

  );
};

export default TestimonialSection;
