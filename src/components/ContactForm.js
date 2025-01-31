import  { useState } from "react";
import Button from './Button';
import './ContactForm.scss';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, number, message});
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Contact Us</h1>
            <div>
                <label>Name:</label>
                <input 
                   type="text"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Email:</label>
                <input 
                   type="email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
               />
             </div>
             <div>
                <label>Number:</label>
                <input 
                   type="text"
                   value={number}
                   onChange={(e) => setNumber(e.target.value)}
                />
            </div>   
            <div>
                <label>Message:</label>
                <textarea 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                />
            </div>
            <Button type="submit" text="ENTER" />
        </form>
    )
};


export default ContactForm;
