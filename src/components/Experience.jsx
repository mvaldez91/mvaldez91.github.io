import React from 'react';


import H2Styled from '../styles/H2Styled';
import H3Styled from '../styles/H3Styled';
import PStyled from '../styles/PStyled';


const Experience = props=>(
    <div className="Experience">
        <H2Styled name="Experience"></H2Styled>
        <div className="Experience-container">
            {props.data.map((exp, idx) =>
                <div className="Experience-item" key={`Experience-${idx}`}>
                    <H3Styled>{exp.jobTitle} - {exp.company}</H3Styled>
                    <PStyled>{exp.jobDescription}</PStyled>
                </div>
            )}
        </div>
    </div>
);

export default Experience;