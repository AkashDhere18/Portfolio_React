import React from 'react'
import './home.css'

const Home = () => {
    return (
        <>
            <div className='HomeMain text-white border px-5' style={{ backgroundColor: "#1A1A2E", margin: "1.5rem 1rem", padding: "2rem 1.5rem" }}>
                <div className='HeroHome '>
                    <button className='rounded-5 border-0' style={{ color: "#E85D3A", backgroundColor: "#914633a3" }}><span className='fw-6'>.</span>Open To Work</button>
                    <div className='d-flex justify-content-between '>

                        <div className='hero-left' >
                            <h1>Hello, Im <br /> <span style={{ color: "#E85D3A" }}>Akash Dhere</span></h1>
                            <p>Full-stack developer crafting performant web experiences. Passionate about React, Node.js, and clean system design</p>
                            <button>View Projects</button>
                            <button>Contact Me</button>
                        </div>
                        <div className='Hero-right'>
                            <div style={{ height: "100px", width: "100px", borderRadius: "50px", backgroundColor: "#914633a3", margin:"10rem 1rem" }}></div>
                        </div>
                    </div>
                </div>
                <div className='TechStack'>
                    <h4>Tech stack</h4>
                    <div className='techList'>
                        <ul>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                            <li>React.js</li>
                        </ul>
                    </div>
                </div>
                <div className='FeaturedProjects'>
                    <h4>Featured Projects</h4>
                    <div className='d-flex'>
                        <div className='project-home w-25'>
                            <div className='project-head d-flex justify-content-between'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                                </svg>
                                <p>E-commerce</p>
                            </div>
                            <div className='project-content'>
                                <b>ShopFlow Dashboard</b>
                                <p>Multi-vendor e-commerce platform with real-time analytics built on React & Node.js</p>

                            </div>
                        </div>
                        <div className='project-home w-25'>
                            <div className='project-head d-flex justify-content-between'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                                </svg>
                                <p>E-commerce</p>
                            </div>
                            <div className='project-content'>
                                <b>ShopFlow Dashboard</b>
                                <p>Multi-vendor e-commerce platform with real-time analytics built on React & Node.js</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home