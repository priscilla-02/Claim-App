import styled from 'styled-components'
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
// export const ButtonContainer = styled.div`
//     max-width: 500px;
//     margin: 0 auto;
//     border: 1px;
//     padding: 16px, 112px, 16px, 112px;
//     gap: 10px;
// `
export const ButtonYes = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>`
    padding: 16px, 112px;
    width: 246px;
    height: 42px;
    font-size: 16px;
    background-color: #21d63e;
    color: w#FFFFFF;
    border: 1px solid #172c3b;
    border-radius: 25px;
    cursor: pointer;
    margin: 10px;
`
export const ButtonNo = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>`
    padding: 16px, 112px;
    width: 246px;
    height: 42px;
    font-size: 16px;
    color: black;
    border: 1px solid #172c3b;
    border-radius: 25px;
    cursor: pointer;
    margin: 10px;
`
