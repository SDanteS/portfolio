import React from 'react';

const Logo = ({ logo }) => (
    <figure style={{ marginTop: 40 }}>
        <img style={{ width: '100%', minWidth: 100, display: 'block' }} src={logo} alt="..." />
    </figure>
);

export default Logo;
