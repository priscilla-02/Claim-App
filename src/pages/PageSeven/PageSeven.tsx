import { Link } from 'react-router-dom'
import { ContinueButton, Header } from '../../styles/globalStyles'

function PageSeven() {
    return (
        <>
            <Header>Page 7</Header>
            <Link to="/page/8">
                <ContinueButton>Continue</ContinueButton>
            </Link>
        </>
    )
}

export default PageSeven
