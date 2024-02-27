import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/index'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { setPhoneNo } from '../../reducer/UserSlice'
import { open, close } from '../../reducer/PopupSlice'
import {
    ContinueButton,
    Header,
    InputBox,
    MessageInfoContainer,
    MessageInfoText,
    Title,
} from '../../styles/globalStyles'

import { Container } from './PageSixStyle'

function PageSix() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [phoneNoInput, setphoneNoInput] = useState<string>('')
    const firstNameState = useSelector(
        (state: RootState) => state.userInfo.userInfo.firstName
    )

    const handlePhoneNoSumbit = () => {
        const phoneNoRegex =
            /^(?:(?:\+44\s?|0)(?:7[0-9]|20\d)\s?\d{4}\s?\d{4}|1\d{10})$/

        const checkValidPhonenNo = phoneNoRegex.test(phoneNoInput)

        if (checkValidPhonenNo) {
            dispatch(close())
            console.log('submit phone no')
            dispatch(setPhoneNo(phoneNoInput))
            navigate('/page/7')
        } else {
            dispatch(open({ text: 'Invalid UK Phone Number', type: 'error' }))
        }
    }

    return (
        <>
            <Container>
                <Header>
                    We just need a couple more things from you, {firstNameState}
                    ...
                </Header>
                <Title>Please enter your phone number in the box below</Title>
                <MessageInfoContainer>
                    <img src="/pageThree-message.svg" alt="Message Icon" />
                    <MessageInfoText>
                        We'll use this to provide you with updates concerning
                        your claim.
                    </MessageInfoText>
                </MessageInfoContainer>

                <InputBox
                    key=""
                    type="tel"
                    id="phoneNo"
                    name="phoneNo"
                    placeholder="Your Phone Number"
                    value={phoneNoInput}
                    onChange={(e) => setphoneNoInput(e.target.value)}
                ></InputBox>
            </Container>

            <ContinueButton onClick={() => handlePhoneNoSumbit()}>
                Continue
            </ContinueButton>
        </>
    )
}

export default PageSix
