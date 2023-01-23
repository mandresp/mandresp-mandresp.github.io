import React from 'react';

export default function Project({project}) {
  return (
    <div className="container">
      <div className="card">
        <img
          className="card-img-top"
          src={require(`../../Assets/Images/${project.img}`)}
          alt="Card cap"
        />
        <div className="card-body">
        <h5 className="card-title">{project.name}</h5>
          <p className="card-text">{project.description}</p>
            <a href={project.repo} className="btn btn-primary">
              See {project.name} GitHub Repository.
            </a>
            <a href={project.deployed} className="btn btn-primary">
              See {project.name} Deployed Application.
            </a>
        </div>
      </div>
    </div>
  );
}
