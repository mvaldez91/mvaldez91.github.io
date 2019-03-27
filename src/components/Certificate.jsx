import React from 'react';

const Certificate = props =>(
    <div className="Certificate">
        {props.data.map((cer,idx)=>
            <div className="Certificate-container">
                <div className="Certificate-item">
                    <h3>{cer.name}</h3>
                    <p>{cer.date}</p>
                    <p>{cer.description}</p>
                </div>
            </div>
        )}
    </div>
);

export default Certificate;