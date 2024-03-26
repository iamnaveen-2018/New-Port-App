import React from 'react';
import Home from './Home';
import Skill from './Skills';
import Resume from './Resume';
import {Routes,Route} from 'react-router-dom';
const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' Component={Home}></Route>
                <Route path='/skills' Component={Skill}></Route>
                <Route path='/resume' Component={Resume}></Route>
            </Routes>
        </div>
    );
}

export default App;