import React from 'react';
import "./AboutPage.css";
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const AboutPage = () => {
    return (
        <div>
            <Hero 
                title="About Us"
                subtitle="Learn about our mission and how we're changing lives through books."
                image=""
                buttonLabel="Contact Us"
                buttonLink="/contact"
            />
            <main className="about-container">
                <h1>About Us</h1>
                <p>
                    Welcome to BookWish! Our mission is to connect communities through
                    the power of books. We aim to empower schools, childcares, and
                    local communities to share their goals for book donations and
                    help donors contribute to meaningful projects.
                </p>
                <section>
                    <h2>Our Mission</h2>
                    <p>
                        We believe every child deserves access to quality reading
                        materials. BookWish is here to make that possible by
                        simplifying the process of book donations for everyone.
                    </p>
                </section>
                <section>
                    <h2>Our Team</h2>
                    <p>
                        A passionate group of individuals committed to enhancing
                        literacy and creating opportunities for communities to grow.
                    </p>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;
