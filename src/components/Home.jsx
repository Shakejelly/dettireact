import React from 'react';
import cvBild from '../assets/cvBild.jpg'

function Home() {
    return (
        <div className="intro">
            <h4>Hello, my name is</h4>
            <h1>Fredrich</h1>
            <h3>I am a Fullstack .Net Developer student</h3>
            <img src={cvBild} alt="cvbild" className="cvbild" />    
        </div>
    );
}
export default Home;