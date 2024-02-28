import { Link } from 'react-router-dom'
import { Container } from './NotFoundStyles'
import { ContinueButton } from '../../styles/globalStyles'

function NotFound() {
    return (
        <Container>
            <header>Page Not Found :(</header>
            <Link to="/">
                <ContinueButton>Go to Home</ContinueButton>
            </Link>
        </Container>
    )
}

export default NotFound
