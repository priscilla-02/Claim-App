import { useNavigate } from 'react-router-dom'
import { ContinueButton, Title } from '../../styles/globalStyles'
import { Container, Message, MessageBox } from './PageSorryStyle'

function PageSorry() {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    return (
        <Container>
            <Title>We’re sorry about that!</Title>
            <MessageBox>
                <Message>
                    Based on your given answers, it looks like you won’t qualify
                    to claim for compensation.
                </Message>
                <Message>
                    If you believe this was a mistake, please try again below.
                </Message>
            </MessageBox>
            <ContinueButton onClick={handleClick}>Start Over</ContinueButton>
        </Container>
    )
}

export default PageSorry
