import { useDispatch } from 'react-redux'
import { open } from '../../reducer/PopupSlice'
import { setIva } from '../../reducer/UserSlice'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/index'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Header, Title } from '../../styles/globalStyles'
import { Button, Container, TitleBox } from './PageEightStyles'

function PageEight() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const firstNameState = useSelector(
        (state: RootState) => state.userInfo.userInfo.firstName
    )
    const userSubmissionState = useSelector(
        (state: RootState) => state.userInfo
    )

    const handleSumbit = async (ivaBol: boolean) => {
        dispatch(setIva(ivaBol))

        //For Test
        dispatch(
            open({ text: 'Submittion Successful for Test', type: 'success' })
        )
        navigate('/page/complete')
        //

        try {
            const response = await axios.post('API-endpoint', {
                userSubmissionState: userSubmissionState,
            })
            dispatch(open({ text: 'Submittion Successful', type: 'success' }))
            navigate('/page/complete')
        } catch (error) {
            console.error('Error submitting data:', error)
            //Hidden For Test
            // dispatch(open({ text: 'Submittion UnSuccessful', type: 'error' }))
            //
        }
    }

    return (
        <>
            <Container>
                <Header>
                    We just need a couple more things from you, {firstNameState}
                    ...
                </Header>
                <TitleBox>
                    <Title>
                        Have you ever been in or are proposed to be in an IVA or
                        declared bankrupt?*
                    </Title>
                </TitleBox>
                <Button colour={true} onClick={() => handleSumbit(true)}>
                    Yes
                </Button>
                <Button colour={false} onClick={() => handleSumbit(false)}>
                    No
                </Button>
            </Container>
        </>
    )
}

export default PageEight
