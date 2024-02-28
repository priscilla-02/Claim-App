import { useDispatch } from 'react-redux'
import { setIva } from '../../reducer/UserSlice'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/index'
import { useNavigate } from 'react-router-dom'
import { Header, Title } from '../../styles/globalStyles'
import { Button, Container, TitleBox } from './PageEightStyle'
import axios from 'axios'
import { open } from '../../reducer/PopupSlice'

function PageEight() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userSubmissionState = useSelector(
        (state: RootState) => state.userInfo
    )
    const firstNameState = useSelector(
        (state: RootState) => state.userInfo.userInfo.firstName
    )

    const handleSumbit = async (ivaBol: boolean) => {
        console.log('Data in submittion', userSubmissionState)
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
            console.log('Data submitted successfully:', response.data)
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
