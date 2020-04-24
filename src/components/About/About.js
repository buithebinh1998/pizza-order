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
                <div><b>Why Pycozza is a Delivery Expert?</b><br/>
                    With more than 10.000 stores on 74 countries.<br/>
                    We bring the satisfaction to more than 1 million customers every day, more then 400 million pizza sold per year.<br/>
                    During the last 50 years, our promise "30 minute delivery" has become our standard.</div>
            </section>
            
            <section>
                <div>
                Pycozza guarantees that your order will arrive within 30 minutes or you will get a free Pizza Voucher for your next purchase!<br/>
                <b>We guarantee:</b> Voucher for 1 medium sized pizza (9 ") for the next order<br/>
                - Pycozza does not penalise late delivery staff. <br/>
                - Pycozza reserves the right to withdraw delivery without prior notice.<br/>
                - Commitments for services may be temporarily withdrawn because of poor operating conditions for delivery and will be notified at the time of receipt of the application.<br/> 
                - May not applied in abnormal or unsafe weather conditions such as heavy rain, flood, storm, tide...<br/>
                - Not applied on public holidays. 
                - Not applied for orders over 5 pizzas. 
                </div>
                <img src={about2} alt=""/>
            </section>

            <section>
                <img src={about3} alt=""/>
                <div>
                Pycozza guarantees you will be satisfied! Your pizza will alway hot and crispy when delivered to your doorstep, otherwise we will give you another!<br/>
                <b>Condition:</b> The above condition applies when there is insufficient / insufficient coating or no additive as ordered. Pycozza reserves the right to withdraw the service without prior notice. This will not apply to your order. Weather conditions such as heavy rain, floods, storms, tides...
                </div>
            </section>
        </article>
        </>
    );
}

export default About;