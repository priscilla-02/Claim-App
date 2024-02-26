import styled, { ThemedStyledProps } from 'styled-components'
import { ButtonHTMLAttributes } from 'react'

interface InputBoxProps {
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
    font-weight: bolder;
    font-size: 30px;
    text-align: center;
`

export const TickIcon = styled.div``

export const Header = styled.header`
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 21.82px;
    text-align: center;
    color: #21d63e;
`
export const Title = styled.h1`
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 27.28px;
    text-align: center;
    color: black;
`

export const InputLabel = styled.input<InputBoxProps>`
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
    font-family: 'Nunito Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 19.1px;
`

export const ContinueButton = styled.button<
    ThemedStyledProps<ButtonHTMLAttributes<HTMLButtonElement>, any>
>`
    font-family: 'Nunito Sans', sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 19.1px;
    padding: 16px, 112px;
    width: 70%;
    height: 60px;
    font-size: 16px;
    background-color: #21d63e;
    color: #ffffff;
    border: 1px solid #172c3b;
    border-radius: 30px;
    cursor: pointer;
    margin: 10px;
`
