import React from 'react';

const About = ({avatar,name, profession, bio, address, social})=>(

    <div className="About">
        <div className="About-container">
            <div className="About-avatar">
                <figure>
                    <image src={avatar} alt={name}>

                    </image>
                </figure>
            </div>
            <div className="About-name">
                <h2>{name}</h2>
            </div>
            <div className="About-profession">
                {profession}
            </div>
            <div className="About-desc">
                <p>{bio}</p>
            </div>
            <div className="About-location">
                <p>{address}</p>
            </div>
            <div className="About-social">

            </div>
        </div>
    </div>
)

export default About;