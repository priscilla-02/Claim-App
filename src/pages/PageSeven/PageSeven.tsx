import { useSelector } from 'react-redux'
import { RootState } from '../../store/index'
import { useNavigate } from 'react-router-dom'

import { ContinueButton, Header, Title } from '../../styles/globalStyles'
import {
    Container,
    DisclaimerText,
    DisclaimerTextSpan,
    ReviewText,
    ReviewTextSpan,
    SignatureContainer,
} from './PageSevenStyle'

function PageSeven() {
    const navigate = useNavigate()
    const firstNameState = useSelector(
        (state: RootState) => state.userInfo.userInfo.firstName
    )

    const handleClaimSumbit = () => {
        navigate('/page/8')
    }

    return (
        <Container>
            <Header>
                Copy You’re almost finished, {firstNameState}. You just need to
                review this…
            </Header>
            <Title>Please sign here to submit your Plevin claim.</Title>
            <SignatureContainer>
                <ReviewText>
                    Review your <ReviewTextSpan>claim pack here</ReviewTextSpan>
                    .
                </ReviewText>
            </SignatureContainer>
            <DisclaimerText>
                <DisclaimerTextSpan>Disclaimer:</DisclaimerTextSpan> By
                proceeding, you agree to be the terms listed in Privacy Policy.
                Additionally, you agree to be contacted by Veriform Limited,
                OPOP Services Limited, or any of our affiliated partners in
                regards to your claim and future opportunities.
            </DisclaimerText>
            <ContinueButton onClick={() => handleClaimSumbit()}>
                Submit Claim
            </ContinueButton>
        </Container>
    )
}

export default PageSeven
