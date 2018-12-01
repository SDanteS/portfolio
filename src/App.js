import React, { Component } from 'react';
import Header from './components/Header';
import Presentation from './components/Presentation';
import rick from './static/rick.png';
import Reassurance from './components/Reassurance';
class App extends Component {
    render() {
        return (
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
                <Reassurance />
            </div>
        );
    }
}

export default App;
