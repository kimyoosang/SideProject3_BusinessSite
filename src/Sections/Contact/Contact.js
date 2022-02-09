import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section class="section-4" id="contact">
      <h1 class="section-heading">Contact</h1>
      <div class="section-heading-line"></div>
      <div class="contact-wrapper">
        <div class="contact-details">
          <div class="phone">
            <i class="fas fa-mobile-alt"></i>
            <h3>Phone</h3>
            <p>010-7470-9948</p>
            <p>02-1234-1234</p>
          </div>
          <div class="address">
            <i class="fas fa-map-marker-alt"></i>
            <h3>Address</h3>
            <p>Main street #123</p>
            <p>Wall street #123</p>
          </div>
          <div class="email">
            <i class="far fa-envelope"></i>
            <h3>Email</h3>
            <p>yoo99485t@gmail.com</p>
            <p>sales@gmail.com</p>
          </div>
        </div>
        <h1>Get In Touch</h1>
        <form class="contact-form">
          <input type="text" placeholder="Kim yoosang" />
          <input type="email" placeholder="yoo99485@gmail.com" />
          <textarea placeholder="문의합니다"></textarea>
          <input type="submit" value="Send Message" />
        </form>
      </div>
    </section>
  );
}

export default Contact;
