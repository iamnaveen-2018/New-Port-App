import React from "react";
import Res from './Naveenraj.jpg';
import Navi from './Nav';
import Footer from './Footer';
import './Resume.css';
const Resume = () => {
    const Download = () => {
        const resumePath = process.env.PUBLIC_URL+'Naveenraj.pdf';
        const link = document.createElement('a');
        link.href = resumePath;
        link.download = 'Resume.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return(
        <div className="Resume">
            <Navi/>
            <h1 style={{marginTop:'90px'}}>RESUME</h1>
            <div className="ResumeImage">
                <img src={Res} alt="#" id="ResImage"></img>
                <button onClick={Download}>Download</button>
            </div>
            <Footer/>
        </div>
    );
}

export default Resume;