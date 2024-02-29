import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/index'
import { setEmail } from '../../reducer/UserSlice'
import { open, close } from '../../reducer/PopupSlice'
import {
    ContinueButton,
    Header,
    InputBox,
    MessageInfoContainer,
    MessageInfoText,
    Title,
} from '../../styles/globalStyles'
import { Container, TitleBox } from './PageFiveStyles'

function PageFive() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [emailInput, setEmailInput] = useState<string>('')

    const firstNameState = useSelector(
        (state: RootState) => state.userInfo.userInfo.firstName
    )

    const handleEmailSumbit = () => {
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
        const checkValidEmail = emailRegex.test(emailInput)

        if (checkValidEmail) {
            dispatch(close())
            dispatch(setEmail(emailInput))
            navigate('/page/6')
        } else {
            dispatch(open({ text: 'Invalid Email Address', type: 'error' }))
        }
    }

    return (
        <>
            <Container>
                <Header>
                    Thanks for that, {firstNameState}! You’re almost done…
                </Header>
                <TitleBox>
                    <Title>
                        Please enter your email address in the box below
                    </Title>
                </TitleBox>
                <MessageInfoContainer>
                    <img src="/pageThree-message.svg" alt="Message Icon" />
                    <MessageInfoText>
                        We'll use this to provide you with updates concerning
                        your claim.
                    </MessageInfoText>
                </MessageInfoContainer>

                <InputBox
                    key=""
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email Address"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                ></InputBox>
            </Container>

            <ContinueButton onClick={() => handleEmailSumbit()}>
                Continue
            </ContinueButton>
        </>
    )
}

export default PageFive
