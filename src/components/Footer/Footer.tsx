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
    CompanyInfo,
    PrivacyText,
    DevelopedBox,
    BadgeIcon,
} from './FooterStyles'
import { FooterArray } from '../../utils/constants'
import { ExpertLogo } from '../../styles/globalStyles'
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
                    <ExpertLogo>
                        <img
                            src="/global-expert-group.svg"
                            alt="Expert Plevin Claims Icon"
                        />
                    </ExpertLogo>
                    <SecureLogo>
                        {/* <div>
                            <LockIcon src="/footer-lock.svg" alt="Lock Icon" />
                        </div>
                        <SecureTextBox>
                            <SecureTextTopLine>SECURE</SecureTextTopLine>
                            <SecureTextBottomLine>
                                SSL ENCRYPTION
                            </SecureTextBottomLine>
                        </SecureTextBox> */}
                        <img
                            src="/footer-lock-group.svg"
                            alt="Secure SSL Encryption Icon"
                        />
                    </SecureLogo>
                </LogoBox>
                <TopTextBox>
                    <CompanyInfo>
                        Expert Plevin Claims is a trading name of Veriform
                        Limited, a company registered in England and Wales
                        (registration number 07195400) whose registered office
                        is 145/147 Hatfield Road, St. Albans, Hertfordshire AL1
                        4JY. Veriform Limited is authorised and regulated by the
                        Financial Conduct Authority (FCA) under registration
                        number 690199.
                    </CompanyInfo>
                    <CopyrightText>
                        © Copyright Veriform Limited 2023. All rights reserved.
                    </CopyrightText>
                </TopTextBox>
                <BottomTextBox>
                    <div>
                        <PrivacyText>Privacy Policy</PrivacyText>
                        <DevelopedBox>
                            <img
                                src="../../../public/footer-develop-group.svg"
                                alt="Developed and Marketed by Opop Media"
                            />
                        </DevelopedBox>
                    </div>
                    <BadgeIcon src="/footer-badge.svg" alt="Digital Badge" />
                </BottomTextBox>
            </Wrapper>
        </Container>
    )
}
export default Footer
