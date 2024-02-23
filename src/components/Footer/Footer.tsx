import React, { FC, ReactElement } from 'react'
import {
    Container,
    GuaranteeBox,
    BenefitDiv,
    Wrapper,
    TopTextBox,
    CopyrightText,
    SecureLogo,
    SecureTextBox,
    LogoBox,
    BottomTextBox,
    MainLogo,
} from './footerStyle'
import { FooterArray } from '../../utils/constants'
import {
    Expert,
    ExpertLogo,
    TextBox,
    TickIcon,
} from '../../styles/globalStyles'

export const Footer: FC = (): ReactElement => {
    return (
        <Container>
            <GuaranteeBox>
                {FooterArray.map((point: string) => (
                    <BenefitDiv key={point}>
                        <img
                            src="/footer-tick-stamp.svg"
                            alt="Tick Stamp Icon"
                        />
                        <header>{point}</header>
                    </BenefitDiv>
                ))}
            </GuaranteeBox>
            <Wrapper>
                <LogoBox>
                    <ExpertLogo>
                        <TickIcon>
                            <img src="/global-tick.svg" alt="Tick Icon" />
                        </TickIcon>
                        <TextBox>
                            <Expert>Expert</Expert>
                            <h1>PlevinClaims</h1>
                        </TextBox>
                    </ExpertLogo>

                    <SecureLogo>
                        <div>
                            <img src="/footer-lock.svg" alt="Lock Icon" />
                        </div>
                        <SecureTextBox>
                            <h1>SECURE</h1>
                            <h1>SSL ENCRYPTION</h1>
                        </SecureTextBox>
                    </SecureLogo>
                </LogoBox>

                <TopTextBox>
                    <h2>
                        Expert Plevin Claims is a trading name of Veriform
                        Limited, a company registered in England and Wales
                        (registration number 07195400) whose registered office
                        is 145/147 Hatfield Road, St. Albans, Hertfordshire AL1
                        4JY. Veriform Limited is authorised and regulated by the
                        Financial Conduct Authority (FCA) under registration
                        number 690199.
                    </h2>
                    <CopyrightText>
                        © Copyright Veriform Limited 2023. All rights reserved.
                    </CopyrightText>
                </TopTextBox>

                <BottomTextBox>
                    <div>
                        <p>Privacy Policy</p>
                        <MainLogo>
                            <p>Developed and marketed by</p>
                            <img src="/footer-main-logo.svg" alt="Main Logo" />
                        </MainLogo>
                    </div>
                    <div>
                        <img src="/footer-badge.svg" alt="Digital Badge" />
                    </div>
                </BottomTextBox>
            </Wrapper>
        </Container>
    )
}

export default Footer
