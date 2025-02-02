import React, { useState } from 'react';
import Button from './Button';
import './EstimatesForm.scss';

const EstimatesForm = ({ totalEstimate }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            name,
            email,
            number,
            message,
            totalEstimate
        };

        console.log('Form submitted:', formData);
        // Handle form submission logic here (e.g., send data to server)
    };

    return (
        <div className="estimates-form-container">
            <h1>Your total estimate is £{totalEstimate.toFixed(2)}</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="number">Number:</label>
                    <input
                        type="tel"
                        id="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <Button type="submit" text="Submit" />
            </form>
        </div>
    );
};

export default EstimatesForm;