import React from 'react';
import Linkedin from "./logo-linkedin.jpg";
import Instagram from "./logo-instagram.jpg";
import Facebook from "./logo-facebook.jpg";
import './Skill.css';

const Footer = () => {
    const styles = {
        marginLeft : '45%',
        marginBottom : '20px'
    }
    return (
        <div>
            <div> 
                <h1>FOLLOW ME</h1>
                <hr style={styles}></hr>
                <p style={{textAlign:'center',fontSize:'large'}}>Connect me with Linkedin!</p>
                <div className='Links'>
                    <a href='https://www.instagram.com/lee__naveen__20/' alt="true"><img src={Instagram} alt='#' id='linkedin'/></a>
                    <a href='https://www.linkedin.com/in/naveen-raj-4b8867185/' alt="true"><img src={Linkedin} alt='#' id='linkedin'/></a>
                    <a href='https://www.facebook.com/profile.php?id=100035787917109' alt="#"><img src={Facebook} alt='#' id='linkedin'/></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;