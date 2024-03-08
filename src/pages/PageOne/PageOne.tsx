import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCreditUse } from '../../store/reducer/UserSlice'
import { Container, Header, Title } from '../../styles/globalStyles'
import { Button } from './PageOneStyles'

function PageOne() {
    const dispatch = useDispatch()

    const creditUseSelection = (creditUsedBol: boolean) => {
        dispatch(setCreditUse(creditUsedBol))
    }

    return (
        <Container>
            <Header>Let’s get started with your free Plevin check!</Header>
            <Title>
                Have you had a credit card, loan or mortgage in the past?
            </Title>
            <Link to="/page/2">
                <Button colour={true} onClick={() => creditUseSelection(true)}>
                    Yes
                </Button>
            </Link>
            <Link to="/page/sorry">
                <Button
                    colour={false}
                    onClick={() => creditUseSelection(false)}
                >
                    No
                </Button>
            </Link>
        </Container>
    )
}
export default PageOne
