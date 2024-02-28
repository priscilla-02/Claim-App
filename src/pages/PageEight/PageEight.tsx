import { useSelector } from 'react-redux'
import { RootState } from '../../store/index'
import { useNavigate } from 'react-router-dom'
import { Header, Title } from '../../styles/globalStyles'
import { Button, Container } from './PageEightStyle'

function PageEight() {
    const navigate = useNavigate()
    const firstNameState = useSelector(
        (state: RootState) => state.userInfo.userInfo.firstName
    )

    const handleSumbit = () => {
        navigate('/page/complete')
    }

    return (
        <Container>
            <Header>
                We just need a couple more things from you, {firstNameState}...
            </Header>
            <Title>
                Have you ever been in or are proposed to be in an IVA or
                declared bankrupt?*
            </Title>
            <Button colour={true} onClick={() => handleSumbit()}>
                Yes
            </Button>
            <Button colour={false}>No</Button>
        </Container>
    )
}

export default PageEight
