import React from 'react';

function Contact() {
    return (
        <div className="contactdiv">
            <section id="contact">
                <div className="name-div">
                    <label>Your Name:</label>
                    <input type="text" placeholder="Enter your name" required />
                </div>
                <div className="email-div">
                    <label>Your Email:</label>
                    <input type="text" placeholder="Enter your email" required />
                </div>
                <button className="btn5">Contact Us</button>
            </section>
        </div>
    )
}
export default Contact;
