import styled, { ThemedStyledProps } from 'styled-components'
import { ButtonHTMLAttributes } from 'react'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
`
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

export const Button = styled.button<
    ThemedStyledProps<ButtonHTMLAttributes<HTMLButtonElement>, any> & {
        colour: boolean
    }
>`
    padding: 16px, 112px;
    width: 246px;
    height: 42px;
    font-size: 16px;
    background-color: ${(props) => (props.colour ? '#21d63e' : '')};
    color: ${(props) => (props.colour ? '#ffffff' : 'black')};
    border: 1px solid #172c3b;
    border-radius: 25px;
    cursor: pointer;
    margin: 10px;
`
