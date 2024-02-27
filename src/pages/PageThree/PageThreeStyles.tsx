import styled, { ThemedStyledProps } from 'styled-components'
import { ButtonHTMLAttributes } from 'react'

interface InputBoxProps {
    type: string
    id: string
    name: string
    placeholder: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const MessageConatiner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Text = styled.h1`
    font-family: Nunito Sans;
    font-size: 14px;
    font-weight: 400;
    line-height: 19.1px;
    text-align: center;
    color: #172c3b;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const PostCodeConatiner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const PostcodeLabel = styled.input<InputBoxProps>`
    border: 0.6px solid #254358;
    width: 228px;
    height: 35px;
    margin: 16px;
    padding-left: 16px;
    border-radius: 10px;
    background-color: #f6f6f6;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    font-family: Nunito Sans;
    font-size: 14px;
    font-weight: 400;
    line-height: 19.1px;
`
export const SearchButton = styled.button<
    ThemedStyledProps<ButtonHTMLAttributes<HTMLButtonElement>, any>
>`
    border: 1px solid #172c3b;
    font-family: Nunito Sans;
    font-size: 14px;
    font-weight: 700;
    line-height: 19.1px;
    width: 114px;
    height: 35px;
    background-color: #21d63e;
    font-size: 16px;
    border-radius: 10px;
    color: #ffffff;
    cursor: pointer;
    padding: 12px, 24px, 12px, 24px;
    gap: 10px;
`
