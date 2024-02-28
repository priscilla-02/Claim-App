import styled, { ThemedStyledProps } from 'styled-components'
import { ButtonHTMLAttributes } from 'react'

export const SelectionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Selections = styled.button<
    ThemedStyledProps<ButtonHTMLAttributes<HTMLButtonElement>, any> & {
        colourChange: boolean
    }
>`
    font-family: Nunito Sans;
    font-size: 14px;
    font-weight: 600;
    padding: 12px, 16px;
    width: 300px;
    height: 39px;
    color: ${(props) => (props.colourChange ? '#21d63e' : '#172C3B')};
    border: 1px solid #172c3b;
    border-radius: 20px;
    cursor: pointer;
    margin: 15px;
    display: flex;
    align-items: center;
    background-color: #f6f6f6;
    text-align: left;
    gap: 10px;
`

export const CircleSelection = styled.div<
    ThemedStyledProps<
        {
            colourChange: boolean
        },
        any
    >
>`
    width: 20px;
    height: 20px;
    border: 2px solid ${(props) => (props.colourChange ? '#21d63e' : '#172c3b')};
    border-radius: 50%;
    margin-right: 8px;
    cursor: pointer;
    margin: 20px;
`
