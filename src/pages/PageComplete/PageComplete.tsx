import { useSelector } from 'react-redux'
import { RootState } from '../../store/index'
import { MessageTopText } from './PageCompleteStyles'
import { Container, Title } from '../../styles/globalStyles'

function PageComplete() {
    const firstNameState = useSelector(
        (state: RootState) => state.userInfo.userInfo.firstName
    )

    return (
        <Container>
            <Title>
                Thank you, {firstNameState}! Your extra answers have been
                submitted.
            </Title>
            <MessageTopText>
                These will allow our expert team to begin working on your case
                right away, and we look to get back to you as soon as possible.
            </MessageTopText>
            <Title>
                Don't forget to keep an eye out for a call or email from a
                member of our team concerning your claim.
            </Title>
        </Container>
    )
}

export default PageComplete
