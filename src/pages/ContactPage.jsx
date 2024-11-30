import React, { useState } from 'react';
import './ContactPage.css';
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, e.g., send to API or email service.
        console.log('Form submitted:', formData);
        setFormSubmitted(true);
    };

    if (formSubmitted) {
        return (
            <div className="contact-container">
                <h1>Thank You!</h1>
                <p>Your message has been sent. We will get back to you shortly.</p>
            </div>
        );
    }

    return (
        <div>
            <Hero
                title="Get in Touch"
                subtitle="We'd love to hear from you. Reach out to us today!"
                image=""
                buttonLabel="Go Home"
                buttonLink="/"
            />
            <div className="contact-container">
                <h1>Contact Us</h1>
                <p>Have questions or feedback? Fill out the form below to get in touch!</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        required
                    ></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;


