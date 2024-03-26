import React from "react";
import "./Skill.css";
import ProLang  from "./ProLang.js";
import WebLang from "./WebLang.js";
import Navi from './Nav.js';
import Leetcode from './LeetCode.jpg';
import HackerRank from './HackerRank.jpg';
import SkillRack from './SkillRack.jpg';
import Footer from './Footer.js';
const Skills = () => 
{
    return(
        <div className="FillIt">
            <div className='SMain'>
                <div>
                    <Navi/>
                    <div className='SCenterBody'>
                        <p id='animate'>LET'S EXPLORE MY SKILLS IN <span id="Big">PROGRAMMING LANGUAGES</span></p>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            
            <div className="Programming">
                <div className="ProLang">
                    <h2>PROGRAMMING LANGUAGES</h2>
                    <p style={{marginTop:'10px',marginBottom:'10px'}}>Being a Computer Science Student, I have a good knowledge in programming languages such as C,C++. I learned to implement the various 'Data Structures such as Linked List, Tree and Graph. It is very useful optimize the problems in problem solving portion. And I also learned OOPS(Object Oriented Programming) in the Object based Languages such as Java and Python(Basic).</p>
                </div>
                <br></br>
                <h2 style={{marginLeft:'50px'}}>MY LEVELS OF KNOWLEDGE IN PROGRAMMING LANGUAGES</h2>
                <ProLang/>
            </div>
            <div className="WEB">
                <div className="WD">
                    <h2>WEB DEVELOPING</h2>
                    <p style={{marginTop:'15px',marginBottom:'10px'}}>Dynamic and motivated college student with a strong foundation in web development technologies, including HTML, CSS, and JavaScript, seeking an internship or entry-level position to apply and further enhance my skills. Possessing a solid understanding of front-end development and a basic knowledge of React, I am eager to contribute to innovative projects and gain practical experience in a professional environment.</p>
                </div>
                <br></br>
                <h2 style={{marginLeft:'50px'}}>MY LEVELS OF KNOWLEDGE IN WEB DEVELOPING</h2>
                <WebLang/>`
            </div>
            <div className="Problem">
                <div className="ProSol">
                    <h2>PROBLEM SOLVING</h2>
                    <p style={{marginTop:'15px',marginBottom:'10px'}}>As a college student deeply passionate about problem-solving, I am seeking opportunities to leverage my analytical mindset and critical thinking skills in a dynamic and challenging environment. Eager to contribute to projects that require creative solutions, I am committed to applying my problem-solving abilities to address complex challenges and make meaningful contributions to the success of a team or organization.</p>
                    <div className="Sites">
                        <a href="https://leetcode.com/naveenrajvikraman/" alt="#"><img src={Leetcode} alt="#" id="Leet"></img></a>
                        <a href="http://www.skillrack.com/profile/374120/39a27cea8bb4bc98328f7b7216931acda00d23b5"><img src={SkillRack} alt="#" id="Leet"></img></a>
                        <a href="https://www.hackerrank.com/profile/naveenrajvikram1"><img src={HackerRank} alt="#" id="Leet"></img></a>
                    </div>
                </div>
            </div>
            <div>
                <div className="Opera">
                    <h2>OPERATING SYSTEM</h2>
                    <p>A dedicated college student with a keen interest in operating systems, I am actively seeking opportunities to apply my knowledge and skills in a professional setting. Eager to contribute to projects that involve system architecture, process management, and resource optimization, I am committed to leveraging my understanding of operating systems to enhance the performance and reliability of computing environments.</p>
                    <br></br>
                    <h3 style={{marginLeft:'50px'}}>Known concepts</h3>
                    <ul>
                        <li>In-depth knowledge of operating system concepts, including process management, memory allocation, file systems, and system calls.</li>
                        <li>I have a knowledge in using and implementing synchronization mechanisms, such as semaphores and mutexes, to ensure concurrent program execution. And I also have a knowledge in both Windows based and Linux based Operating Systems.</li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="Net">
                    <h2>NETWORKING</h2>
                    <p> I am seeking opportunities to apply my knowledge and skills in a professional environment. Eager to contribute to projects involving network design, implementation, and optimization, I am committed to leveraging my understanding of networking protocols, security, and infrastructure to enhance communication and connectivity in the digital landscape.</p>
                    <br></br>
                    <h3 style={{marginLeft:'50px'}}>Known concepts</h3>
                    <ul>
                        <li>I hava an knowledge in networking concepts, including TCP/IP, DNS, DHCP, and subnetting.</li>
                        <li>Knowledge of emerging technologies, including software-defined networking (SDN) and network virtualization.</li>
                    </ul>
                </div>
            </div>
            <br></br>
            <Footer/>
        </div>
    );
}
export default Skills;