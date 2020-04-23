import React from 'react'
import './Contact.css'
import telIcon from './../../assets/img/tel-icon.png'
import fbIcon from './../../assets/img/facebook.png'
const Contact = () => {
    return(
        <>
        <h1>CONTACT</h1>
        <h2>Want to get in touch? We'd love to hear from you. Here's how you can contact us.</h2>
        <article>
            <section>
                <img src={telIcon} alt=""/>
                <div>Talk to us</div>
                <div>Do you have any questions, or you want to call delivery by phone?
                    <br/>Just pick up the phone to call us for more information.
                </div>
                <div>1900-2707</div>
            </section>

            <section>
                <img src={fbIcon} alt=""/>
                <div>Chat with us</div>
                <div>Do you have any questions, or you want to notify about new promotion?
                    <br/>Just like our Facebook fanpage or chat with us on Facebook.
                </div>
                <div>Join our fanpage <a href="https://www.facebook.com/DominosPizzaVietnam">here</a>.</div>
            </section>
        </article>
        </>
    );
}

export default Contact;