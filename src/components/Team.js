import React from 'react';
import './Team.scss';

const Team = () => {
    return (
        <main className="team-page">
            <div className="header-image">
                <img src={require('../assets/pexels-heyho-6794934.jpg')} alt="A office building." />
            </div>

            <div className="our-team">
                <h2>Our Team</h2>
                <p>At Electrical Contractors Essex, we pride ourselves on having a team of highly skilled and dedicated professionals who are committed to delivering top-quality electrical services. Our team is composed of experienced electricians, project managers, and support staff who work together to ensure that every project is completed to the highest standards of safety and excellence.</p>
                <p>Our electricians are fully certified and have extensive experience in both residential and commercial electrical work. They are equipped with the latest tools and technology to handle any electrical issue, from simple repairs to complex installations. Our project managers oversee each project from start to finish, ensuring that all work is completed on time and within budget.</p>
                <p>We believe in continuous learning and development, which is why we invest in regular training for our team members. This ensures that they are always up to date with the latest industry standards and best practices. Our support staff is always ready to assist with any inquiries and provide exceptional customer service.</p>
            </div>

            <div className="david-johnson">
                <img className="team-photos" src={require('../assets/david.jpg')} alt="CEO" />
                <h3>David Johnson</h3>
                <p>David is the CEO of Electrical Contractors Essex. With over 20 years of experience in the electrical industry, he has worked on numerous projects, leading teams to success and ensuring the highest standards of quality and safety. David's extensive knowledge and leadership skills make him an invaluable asset to the company.</p>
            </div>

            <div className="john-smith">
                <img className="team-photos" src={require('../assets/john.jpg')} alt="John Smith" />
                <h3>John Smith</h3>
                <p>John is a certified electrician with over 10 years of experience in the field. He specializes in residential electrical services and is known for his attention to detail and excellent customer service.</p>
            </div>

            <div className="sarah-johnson">
                <img className="team-photos" src={require('../assets/sarah.jpg')} alt="Sarah Johnson" />
                <h3>Sarah Johnson</h3>
                <p>Sarah is a skilled electrician with a passion for commercial electrical work. She has worked on a variety of projects for businesses and is dedicated to delivering safe and reliable electrical solutions.</p>
            </div>

            <div className="michael-brown">
                <img className="team-photos" src={require('../assets/micheal.jpg')} alt="Michael Brown" />
                <h3>Michael Brown</h3>
                <p>Michael is an experienced electrician with expertise in electrical installations and repairs. He is committed to providing efficient and cost effective solutions for all your electrical needs.</p>
            </div>

            <div className="emily-davis">
                <img className="team-photos" src={require('../assets/emily.jpg')} alt="Emily Davis" />
                <h3>Emily Davis</h3>
                <p>Emily is our friendly receptionist who ensures that all client inquiries are handled promptly and efficiently. She is the first point of contact for our clients and plays a crucial role in maintaining our high standards of customer service.</p>
            </div>
        </main>
    );
}

export default Team;