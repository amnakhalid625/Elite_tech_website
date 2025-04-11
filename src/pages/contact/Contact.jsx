import './contact.css';

const ContactSection = () => {
  return (
    <section className="contact-section py-5" id="contact">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Let’s Talk About Your Project</h2>
          <p className="section-subtitle">We’d love to hear from you. Fill in the form below and we’ll get back to you shortly.</p>
        </div>

        <form className="contact-form row g-4">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Your Name" required />
          </div>
          <div className="col-md-6">
            <input type="email" className="form-control" placeholder="Your Email" required />
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Company Name" />
          </div>
          <div className="col-md-6">
            <select className="form-select">
              <option value="">Budget Range (Optional)</option>
              <option value="under-5k">Under $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k+">$25,000+</option>
            </select>
          </div>
          <div className="col-12">
            <textarea className="form-control" rows="5" placeholder="Project Description"></textarea>
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary px-5">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
