import React from 'react';
import './testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';


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
  {
    name: "Rahul Verma",
    role: "Founder, Shopwise",
    quote: "Their SaaS development expertise helped us launch faster with zero downtime. Highly recommended!",
  },
  {
    name: "Rahul Verma",
    role: "Founder, Shopwise",
    quote: "Their SaaS development expertise helped us launch faster with zero downtime. Highly recommended!",
  },
  {
    name: "Rahul Verma",
    role: "Founder, Shopwise",
    quote: "Their SaaS development expertise helped us launch faster with zero downtime. Highly recommended!",
  },
  {
    name: "Rahul Verma",
    role: "Founder, Shopwise",
    quote: "Their SaaS development expertise helped us launch faster with zero downtime. Highly recommended!",
  },
  
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section" id="testimonials">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2>What Our Clients Say</h2>
          <p>Real stories from businesses we’ve helped grow.</p>

          
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          speed={300}
          autoplay={{
            delay: 2000, 
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          modules={[Pagination,Autoplay]}
          className="mySwiper"
        >
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide key={idx}>
              <div className="testimonial-box p-4 shadow-sm h-100">
                <p className="testimonial-quote">“{testimonial.quote}”</p>
                <h5 className="mt-3 mb-1">{testimonial.name}</h5>
                <p className="text-muted small">{testimonial.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>


  {/* Comment Button */}
 <div className='commentBtnWrapper'>
 <button className=" commentBtn text-center mt-3" onClick={() => alert('Open comment form')}>
        Add Your Comment
      </button>

      </div>

      </div>
    </section>
  );
};

export default TestimonialSection;
