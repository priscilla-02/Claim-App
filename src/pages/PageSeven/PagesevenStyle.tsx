import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
`

export const SignatureContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 332px;
    height: 240px;
`

export const SignatureHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #0095ca;
    color: white;
    font-family: RN House Sans;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
    padding: 10px;
    border-top: 1px solid #1c1c1c;
    border-left: 1px solid #1c1c1c;
    border-right: 1px solid #1c1c1c;
`

export const SignaturePad = styled.div`
    width: 332px;
    height: 240px;
    border-bottom: 1px solid #1c1c1c;
    border-left: 1px solid #1c1c1c;
    border-right: 1px solid #1c1c1c;
`
export const CanvasOverlay = styled.div`
    position: relative;
`

export const CanvasPlaceholder = styled.div`
    position: absolute;
    top: 35%;
    left: 30%;
    color: #c4c4c4;
    font-size: 30px;
`

export const SignaturePreview = styled.h1`
    color: #172c3b;
    font-family: RN House Sans;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
`

export const ReviewText = styled.h1`
    font-family: Nunito Sans;
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
    color: #254358;
`
export const ReviewTextSpan = styled.span`
    font-family: Nunito Sans;
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
    color: #21d63e;
    text-decoration: underline;
`
export const DisclaimerText = styled.h1`
    font-family: Nunito Sans;
    font-size: 12px;
    font-weight: 400;
    line-height: 16.37px;
    letter-spacing: 0em;
    text-align: center;
    color: #254358;
    background-color: #f6f6f6;
    width: 350px;
    height: 96px;
    padding: 8px;
    border-radius: 10px;
    gap: 8px;
`

export const DisclaimerTextSpan = styled.span`
    font-family: Nunito Sans;
    font-size: 12px;
    font-weight: 700;
    line-height: 16.37px;
    letter-spacing: 0em;
    text-align: center;
    color: #254358;
`
