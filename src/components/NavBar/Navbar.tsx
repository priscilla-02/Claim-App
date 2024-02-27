import { FC, ReactElement } from 'react'
import {
    Expert,
    ExpertLogo,
    PlevinClaims,
    TextBox,
} from '../../styles/globalStyles'
import {
    Container,
    FlagLogoBox,
    LineThrough,
    RightLogosBox,
    RightTextBox,
    RightTextHeader,
} from './navBarStyle'

const Navbar: FC = (): ReactElement => {
    return (
        <Container>
            <ExpertLogo>
                <img src="/global-tick.svg" alt="Tick Icon" />
                <TextBox>
                    <Expert>Expert</Expert>
                    <PlevinClaims>PlevinClaims</PlevinClaims>
                </TextBox>
            </ExpertLogo>
            <LineThrough></LineThrough>
            <RightLogosBox>
                <FlagLogoBox>
                    <div>
                        <img
                            src="/navBar-secure-logo.svg"
                            alt="Secure SSL Encryption Icon"
                        />
                    </div>
                    <RightTextBox>
                        <RightTextHeader>SECURE</RightTextHeader>
                        <RightTextHeader>SSL ENCRYPTION</RightTextHeader>
                    </RightTextBox>
                </FlagLogoBox>
                <FlagLogoBox>
                    <div>
                        <img src="/navBar-flag.svg" alt="Union Jack Icon" />
                    </div>
                    <RightTextBox>
                        <RightTextHeader>100% Secure</RightTextHeader>
                        <RightTextHeader>UK Website</RightTextHeader>
                    </RightTextBox>
                </FlagLogoBox>
            </RightLogosBox>
        </Container>
    )
}
export default Navbar
