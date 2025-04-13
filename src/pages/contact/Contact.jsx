import './contact.css';
import Swal from 'sweetalert2'


const ContactSection = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const submitButton = form.querySelector("button[type='submit']");
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
  
    const formData = new FormData(form);
    formData.append("access_key", "28175889-eef6-45dd-9049-dcf482ca18b8");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());
  
    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
      form.reset();
    }
  
    submitButton.disabled = false;
    submitButton.textContent = "Submit";
  };
  
  


  return (
    <section className="contact-section" id="contact">
      <div className="container contact-container">
        <div className="text-center mb-5">
          <h2 className="section-title">Let’s Talk About Your Project</h2>
          <p className="section-subtitle">We’d love to hear from you. Fill in the form below and we’ll get back to you shortly.</p>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-group-grid">
            <input type="text" placeholder="Your Name" name='name' required />
            <input type="email" placeholder="Your Email" name='email' required />
            <input type="text" placeholder="Company Name" name='company' />
            <select>
              <option value="">Budget Range (Optional)</option>
              <option value="1k-5k">100$ - 500$</option>
              <option value="5k-10k">500$ - 1000$</option>
              <option value="10k-25k">1000$ - 1500$</option>
              <option value="">1500$ - 2000$</option>
              <option value="">2000$ - 2500$</option>
              <option value="">2500$ - 3000$</option>
              <option value="">3000$ to more</option>



            </select>
          </div>
          <textarea rows="5" placeholder="Tell us about your project..." name='message'></textarea>
          <div className="text-center">
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
