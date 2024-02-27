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
    padding: 16px, 112px;
    width: 450px;
    height: 50px;
    color: ${(props) => (props.colourChange ? '#21d63e' : 'black')};
    border: 1px solid #172c3b;
    border-radius: 25px;
    cursor: pointer;
    margin: 10px;
    display: flex;
    align-items: center;
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
    // border: 2px solid #172c3b;
    border: 2px solid ${(props) => (props.colourChange ? '#21d63e' : '#172c3b')};
    border-radius: 50%;
    margin-right: 8px;
    cursor: pointer;
    margin: 20px;
`
