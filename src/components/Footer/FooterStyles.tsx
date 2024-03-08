import styled from 'styled-components'

interface BenefitBoxProps {
    key: string
    children?: React.ReactNode
}

interface IconProps {
    src: string
    alt: string
}

export const Container = styled.footer`
    width: 100%;
    margin-top: 200px;
`

export const Wrapper = styled.div`
    background-color: #172c3b;
    color: #ffffff;
    padding: 30px 0;
`

export const GuaranteeBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #172c3b;
    background-color: #f6f6f6;
    width: 100%;
    margin-top: 40px;
    padding-top: 30px;
    padding-bottom: 30px;
`

export const BenefitBox = styled.div<BenefitBoxProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const BenefitPoint = styled.div`
    color: #172c3b;
    margin: 14px 14px 19px;
    font-family: Nunito Sans;
    font-size: 18px;
`

export const LogoBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 45px;
    margin-right: 45px;
`

export const SecureLogo = styled.div`
    display: flex;
    align-items: center;
    margin: 20px;
    text-align: left;
    margin: 0 20px;
`

export const TopTextBox = styled.div`
    font-family: Nunito Sans;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 20px 50px 10px;
    gap: 25px;
    border-top: 2px solid #3d3f58;
`
export const CompanyInfo = styled.div`
    font-family: Nunito Sans;
    font-size: 12px;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 25px;
`

export const CopyrightText = styled.h2`
    font-family: Nunito Sans;
    font-size: 12px;
    font-weight: 300;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: left;
`

export const BottomTextBox = styled.div`
    font-family: Nunito Sans;
    display: flex;
    text-align: left;
    margin: 0px 50px;
    justify-content: space-between;
`

export const PrivacyText = styled.h2`
    font-family: Nunito Sans;
    font-size: 12px;
    font-weight: 300;
    line-height: 10.91px;
    letter-spacing: 0em;
    text-align: left;
`

export const DevelopedBox = styled.div`
    display: flex;
    gap: 5px;
    margin-top: 30px;
`

export const BadgeIcon = styled.img<IconProps>`
    width: 110px;
`
