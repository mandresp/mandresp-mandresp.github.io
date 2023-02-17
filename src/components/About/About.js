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
                Recently graduated Full Stack Developer with over five years Marketing and Real Estate work experience as well as dual International Business/Economics degree. Adaptive – Multi-cultural having lived in the US, Hong Kong and London. Fluent in written and spoken Mandarin and conversationally fluent in Cantonese. Creative – Skilled in Art/Design/Music.
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