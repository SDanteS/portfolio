import React from 'react';
import rick from '../../static/rick.png';
const Avatar = () => (
    <section
        className="section"
        style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
        }}
    >
        <figure
            className="avatar avatar-xl center"
            data-initial="SS"
            style={{ width: 210, height: 210, marginTop: 40 }}
        >
            <img src={rick} alt="..." />
        </figure>
    </section>
);

export default Avatar;
