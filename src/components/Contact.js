import React from 'react';
import './Contact.scss'

const Contact = () => {
    return (
        <main className='contact-page'> 
          {/* Header image */}
        <div className="header-image">
            <img src={require('../assets/contact-us.jpg')} alt="A person on the phone writing down details in a book"/>
        </div>
        
        {/* Introduction */}
        <div className="contact-intro">
            <h1>Contact Us</h1>
            <p>If you have any questions or need further information about our services, please do not hesitate to contact us. You can reach us by phone, email, or by visiting our office. Our contact details are as follows:</p>
        </div>
        
        {/* Introduction */}
        <div className="contact-info">
            <h2>Our Contact Information</h2>
            <h4>Electrical Contractors Essex</h4>
            <p>123 Electric Avenue</p>
            <p>Essex, ES1 2AB</p>
            <p>United Kingdom</p>
            <p>Phone: <a href="tel:+441234567890">+44 1234 567 890</a></p>
            <p>Email: <a href="mailto:info@electricalcontractorsessex.co.uk">info@electricalcontractorsessex.co.uk</a></p>
            <h3>Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p>Saturday: 10:00 AM - 2:00 PM</p>
            <p>Sunday: Closed</p>
        </div>
        
        {/* Map Location */}
        <div className="contact-map"> 
            <h2>Our Location</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.9396807045!2d0.1277583!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf0f8b0b%3A0x2e0b0d0e0e0e0e0e!2sEssex%2C%20UK!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s" title="Map of Essex, UK" aria-label="Map Showing the location of Electrical Contractors Essex" aria-hidden="false"></iframe>
        </div>
        
        {/* Contact Form */}
        <div className="contact-form-container">
        </div>
        </main>
    );
};

export default Contact;