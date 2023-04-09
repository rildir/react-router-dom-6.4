import { useParams, useLoaderData } from 'react-router-dom'

const ProjectDetails = () => {
    const { id } = useParams()
    const project = useLoaderData()

    return (
        <div className='project-details'>
            <h2>Project Details from {project.title}</h2>
            <p>The technology used: {project.technology}</p>
            <p>Location: {project.location}</p>
            <div className="details">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis neque animi, dolores maxime quidem libero vel unde deserunt culpa a, nulla ratione, voluptates harum ipsa architecto illo reprehenderit! Modi, illo!</p>
            </div>
        </div>
    )
}

export default ProjectDetails

export const projectDetailsLoader = async ({ params }) => {
    const { id } = params

    const res = await fetch("http://localhost:4000/projects/" + id)

    if (!res.ok) {
        throw Error('Could not find that projects')
    }

    return res.json()
}