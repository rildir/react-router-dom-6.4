import { Link, useRouteError } from "react-router-dom"

const ProjectsError = () => {
    const error = useRouteError()

    return (
        <div className='projects-error'>
            <h2>Error</h2>
            <p>{error.message}</p>
            <Link to="/">Back to the homepage</Link>
        </div>
    )
}

export default ProjectsError