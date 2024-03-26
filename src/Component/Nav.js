import React from "react";
import {Link} from "react-router-dom";

const Navi = (a) => {
    return (
            <div className='Headin'>
                <div className='Name'>
                    <h2 style={{fontSize:"30px"}}>NAVEEN RAJ</h2>
                </div>
                <div className='Navigate'>
                    <div><Link to="/" id='l' onClick={() => {window.scrollTo({top:0,left:0})}}>HOME</Link></div>
                    <div><Link to="/skills" id='l' onClick={() => {window.scrollTo({top:0,left:0})}}>SKILLS</Link></div>
                    <div><Link to="/resume" id='l' onClick={() => {window.scrollTo({top:0,left:0})}}>RESUME</Link></div>
                </div>
            </div>
    );
}

export default Navi;