import React from 'react';
import './Home.scss'; 
import Button from './Button';

const Home = () => {
    return (
        <main className='home'>
            {/* Header Image */}
            <div className="header-image">
                <img src={require("../assets/cu.jpg" )}alt="Consumer unit" />
            </div>
        
            {/* Brief description of about us with a button link to team.html page */}
            <div className="about-us">
                <h2>About Us</h2>
                <p>Welcome to Electrical Contractors Essex, your trusted partner for all your electrical needs. With over 20 years of experience in the industry, we pride ourselves on delivering top-notch electrical services to both residential and commercial clients throughout Essex and the surrounding areas.</p>
                <p>Our team of certified and highly skilled electricians is dedicated to providing safe, reliable, and efficient electrical solutions. Whether you need a simple repair, a complete rewiring, or a custom electrical installation, we have the expertise to get the job done right the first time.</p>
                <p>At Electrical Contractors Essex, we are committed to excellence and customer satisfaction. We use the latest technology and adhere to the highest industry standards to ensure that our work meets your expectations and complies with all safety regulations.</p>
                <p>Thank you for choosing Electrical Contractors Essex. We look forward to serving you and becoming your go-to electrical service provider.</p>
                <Button text="Meet the team" to='/team' />
            </div>
        
            {/* Brief description of our services with a button link to services.html page */}
            <div className="our-services">
                <h2>Our Services</h2>
                <p>At Electrical Contractors Essex, we offer a comprehensive range of electrical services to meet the needs of both residential and commercial clients. Our services include:</p>
                <ul>
                    <li>Residential Electrical Services: From simple repairs to complete home rewiring, we provide safe and reliable electrical solutions for your home.</li>
                    <li>Commercial Electrical Services: We offer a full range of electrical services for businesses, including installations, maintenance, and emergency repairs.</li>
                    <li>Electrical Repairs: We provide prompt and efficient repair services to fix any electrical issues you may encounter.</li>
                    <li>Electrical Inspections: Ensure the safety and compliance of your electrical systems with our thorough inspection services.</li>
                    <li>Emergency Electrical Services: We offer 24/7 emergency services to address any urgent electrical problems.</li>
                </ul>
                <p>Our team of certified electricians is dedicated to delivering high-quality workmanship and exceptional customer service. Contact us today to learn more about our services and how we can help with your electrical needs.</p>
                <Button text="Our services" to='/services' />
            </div>
    
            {/* Brief description of work carried out with a button link to estimates.html page */}
            <div className="estimates">
                <h2>Get Your Estimate</h2>
                <p>At Electrical Contractors Essex, we understand that every project is unique and requires a tailored approach. That's why we offer free, no-obligation estimates for all our electrical services. Whether you're planning a small residential repair or a large commercial installation, our team is here to provide you with a detailed and accurate quote.</p>
                <p>Our estimates are designed to give you a clear understanding of the scope of work, the materials needed, and the associated costs. We pride ourselves on our transparency and commitment to providing fair and competitive pricing. Our goal is to ensure that you have all the information you need to make an informed decision about your electrical project.</p>
                <p>To get started, simply fill out the form below with your contact information and a brief description of your project. One of our experienced electricians will review your request and get back to you promptly with an estimate. We look forward to working with you and helping you achieve your electrical goals.</p>
                <Button text="Get a Estimate" to='/estimates' />
            </div>
    
            {/* Brief description of contact information with a button link to contact.html page */}  
            <div className="contact">
                <h2>Contact Us</h2>
                <p>If you have any questions or need further information about our services, please do not hesitate to contact us. You can reach us by phone, email, or by visiting our office. Our contact details are as follows:</p>
                <ul>
                    <li>Phone: +44 1234 567890</li>
                    <li>Email: <a href="mailto:info@electricalcontractorsessex.co.uk">info@electricalcontractorsessex.co.uk</a></li>
                    <li>Address: 123 Electric Avenue, Essex, ES1 2AB, United Kingdom</li>
                </ul>
                <p>We are committed to providing excellent customer service and will respond to your inquiries as quickly as possible. Thank you for considering Electrical Contractors Essex for your electrical needs. We look forward to hearing from you!</p>
                <Button text="Contact us now" to='/contact' />
            </div>
        </main>
    );
};

export default Home;