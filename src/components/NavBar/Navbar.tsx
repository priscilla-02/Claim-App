import { FC, ReactElement } from 'react'
import { ExpertLogo } from '../../styles/globalStyles'
import { Container, LineThrough, RightLogosBox } from './NavBarStyles'

const Navbar: FC = (): ReactElement => {
    return (
        <Container>
            <ExpertLogo>
                <img
                    src="/global-expert-group.svg"
                    alt="Expert Plevin Claims Icon"
                />
            </ExpertLogo>
            <LineThrough></LineThrough>
            <RightLogosBox>
                <img
                    src="/navbar-secure-group.svg"
                    alt="Secure SSL Encryption Icon"
                />

                <img
                    src="/navBar-UKflag-group.svg"
                    alt="100% Secure UK Website Icon"
                />
            </RightLogosBox>
        </Container>
    )
}
export default Navbar
