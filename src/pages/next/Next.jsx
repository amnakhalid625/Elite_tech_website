import one from '../../assets/one.avif';
import two from '../../assets/two.avif';
import three from '../../assets/three.avif';
import four from '../../assets/four.avif';
import five from '../../assets/five.webp';
import './next.css';


const Next = () => {
  return (
    <section className="next-section container-fluid">
      <div className="container text-center">
        <h1>Case Studies</h1>
        <p className="subheading">
        At Elite Tech, we pride ourselves on delivering transformative solutions that drive tangible results. Here are some of the success stories of businesses we’ve helped:

        </p>
      </div>

      <div className="next-grid container">
        <div className="next-item large">
          <img src={one} alt="Experience"  />
          <span className="label">Financial Sector Transformation</span>
          <div className='overlay'>
            <p>We partnered with a leading financial institution to implement an AI-driven risk management system. The result? A 40% improvement in efficiency and a significant reduction in fraud.</p>
          </div>
        </div>
        <div className="next-item">
          <img src={two} alt="Insight"  />
          <span className="label">Healthcare Innovation</span>
          <div className='overlay'>
            <p>A major healthcare provider entrusted us with a cloud-based patient management system. This system improved patient satisfaction and reduced operational costs by 30%.</p>
          </div>
        </div>
        <div className="next-item">
          <img src={three} alt="Innovate" />
          <span className="label">Innovate</span>
          <div className='overlay'>
            <p>A major healthcare provider entrusted us with a cloud-based patient management system. This system improved patient satisfaction and reduced operational costs by 30%.</p>
          </div>
        </div>
        <div className="next-item">
          <img src={four} alt="Accelerate" />
          <span className="label">Retail Digital Transformation</span>
          <div className='overlay'>
            <p>A global retail chain wanted to enhance its customer experience. We developed a custom e-commerce platform integrated with advanced analytics, increasing their online sales by 25%.</p>
          </div>
        </div>
        <div className="next-item">
          <img src={five} alt="Assure" />
          <span className="label">Mobile Optimization:</span>
          <div className='overlay'>
            <p> Optimized for mobile, improving accessibility and conversion rates</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Next;
