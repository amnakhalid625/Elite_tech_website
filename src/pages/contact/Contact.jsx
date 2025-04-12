import './contact.css';

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-container">
        <div className="text-center mb-5">
          <h2 className="section-title">Let’s Talk About Your Project</h2>
          <p className="section-subtitle">We’d love to hear from you. Fill in the form below and we’ll get back to you shortly.</p>
        </div>

        <form className="contact-form">
          <div className="form-group-grid">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Company Name" />
            <select>
              <option value="">Budget Range (Optional)</option>
              <option value="1k-5k">100pkr - 500</option>
              <option value="5k-10k">500 - 1000</option>
              <option value="10k-25k">1000 - 1500</option>
              <option value="">1500 - 2000</option>
              <option value="">2000 - 2500</option>
              <option value="">2500 - 3000</option>
              <option value="">3000 to more</option>



            </select>
          </div>
          <textarea rows="5" placeholder="Tell us about your project..."></textarea>
          <div className="text-center">
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
