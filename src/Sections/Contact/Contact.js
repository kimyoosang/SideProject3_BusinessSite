import React from "react";

function Contact() {
  return (
    <section className="section-4">
      <h1 className="section-heading">Contact</h1>
      <div className="section-heading-line"></div>
      <div className="contact-wrapper">
        <div className="contact-details">
          <div className="phone">
            <i className="fas fa-mobile-alt"></i>
            <h3>Phone</h3>
            <p>01012341234</p>
            <p>0212341234</p>
          </div>
          <div className="address">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Address</h3>
            <p>Main Street</p>
            <p>Wall Street</p>
          </div>
          <div className="email">
            <i className="fas fa-envelope"></i>
            <h3>Email</h3>
            <p>yoo99485@gmail.com</p>
            <p>sales@gmail.com</p>
          </div>
        </div>
        <h1>Get In Touch</h1>
        <form className="contact-form">
          <input type="text" placeholder="kimyoosang" />
          <input type="email" placeholder="yoo99485@gmail.com" />
          <textarea placeholder="연락합니다"></textarea>
          <input type="submit" value="Send Message" />
        </form>
      </div>
    </section>
  );
}

export default Contact;
