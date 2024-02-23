import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCreditUse } from '../reducer/UserSlice'

import {
    Container,
    Header,
    Title,
    ButtonYes,
    ButtonNo,
} from '../styles/pageOneStyles'

function PageOne() {
    const dispatch = useDispatch()

    const creditUseFunction = (creditUsedBol: boolean) => {
        dispatch(setCreditUse(creditUsedBol))
    }

    return (
        <Container>
            <Header>Let’s get started with your free Plevin check!</Header>
            <Title>
                Have you had a credit card, loan or mortgage in the past?
            </Title>
            <Link to="/page/2">
                <ButtonYes onClick={() => creditUseFunction(true)}>
                    Yes
                </ButtonYes>
            </Link>
            <ButtonNo onClick={() => creditUseFunction(false)}>No</ButtonNo>
        </Container>
    )
}
export default PageOne
