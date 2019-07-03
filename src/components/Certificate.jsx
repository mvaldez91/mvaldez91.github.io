import React from 'react';

import H2Styled from '../styles/H2Styled';
import H3Styled from '../styles/H3Styled';
import PStyled from '../styles/PStyled';

const Certificate = props =>(
    <div className="Certificate">
        <H2Styled name="Cursos"></H2Styled>
        {props.data.map((cer,idx)=>
            <div className="Certificate-container" key={`Certificate-${idx}`}>
                <div className="Certificate-item" >
                    <H3Styled>{cer.name}</H3Styled>
                    <PStyled>{cer.date}</PStyled>
                    <PStyled name={cer.description}></PStyled>
                </div>
            </div>
        )}
    </div>
);

export default Certificate;