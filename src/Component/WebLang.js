import React from 'react';
import './ProLang.css';
const WebLang = () => {
    return (
        <div className='Full'>
            <div className='container'>
                <div className='progress' id='HTML'>
                    <h3>90<span>%</span></h3>
                    <h4>HTML</h4>
                </div>
                <div className='progress' id='CSS'>
                    <h3>70<span>%</span></h3>
                    <h4>CSS</h4>
                </div>
                <div className='progress' id='JAVASCRIPT'>
                    <h3>70<span>%</span></h3>
                    <h4>JavaScript</h4>
                </div> 
                <div className='progress' id='REACT'>
                    <h3>50<span>%</span></h3>
                    <h4>React</h4>
                </div>
            </div>
        </div>
    );
}

export default WebLang;