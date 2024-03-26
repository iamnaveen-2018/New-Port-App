import React from 'react';
import './ProLang.css';
const ProLang = () => {
    return (
        <div className='Full'>
            <div className='container'>
                <div className='progress' id='CC'>
                    <h3>90<span>%</span></h3>
                    <h4>C</h4>
                </div>
                <div className='progress' id='JAVA'>
                    <h3>85<span>%</span></h3>
                    <h4>Java</h4>
                </div>
                <div className='progress' id='PYTHON'>
                    <h3>70<span>%</span></h3>
                    <h4>Python</h4>
                </div> 
                <div className='progress' id='CPP'>
                    <h3>65<span>%</span></h3>
                    <h4>C++</h4>
                </div>
            </div>
        </div>
    );
}

export default ProLang;