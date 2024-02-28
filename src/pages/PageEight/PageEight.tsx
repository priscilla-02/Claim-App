import { useDispatch } from 'react-redux'
import { setIva } from '../../reducer/UserSlice'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/index'
import { useNavigate } from 'react-router-dom'
import { Header, Title } from '../../styles/globalStyles'
import { Button, Container, TitleBox } from './PageEightStyle'

function PageEight() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const firstNameState = useSelector(
        (state: RootState) => state.userInfo.userInfo.firstName
    )

    const handleSumbit = (ivaBol: boolean) => {
        dispatch(setIva(ivaBol))
        navigate('/page/complete')
    }

    return (
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
    )
}

export default PageEight
