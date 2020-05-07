import React from 'react'
import './About.css'
import about1 from './../../assets/img/about1.png'
import about2 from './../../assets/img/about2.png'
import about3 from './../../assets/img/about3.png'
const About = () => {
    return(
        <>
        <h1>ABOUT PYCOZZA</h1>
        <article className="about-article">
            <section>
                <img src={about1} alt=""/>
                <div><b>Why Pycozza is a Great Pizza Delivery?</b><br/>
                    With more than 15 stores on Vietnam.<br/>
                    We bring the satisfaction to more than 1000 customers every day.<br/>
                    Since the day we started our service, our promise "bring happiness to customer" has become our standard.</div>
            </section>
            
            <section>
                <div>
                Pycozza guarantees that after confirmation, your order will be delivered within 30 minutes.<br/>
                <b>We guarantee:</b><br/>
                - You will get a voucher for 9'' pizza if your order arrives late.<br/>
                - Cash-on-delivery is available, there is also ATM card payment for you.<br/>
                - Commitments for services may be temporarily withdrawn because of poor operating conditions for delivery and will be notified at the time of receipt of the application.<br/> 
                - Not applied on public holidays.  
                </div>
                <img src={about2} alt=""/>
            </section>

            <section>
                <img src={about3} alt=""/>
                <div>
                Pycozza guarantees you will be satisfied! Your pizza will always be kept in a warm, tasty flavor, or you will get another one for free.<br/>
                <b>Condition:</b> Pycozza reserves the right to withdraw the service without prior notice. This will not apply to your order. Weather conditions such as heavy rain, floods, storms, tides...
                </div>
            </section>
        </article>
        </>
    );
}

export default About;