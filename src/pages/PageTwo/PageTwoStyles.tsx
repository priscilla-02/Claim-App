import styled, { ThemedStyledProps } from 'styled-components'
import { ButtonHTMLAttributes } from 'react'

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

export const SelectionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Selections = styled.div<
    ThemedStyledProps<
        {
            colorChange: boolean
        },
        any
    >
>`
    font-family: 'Nunito Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    padding: 16px, 112px;
    width: 450px;
    height: 50px;
    color: ${(props) => (props.colorChange ? '#21d63e' : 'black')};
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
            colorChange: boolean
        },
        any
    >
>`
    width: 20px;
    height: 20px;
    // border: 2px solid #172c3b;
    border: 2px solid ${(props) => (props.colorChange ? '#21d63e' : '#172c3b')};
    border-radius: 50%;
    margin-right: 8px;
    cursor: pointer;
    margin: 20px;
`
