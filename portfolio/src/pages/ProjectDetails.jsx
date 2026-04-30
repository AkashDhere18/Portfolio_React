import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import projectList from '../projects'

const ProjectDetails = () => {
  const { projectID } = useParams()

  const PROJECT = projectList.find((p) => p.id == projectID)

  if (!PROJECT) {
    return <h3 className="text-center mt-5 text-danger">Project Not Found</h3>
  }

  return (
    <div className="container mt-4">

      <div className="card shadow-lg p-4">

        {/* Title */}
        <h2 className="text-primary mb-2">{PROJECT.title}</h2>

        {/* Year */}
        <h6 className="text-muted mb-3">{PROJECT.year}</h6>

        {/* Description */}
        <p>{PROJECT.description}</p>

        {/* Tools */}
        <div className="mb-3">
          <h5>Technologies Used:</h5>
          {PROJECT.tools.map((tool, index) => (
            <span key={index} className="badge bg-secondary me-2 mb-2">
              {tool}
            </span>
          ))}
        </div>

        {/* GitHub Link */}
        <div className="mb-3">
          <a
            href={PROJECT.githubLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark"
          >
            View Code
          </a>
        </div>

        {/* Nested Routes Buttons */}
        {/*<div className="d-flex gap-3 mb-4">
          <Link to="like" className="btn btn-outline-success">
            👍 Like
          </Link>

          <Link to="comments" className="btn btn-outline-primary">
            💬 Comments
          </Link>
        </div>

        
        <div className="border-top pt-3">
          <Outlet />
        </div> */}
        <div className="d-flex gap-3 mb-4">

          <Link to="likes" className="btn btn-outline-success">👍 Like</Link>

          <Link to="comments" className="btn btn-outline-success">💬 Comments</Link>

        </div>

        <div className="border-top pt-3">
          <Outlet />
        </div>

      </div>
    </div>
  )
}

export default ProjectDetails