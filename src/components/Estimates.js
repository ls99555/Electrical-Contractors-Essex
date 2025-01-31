import React from 'react';
import './Estimates.scss';

const Estimates = () => {
    return (
      <main className="estimates-page">
        {/* Header picture for estimates page */}
        <div className="header-image">
          <img src={require('../assets/estimates.jpg')} alt="Blueprints for a house." />
        </div>
        
        <div className="intro-estimates">
          <h1>Get Your Estimate</h1>
          <p>Welcome to the Electrical Contractors Essex estimates page. This page is designed to provide you with a rough pricing system for your electrical projects. By filling out the form below, you can receive a free, no-obligation estimate for the services you need.</p>
          <p>Our estimates are based on the information you provide and are intended to give you a general idea of the costs involved. For a more accurate and detailed quote, we recommend scheduling an on-site consultation with one of our experienced electricians.</p>
          <p>Please fill out the form with your contact information and a brief description of your project. One of our team members will review your request and get back to you promptly with an estimate. We look forward to helping you with your electrical needs.</p>    
        </div>
       
        <div className="domestic-estimates">
          <h2>Domestic Electrical Work</h2>
          <p>We offer a wide range of domestic electrical services to ensure your home is safe and functional. Our services include:</p>
          <ul>
              <li>Rewiring a 3-bedroom house: Comprehensive rewiring to ensure all electrical systems are up to code and safe.</li>
              <li>Installing new electrical sockets: Adding new sockets to improve convenience and accessibility in your home.</li>
              <li>Installing new lighting fixtures: Upgrading or adding new lighting fixtures to enhance the ambiance and functionality of your space.</li>
              <li>Electrical safety certificate: Providing certification to confirm that your electrical installations meet safety standards.</li>
              <li>Consumer unit replacement: Replacing old or faulty consumer units to ensure reliable and safe electrical distribution.</li>
          </ul>
        </div>
       
        <div className="domestic-list"></div>
         
        <div className="commercial-estimates">
          <h2>Commercial Electrical Work</h2>
          <p>Our commercial electrical services are designed to meet the needs of businesses of all sizes. We provide:</p>
          <ul>
              <li>Office rewiring: Complete rewiring services to ensure your office's electrical systems are efficient and up to date.</li>
              <li>Installing new electrical sockets: Adding additional sockets to accommodate your business's growing power needs.</li>
              <li>Installing new lighting fixtures: Enhancing your workspace with modern, energy-efficient lighting solutions.</li>
              <li>Electrical safety certificate: Certifying that your commercial property meets all electrical safety regulations.</li>
              <li>Consumer unit replacement: Upgrading consumer units to handle increased electrical loads and improve safety.</li>
          </ul>
        </div>
       
        <div className="commercial-list"></div>

        <div className="testing-estimate">
          <h2>Electrical Testing and Inspection</h2>
          <p>We offer thorough electrical testing and inspection services to ensure the safety and reliability of your electrical systems. Our services include:</p>
          <ul>
              <li>Periodic inspection report: Regular inspections to identify and address potential electrical issues before they become serious problems.</li>
              <li>Portable appliance testing (PAT): Testing portable appliances to ensure they are safe to use and comply with safety standards.</li>
              <li>Electrical installation condition report (EICR): Detailed reports on the condition of your electrical installations, highlighting any necessary repairs or upgrades.</li>
              <li>Landlord safety certificate: Providing landlords with the necessary certification to confirm their properties meet electrical safety requirements.</li>
          </ul>
        </div>
        
        <div className="testing-list"></div>

        {/* Combined container for total price and additional info form */}
        <div className="additional-info-form-container"></div>
        <div className="total-price"></div>
        <div className="total-estimate"></div>
      
      </main>
    );
};

export default Estimates;