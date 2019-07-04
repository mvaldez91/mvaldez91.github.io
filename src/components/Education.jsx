import React from 'react';

import H2Styled from '../styles/H2Styled';
import H3Styled from '../styles/H3Styled';
import PStyled from '../styles/PStyled';

const Education = props =>(
    <div className="Education">
        <H2Styled name="Educación" />
            <div className="Education-container">
                {props.data.map((edu,idx) =>
                    <div className="Education-item" key={`Edu-${idx}`}>
                        <H3Styled>{edu.degree} - {edu.institution}
                        </H3Styled>
                        <span>{edu.startDate} - {edu.endDate}</span>
                        <PStyled name={edu.description} />
                    </div>
                )
                }
            </div>
    </div>
);

export default Education;