import { FC, ReactElement } from 'react'
import {
    ClaimsLogo,
    ClaimsLogoBox,
    ClaimsLogoText,
} from '../../styles/globalStyles'
import { Container, LineThrough, RightLogosBox } from './NavBarStyles'

const Navbar: FC = (): ReactElement => {
    return (
        <Container>
            <ClaimsLogoBox>
                <ClaimsLogo>
                    <img src="/footer-tick-stamp.svg" alt="Claims Icon" />
                </ClaimsLogo>
                <ClaimsLogoText>Claims</ClaimsLogoText>
            </ClaimsLogoBox>
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
