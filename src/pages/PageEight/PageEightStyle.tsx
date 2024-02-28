import styled, { ThemedStyledProps } from 'styled-components'
import { ButtonHTMLAttributes } from 'react'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
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
    background-color: ${(props) => (props.colour ? '' : '#21d63e')};
    color: ${(props) => (props.colour ? '#172C3B' : '#ffffff')};
    border: 1px solid #172c3b;
    border-radius: 25px;
    cursor: pointer;
    margin: 10px;
`
