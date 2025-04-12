import homeOne from '../../assets/h1.jpeg';
import homeTwo from '../../assets/h2.jpeg';
import homeThree from '../../assets/h3.jpeg';
import homeFour from '../../assets/h4.jpeg';
import './home.css';
import { motion } from 'framer-motion';

const slides = [
  {
    img: homeOne,
    text: 'Welcome to Elite Tech Solutions — Empowering Your Business with Innovative Technology Solutions.',
    btnText: 'Consult Now',
    btnLink: 'https://wa.me/923403394019',
    colorClass: 'slide1',
  },
  {
    img: homeTwo,
    text: 'We deliver tailored technology solutions to streamline operations, boost productivity, and drive growth.',
    btnText: 'Know More',
    colorClass: 'slide2',
  },
  {
    img: homeThree,
    text: 'To be the most trusted partner for businesses seeking to leverage technology to drive growth and innovation.',
    btnText: 'Our Vision',
    colorClass: 'slide3',
  },
  {
    img: homeFour,
    text: 'To deliver innovative, scalable, and secure technology solutions.',
    btnText: 'Our Mission',
    colorClass: 'slide4',
  },
];

const Home = () => {
  return (
    <section className="carousel slide carousel-fade" data-bs-ride="carousel" id="slider1" data-bs-interval="5000">
      <div className="carousel-indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            data-bs-target="#slider1"
            data-bs-slide-to={i}
            className={`sliderButton ${i === 0 ? 'active' : ''}`}
            aria-label={`Slide ${i + 1}`}
            aria-current={i === 0 ? 'true' : undefined}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {slides.map((slide, i) => (
          <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
            <img src={slide.img} loading="lazy" className="d-block w-100 vh-100 object-fit-cover" alt={`Slide ${i + 1}`} />
            <div className="carousel-caption d-flex align-items-center h-100">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 col-md-9 col-sm-11">
                    <motion.div
                      className={`text-start ${slide.colorClass}`}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                      <motion.p
                        className="text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {slide.text}
                      </motion.p>

                      {slide.btnLink ? (
                        <motion.a
                          href={slide.btnLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          <button className="home-btn">{slide.btnText}</button>
                        </motion.a>
                      ) : (
                        <motion.button
                          className="home-btn"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {slide.btnText}
                        </motion.button>
                      )}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
