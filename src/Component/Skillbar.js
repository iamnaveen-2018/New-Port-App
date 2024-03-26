import React from 'react';
import PropTypes from 'prop-types';
import './Skill.css';

const SkillBar = ({ skill, percentage }) => {
    
    return (
        <div className="skill-bar">
        <div className="skill-name">{skill}</div>
        <div className="bar-container">
            <div className="bar" style={{ width: `${percentage}%` }}></div>
        </div>
        <div className="percentage">{`${percentage}%`}</div>
        </div>
    );
};

SkillBar.propTypes = {
  skill: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default SkillBar;
