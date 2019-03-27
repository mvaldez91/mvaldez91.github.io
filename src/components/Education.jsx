import React from 'react';

const Education = props =>(
    <div className="Education">
        <div className="Education-container">
            {props.data.map((edu,idx) =>
                <div className="Education-item" key={`Edu-${idx}`}>
                    <h3>{edu.degree} {edu.institution}
                        <span>{edu.startDate} - {edu.endDate}</span>
                    </h3>
                    <p></p>
                </div>
             )
            }
        </div>
    </div>
);

export default Education;