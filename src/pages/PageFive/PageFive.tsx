import { Link } from 'react-router-dom'
import { ContinueButton, Header } from '../../styles/globalStyles'

function PageFive() {
    return (
        <>
            <Header>Page 5</Header>
            <Link to="/page/6">
                <ContinueButton>Continue</ContinueButton>
            </Link>
        </>
    )
}

export default PageFive
