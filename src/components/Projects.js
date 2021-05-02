import React from 'react'
import Card from './Card'
import '../css/projects.css'
import data from '../projects-links'

function Projects() {

    return (
        <div id="projects-container">
            <h2>These are some of my projects</h2>

            <div id="projects">
                {
                    data.map((info,index) => {
                        return <Card info={info} key={index} />
                    })
                }
            </div>
            
        </div>
    )
}

export default Projects
