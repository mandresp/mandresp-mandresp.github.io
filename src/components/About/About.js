import React from 'react'
import './style.css';
import ReactAudioPlayer from 'react-audio-player'

function About() {
    return (
        <section id="about-me" className="about-me">
            <h2>
                About Marcelo Andres Perez
            </h2>
            <p>
                I am a recent coding bootcamp graduate with an interest in working in front end design and React I want to grow and learn in a new position. I am an adaptive and creative individual, proficient in working across cultures in Asia and Europe through having lived in the U.K., Hong Kong, and the U.S.A. I hope to leverage my background in marketing to assist with design and presentation in my coding.
            </p>
            <p>
                In my free time I enjoy making music and telling people about my dog Jomas.
            </p>
            <p>
                <a href="https://www.tiktok.com/@mydogjomas" target="_blank" rel="noreferrer">my dog Jomas</a>
            </p>
            <ReactAudioPlayer
                src="../../Assets/chipger.mp3"
                autoPlay
                controls
            />
        </section>
    )
}

export default About;