import { Link } from 'react-router-dom'
import { Header } from '../../styles/globalStyles'

function NotFound() {
    return (
        <>
            <Header>Page Not Found</Header>
            <Link to="/">Home</Link>
        </>
    )
}

export default NotFound
