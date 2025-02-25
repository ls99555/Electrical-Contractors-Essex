import React from 'react';
import './Services.scss';

const Services = () => {
    return (
        <main className='services-page'>
        <div class="header-image">
            <img src={require("../assets/services2.jpg")} alt="Avan at night with people working." />
        </div>
        <div class="domestic-image">
            <img src={require("../assets/domestic.jpg")} alt="Domestic Work" />
        </div>
        <div class="domestic-work">
            <div class="service-content">
                <h2>Domestic Work</h2>
                <p>We provide a comprehensive range of domestic electrical services to ensure your home is safe, functional, and up to date with the latest electrical standards. Our team of certified electricians handles everything from minor repairs to major installations with the utmost professionalism and care.</p>
                <ul>
                    <li>Electrical installations: From new wiring to lighting installations, we handle all types of electrical installations in your home.</li>
                    <li>Rewiring: Whether you need partial or complete rewiring, our experts ensure your home's electrical system is safe and efficient.</li>
                    <li>Lighting solutions: We offer a variety of lighting solutions, including LED lighting, outdoor lighting, and smart lighting systems.</li>
                    <li>Socket and switch installations: We install and upgrade sockets and switches to meet your needs and enhance your home's functionality.</li>
                    <li>Electrical repairs and maintenance: Our team provides prompt and reliable electrical repairs and maintenance services to keep your home running smoothly.</li>
                </ul>
            </div>
        </div>
        <div class="commercial-work">
            <div class="service-content">
                <h2>Commercial Work</h2>
                <p>Our commercial electrical services are designed to meet the unique needs of businesses, ensuring that your electrical systems are reliable, efficient, and compliant with all regulations. We work closely with you to minimize disruption and deliver high-quality results on time and within budget.</p>
                <ul>
                    <li>Office lighting installations: We design and install efficient lighting systems that enhance productivity and reduce energy costs.</li>
                    <li>Electrical system design and installation: Our team creates custom electrical systems tailored to your business's specific requirements.</li>
                    <li>Emergency lighting: We install and maintain emergency lighting systems to ensure safety and compliance with regulations.</li>
                    <li>Data cabling and network installations: We provide comprehensive data cabling and network installation services to support your business's communication needs.</li>
                    <li>Electrical maintenance and repairs: Our electricians offer ongoing maintenance and prompt repairs to keep your commercial property running smoothly.</li>
                </ul>
            </div>
        </div>
        <div class="commercial-image">
            <img src={require("../assets/commercial.jpg")} alt="Commercial Work" />
        </div>
        <div class="fault-finding-image">
            <img src={require("../assets/fault.jpg")} alt="Fault Finding Work" />
        </div>
        <div class="fault-finding-work">
            <div class="service-content">
                <h2>Fault Finding Work</h2>
                <p>Electrical faults can pose significant risks to your property and safety. Our fault finding services are designed to quickly identify and resolve any electrical issues, ensuring your system operates safely and efficiently. We use advanced diagnostic tools and techniques to provide accurate and effective solutions.</p>
                <ul>
                    <li>Diagnostic testing: We use state-of-the-art equipment to diagnose electrical faults accurately.</li>
                    <li>Electrical fault identification: Our experts pinpoint the exact location and cause of electrical issues.</li>
                    <li>Repair and resolution of electrical issues: We provide effective solutions to resolve electrical faults and restore functionality.</li>
                    <li>Preventative maintenance: Our preventative maintenance services help identify potential issues before they become major problems.</li>
                    <li>Safety inspections: We conduct thorough safety inspections to ensure your electrical system meets all safety standards.</li>
                </ul>
            </div>
        </div>
        <div class="testing-inspection-work">
            <div class="service-content">
                <h2>Testing and Inspection Work</h2>
                <p>Regular testing and inspection of electrical systems are essential for maintaining safety and compliance with regulations. Our comprehensive testing and inspection services provide peace of mind, ensuring your electrical systems are safe, efficient, and up to code.</p>
                <ul>
                    <li>Periodic inspections: We conduct regular inspections to assess the condition of your electrical systems and identify any issues.</li>
                    <li>PAT testing: Our Portable Appliance Testing (PAT) services ensure that all electrical appliances are safe to use.</li>
                    <li>Electrical certification: We provide certification for electrical installations, ensuring compliance with all relevant regulations.</li>
                    <li>Compliance with safety regulations: Our services help you meet all safety regulations and standards, reducing the risk of electrical hazards.</li>
                    <li>Detailed reports and recommendations: We provide comprehensive reports and actionable recommendations to improve the safety and efficiency of your electrical systems.</li>
                </ul>
            </div>
        </div>
        <div class="testing-inspection-image">
            <img src={require("../assets/testing.jpg")} alt="Testing and Inspection Work" />
        </div>
    </main>
    );
};

export default Services;