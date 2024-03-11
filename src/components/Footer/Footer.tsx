import { FC, ReactElement } from 'react'
import {
    Container,
    GuaranteeBox,
    BenefitBox,
    Wrapper,
    TopTextBox,
    CopyrightText,
    SecureLogo,
    LogoBox,
    BottomTextBox,
    BenefitPoint,
    PrivacyText,
    DevelopedBox,
    BadgeIcon,
} from './FooterStyles'
import { FooterArray } from '../../utils/constants'
import {
    ClaimsLogo,
    ClaimsLogoBox,
    ClaimsLogoText,
} from '../../styles/globalStyles'
export const Footer: FC = (): ReactElement => {
    return (
        <Container>
            <GuaranteeBox>
                {FooterArray.map((point: string) => (
                    <BenefitBox key={point}>
                        <img
                            src="/footer-tick-stamp.svg"
                            alt="Tick Stamp Icon"
                        />
                        <BenefitPoint>{point}</BenefitPoint>
                    </BenefitBox>
                ))}
            </GuaranteeBox>
            <Wrapper>
                <LogoBox>
                    <ClaimsLogoBox>
                        <ClaimsLogo>
                            <img
                                src="/footer-tick-stamp.svg"
                                alt="Claims Icon"
                            />
                        </ClaimsLogo>
                        <ClaimsLogoText>Claims</ClaimsLogoText>
                    </ClaimsLogoBox>

                    <SecureLogo>
                        <img
                            src="/footer-lock-group.svg"
                            alt="Secure SSL Encryption Icon"
                        />
                    </SecureLogo>
                </LogoBox>
                <TopTextBox>
                    <CopyrightText>© Copyright</CopyrightText>
                </TopTextBox>
                <BottomTextBox>
                    <div>
                        <PrivacyText>Privacy Policy</PrivacyText>
                        <DevelopedBox>Developed by Priscilla Chan</DevelopedBox>
                    </div>
                    <BadgeIcon src="/footer-badge.svg" alt="Digital Badge" />
                </BottomTextBox>
            </Wrapper>
        </Container>
    )
}
export default Footer
