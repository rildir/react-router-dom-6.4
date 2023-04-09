import { useLoaderData, Link } from 'react-router-dom'

const Projects = () => {
    const projects = useLoaderData()

    return (
        <div className='projects'>
            {projects.map(project => (
                <Link to={project.id.toString()} key={project.id}>
                    <p>{project.title}</p>
                    <p>Based in {project.location}</p>
                </Link>
            ))}
        </div>
    )
}

export default Projects

export const projectsLoader = async () => {

    const res = await fetch("http://localhost:4000/projects")

    if (!res.ok) {
        throw Error('Could not fetch the list of projects')
    }

    return res.json()

}

