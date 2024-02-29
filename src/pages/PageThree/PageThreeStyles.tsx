import styled, { ThemedStyledProps } from 'styled-components'
import { ButtonHTMLAttributes } from 'react'

interface InputBoxProps {
    type: string
    id: string
    name: string
    placeholder: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

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
    gap: 10px;
    margin: 20px 0;
`
export const PostcodeLabel = styled.input<InputBoxProps>`
    border: 0.6px solid #254358;
    width: 228px;
    height: 35px;
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
    ::placeholder {
        color: #172c3b;
    }
`
export const SearchButton = styled.button<
    ThemedStyledProps<ButtonHTMLAttributes<HTMLButtonElement>, any>
>`
    border: 1px solid #172c3b;
    font-family: Nunito Sans;
    font-size: 12px;
    font-weight: 700;
    line-height: 19.1px;
    width: 114px;
    height: 35px;
    background-color: #21d63e;
    border-radius: 10px;
    color: #ffffff;
    cursor: pointer;
    padding: 12px, 24px;
`

export const PreviousAddressBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    width: 257px;
    height: 123px;
    margin: 25px;
`

export const PreviousAddress = styled.h1`
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: 20px;
    line-height: 27.28px;
    text-align: left;
    color: #172c3b;
    margin: 0;
`

export const PreviousAddressText = styled.h1`
    font-family: Nunito Sans;
    font-size: 14px;
    font-weight: 400;
    line-height: 19.1px;
    color: #172c3b;
    letter-spacing: 0em;
    text-align: left;
`

export const AddButton = styled.button<
    ThemedStyledProps<ButtonHTMLAttributes<HTMLButtonElement>, any>
>`
    font-family: Nunito Sans;
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    width: 275px;
    height: 50px;
    background-color: #0095ca;
    color: #ffffff;
    border: 1px solid #172c3b;
    border-radius: 20px;
    cursor: pointer;
    margin-top: 5px;
`
