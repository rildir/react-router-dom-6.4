import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/buttons/Button'

const NotFound = () => {
    return (
        <div>Oops! Page not found.
            <Button type="button" buttonType="primary"><Link to="/">Go to homepage </Link></Button>
        </div>
    )
}

export default NotFound