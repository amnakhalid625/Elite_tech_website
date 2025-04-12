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
              <option value="under-5k">Under $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k+">$25,000+</option>
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
