import './testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import db from "../../firebase/firebaseConfig.js";
import { useEffect, useState } from 'react';

const TestimonialSection = () => {
  const [formData, setFormData] = useState({ name: '', role: '', quote: '' });
  const [testimonials, setTestimonials] = useState([]);

  // Listen to testimonials in Firestore in real-time
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "testimonials"), (snapshot) => {
      const data = snapshot.docs.map(doc => doc.data());
      setTestimonials(data);
    });
    return () => unsubscribe();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (formData.name && formData.role && formData.quote) {
      try {
        await addDoc(collection(db, "testimonials"), formData);
        setFormData({ name: '', role: '', quote: '' });
      } catch (err) {
        console.error("Error adding testimonial: ", err);
      }
    }
  };

  return (
    <>
      {/* Modal for comment submission */}
      <div
        className="modal fade"
        id="commentmodal"
        tabIndex="-1"
        aria-labelledby="commentModalLabel"
        aria-hidden="true"
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
                  className="form-control"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  name="role"
                  className="form-control"
                  placeholder="Role"
                  value={formData.role}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <textarea
                  name="quote"
                  className="form-control"
                  rows="4"
                  placeholder="Write your comment here..."
                  value={formData.quote}
                  onChange={handleInputChange}
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
                data-bs-dismiss="modal"
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
          <div className='commentBtnWrapper'>
            <button
              className="commentBtn text-center mt-3"
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
