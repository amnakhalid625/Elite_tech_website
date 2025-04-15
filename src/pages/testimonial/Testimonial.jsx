import React, { useState, useEffect, useRef } from 'react';
import './testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

const defaultTestimonials = [
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
    name: "Priya Mehta",
    role: "Marketing Head, FinTrend",
    quote: "We saw a 40% increase in engagement after they revamped our website and streamlined our CRM. Incredible team!",
  },
  
];

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState(() => {
    const stored = localStorage.getItem('testimonials');
    return stored ? JSON.parse(stored) : defaultTestimonials;
  });

  const [formData, setFormData] = useState({ name: '', role: '', quote: '' });
  const modalRef = useRef();

  // Save testimonials to localStorage
  useEffect(() => {
    localStorage.setItem('testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const { name, role, quote } = formData;
    if (name && role && quote) {
      const newTestimonial = { name, role, quote };
      setTestimonials(prev => [...prev, newTestimonial]);
      setFormData({ name: '', role: '', quote: '' });

      // Close modal after submission
      if (modalRef.current) {
        const modalEl = modalRef.current;
        const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
        if (modalInstance) modalInstance.hide();
      }
    }
  };

  return (
    <>
      {/* bootstrap Modal */}
      <div
        className="modal fade"
        id="commentmodal"
        tabIndex="-1"
        aria-labelledby="commentModalLabel"
        aria-hidden="true"
        ref={modalRef}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4 shadow-sm">
            <div className="modal-header border-0">
              <h5 className="modal-title" id="commentModalLabel">Share Your Experience</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Role"
                />
              </div>

              <div className="mb-3">
                <textarea
                  name="quote"
                  value={formData.quote}
                  onChange={handleInputChange}
                  className="form-control"
                  rows="4"
                  placeholder="Write your comment here..."
                ></textarea>
              </div>
            </div>

            <div className="modal-footer border-0 d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="commentBtn"
                onClick={handleSubmit}
              >
                Submit Comment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="testimonial-section" id="testimonials">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2>What Our Clients Say</h2>
            <p>Real stories from businesses we’ve helped grow.</p>
          </div>

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            speed={300}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },      
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
            modules={[Pagination, Autoplay]}
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
          <div className='commentBtnWrapper text-center mt-3'>
            <button
              className="commentBtn"
              data-bs-toggle="modal"
              data-bs-target="#commentmodal"
            >
              Add Your Comment
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
