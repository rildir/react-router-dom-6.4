import React from 'react'
import { Outlet } from 'react-router-dom'

const ProjectsLayout = () => {
    return (
        <div className='projects-layout'>
            <h2>Projects</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>

            <Outlet />
        </div>
    )
}

export default ProjectsLayout