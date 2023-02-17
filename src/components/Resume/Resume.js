import React from 'react'
import './style.css';
import pdf from '../../Assets/Images/Marcelo Perez CV.pdf'

export default function Resume() {
    return (
        <section>
            <h2>
                My Resume
            </h2>
            <p>
                {/* <a href="./Assets/Marcelo Perez CV.pdf" target="_blank" rel="noreferrer">My Resume</a> */}
            </p>
            <object data={pdf} type="application/pdf" width="100%" height="800"></object>
        </section>
    )
}