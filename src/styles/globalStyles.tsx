import styled, { ThemedStyledProps } from 'styled-components'
import { ButtonHTMLAttributes } from 'react'

interface InputBoxProps {
    key: any
    type: string
    id: string
    name: string
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const ExpertLogo = styled.div`
    display: flex;
    align-items: center;
    text-align: left;
    margin: 0 20px;
    color: #ffffff;
`
export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`
export const Expert = styled.h1`
    display: flex;
    text-align: left;
    font-weight: bolder;
    font-size: 25px;
    height: 35px;
    margin: 0;
`
export const PlevinClaims = styled.div`
    font-size: 14px;
`

export const Header = styled.header`
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: 16px;
    line-height: 21.82px;
    text-align: center;
    color: #21d63e;
    margin-top: 16px;
`
export const Title = styled.h1`
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: 20px;
    line-height: 27.28px;
    text-align: center;
    color: #172c3b;
    margin: 16px;
`

export const InputBox = styled.input<InputBoxProps>`
    border: 0.6px solid #254358;
    width: 300px;
    height: 35px;
    margin: 16px;
    border-radius: 10px;
    background-color: #f6f6f6;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: Nunito Sans;
    font-size: 14px;
    font-weight: 400;
    line-height: 19.1px;
`

export const MessageInfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f6f6f6;
    gap: 5px;
    padding-left: 40px;
    padding-right: 40px;
`

export const MessageInfoText = styled.h1`
    font-family: Nunito Sans;
    font-size: 14px;
    font-weight: 400;
    line-height: 19.1px;
    color: #172c3b;
    letter-spacing: 0em;
    text-align: left;
`

export const ContinueButton = styled.button<
    ThemedStyledProps<ButtonHTMLAttributes<HTMLButtonElement>, any>
>`
    font-family: Nunito Sans;
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    padding: 16px, 112px;
    width: 283px;
    height: 42px;
    background-color: #21d63e;
    color: #ffffff;
    border: 1px solid #172c3b;
    border-radius: 20px;
    margin: 10px;
    cursor: pointer;
`
