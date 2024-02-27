import { Link } from 'react-router-dom'
import { ContinueButton, Header } from '../../styles/globalStyles'

function PageSix() {
    return (
        <>
            <Header>Page 6</Header>
            <Link to="/page/7">
                <ContinueButton>Continue</ContinueButton>
            </Link>
        </>
    )
}

export default PageSix
