import React from 'react';
import "./Home.css";
import Human from "./human.jpg";
import Logo from "./Quotes.jpg";
import Footer from "./Footer.js"
import Navi from './Nav.js';
const Home = () => {
    return (
        <div>
            <Navi/>
            <div className='Main'>
                <div>
                    <div className='CenterBody'>
                        <img src={Logo} alt='#' id='IMG1'/>
                        <p id='animate'>I AM NAVEEN RAJ, COMPUTER SCIENCE AND ENGINEERING STUDENT</p>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className='Total'>
                <div className='Continue1'>
                    <div id='PCont'>
                        <u><h1 style={{fontFamily:'Segoe UI',textAlign:'center'}}>Personal Introduction</h1></u>
                        <p id='Personal'>
                        Hello! My name is Naveen Raj, and I am currently a dedicated and passionate Computer Science major here at Karpagam College of Engineering. As a college student navigating the challenging yet rewarding journey of pursuing my Bachelor's in Computer Science, I have found my calling in the world of technology and innovation. As I continue on this journey, I am not just gaining technical expertise but also honing essential skills such as problem-solving, critical thinking, and effective communication.I am excited to connect with fellow students, faculty, and professionals who share my enthusiasm for Computer Science. Let's embark on this learning adventure together, supporting each other's growth and making meaningful contributions to the ever-evolving world of technology.
                        </p>
                    </div>
                    <div id='PIMG'>
                        <img src={Human} alt='#'id="IMG2"/>
                    </div>
                </div>
                <div className='Continue2'>
                    <div>
                        <u><h1 style={{fontFamily:'Segoe UI',textAlign:'center'}}>CORE VALUES</h1></u>
                    </div>
                    <div id='Values'>
                        <div id='CVS'>
                            <u><h2 style={{fontFamily:'Segoe UI',fontSize:'25px'}}>AMBITION</h2></u>
                            <p id='Personal'>What this means to me is pushing the boundaries. Challenging current ideas and perspectives of what we currently know. Setting a goal that is ambitious. Throughout my leadership career, I have always pushed and challenged myself. Adapting and rising to new challenges. This is important to me because by being ambitious, I was able to open up the opportunities and got me to where I am today.</p>
                        </div>
                        <div  id='CVS'>
                            <u><h2 style={{fontFamily:'Segoe UI',fontSize:'25px'}}>PASSION</h2></u>
                            <p id='Personal'>What this means to me is something that will get me motivated to get out of bed every morning. I think passion is not a single item. It is something that give me endless desire and enthusiasm. This is important to me because by being passionate, I am willing to go through great lengths to get what I want.</p>
                        </div>
                        <div  id='CVS'>
                            <u><h2 style={{fontFamily:'Segoe UI',fontSize:'25px'}}>HOBBY</h2></u>
                            <p id='Personal'>What this means to me is something that will get me motivated to get out of bed every morning. I think passion is not a single item. It is something that give me endless desire and enthusiasm. This is important to me because by being passionate, I am willing to go through great lengths to get what I want.</p>
                        </div>
                    </div>
                </div>  
                <u><h1>Leadership Qualities</h1></u>
                <div  className='LeaderShip'> 
                    <div>
                        <p id='Personal'>In my journey, I take pride in embodying several key leadership qualities that have been instrumental in driving success and fostering a positive and collaborative work environment. One of my central leadership tenets revolves around the ability to inspire and motivate others. I believe that a leader's role is not merely to direct but to ignite enthusiasm, cultivate a shared vision, and empower team members to reach their full potential.</p>
                        <p id='Personal'>Empathy is a crucial aspect of my leadership style. Understanding the unique strengths, challenges, and aspirations of team members allows me to tailor my approach to leadership, ensuring that individuals feel supported and motivated. I believe that a leader should not only drive results but also prioritize the well-being and professional growth of their team.</p>
                        <p id='Personal'>Lastly, my leadership portfolio is a testament to my commitment to continuous improvement. I actively seek opportunities for personal and professional development, encouraging a mindset of growth within the team. By leading through example and fostering a culture of continuous learning, I aim to inspire and elevate those around me.</p>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}
export default Home;