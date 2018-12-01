import React from 'react';
import Header from '../components/Header';
import Presentation from '../components/Presentation';
import Avatar from '../components/Avatar';
import Reassurance from '../components/Reassurance';
const HomePage = () => (
    <div
        className="container"
        style={{
            maxWidth: 1280,
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around'
        }}
    >
        <Header />
        <Presentation />
        <Avatar />
        <Reassurance />
    </div>
);

export default HomePage;
