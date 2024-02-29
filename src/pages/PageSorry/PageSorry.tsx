import { useNavigate } from 'react-router-dom'
import { Container, ContinueButton, Title } from '../../styles/globalStyles'
import { Message, MessageBox, SorryHeader } from './PageSorryStyles'

function PageSorry() {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    return (
        <Container>
            <SorryHeader>We’re sorry about that!</SorryHeader>
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
