import React from 'react';
import Project from './Project';

const projects = [
    {
        id: 3,
        name: 'HOWDYNEIGHBOR',
        repo: 'https://github.com/thatthembritt/howdyNeighbor',
        deployed: 'https://howdyneighbor.herokuapp.com',
        description: 'Online platform for connecting people that need help with people in their community that can help.',
        img: 'Prework.png'
    },
    {
        id: 2,
        name: 'dreamStream',
        repo: 'https://github.com/btempini/Dream-Journal',
        deployed: 'https://dream-stream270.herokuapp.com/',
        description: 'Social media app for people to record their dreams and nightmares to share with others.',
        img: 'dreamStreamSS.png'
    },
    {
        id: 3,
        name: 'Where ISS It?',
        repo: 'https://github.com/RyanStephens6/distance-from-ISS',
        deployed: 'https://ryanstephens6.github.io/distance-from-ISS/',
        description: 'A website that allows users to see how far away the International Space Station is from their location.',
        img: 'Website Screenshot.png'
    },
    {
        id: 4,
        name: 'Online Text Editor',
        repo: 'https://github.com/mandresp/text-editor',
        deployed: 'https://andres-text-editor.herokuapp.com/',
        description: 'Online text editor deployed to Heroku. Additionally it has PWA functionality for working offline.',
        img: 'text-editor.png'
    },
    {
        id: 5,
        name: 'Online Note Taker',
        repo: 'https://github.com/mandresp/note-taker',
        deployed: 'https://aqueous-spire-74769.herokuapp.com/',
        description: 'Online note taker that can add, edit, and delete notes that persist across sessions in your local storage.',
        img: 'note-taker.png'
    },
    {
        id: 6,
        name: 'README Generator',
        repo: 'https://github.com/mandresp/readme-generator',
        deployed: 'https://github.com/mandresp/readme-generator',
        description: 'CLI application that generates a customized README file based on user input.',
        img: 'readme.png'
    },
];

export default function portfolio() {
  return (
    <div className = 'd-flex'>
        {projects.map(project => (<Project project = {project} key={project.id} />))}
    </div>
  );
}