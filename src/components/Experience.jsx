import React from 'react';

const Experience = props=>(
    <div className="Experience">
        <div className="Experience-container">
            {props.data.map((exp, idx) =>
                <div className="Experience-item">
                    <h3>{exp.jobTitle} - {exp.company}</h3>
                    <p>{exp.jobDescription}</p>
                </div>
            )}
        </div>
    </div>
);

export default Experience;