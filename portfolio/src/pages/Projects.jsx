import React from 'react'
import projects from '../projects'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className='box' style={{ backgroundColor: "red" }}>
      <h1>Project List</h1>
      <div className="container">
                <div className="row">
                    {
                        projects.map((p, i) => (
                            <div className="col" key={i}>
                                <div className="card" style={{width: "18rem"}}>
                                    <div className="card-body">
                                        <h5 className="card-title">{p.title}</h5>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">{p.year}</h6>
                                        {/* <Link to={`/projects/${p.id}`} className="card-link">View Details</Link> */}
                                        <Link to={`/projects/${p.id}`} className='card-link'>View Details</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

    </div>
  )
}

export default Projects