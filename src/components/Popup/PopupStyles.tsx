import React from 'react'
import styled from 'styled-components'

interface PopupDivProps {
    bgColor: string
    children?: React.ReactNode
}
interface CloseIconButtonProps extends React.HTMLAttributes<HTMLImageElement> {
    src: string
    onClick?: () => void
}
export const PopupComponent = styled.div<PopupDivProps>`
    background-color: ${(props) => props.bgColor};
    position: absolute;
    top: 0;
    width: 600px;
    font-size: 16px;
    color: white;
    padding: 5px 10px;
    font-family: Nunito Sans;
    max-width: 100vw;
`
export const CloseIcon = styled.img<CloseIconButtonProps>`
    position: absolute;
    top: 0;
    right: 0;
    margin: 2px 2px 0 0;
`
