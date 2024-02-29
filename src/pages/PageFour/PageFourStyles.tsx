import styled from 'styled-components'

interface DobBoxProps {
    id: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    children?: React.ReactNode
}

interface TitleBoxProps {
    id: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    children?: React.ReactNode
}

interface SelectOptionsProps {
    key: string
    value: string
    children?: React.ReactNode
}

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Text = styled.h1`
    color: #172c3b;
    font-family: Nunito Sans;
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
`

export const MaidenNameBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const DropdownSelectTitle = styled.select<TitleBoxProps>`
    border: 0.6px solid #254358;
    background-color: #f6f6f6;
    border-radius: 10px;
    width: 95px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #172c3b;
    margin-right: 34%;
`

export const SelectOptions = styled.option<SelectOptionsProps>`
    background-color: #f6f6f6;
    color: #172c3b;
`

export const FormDOB = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
    padding-top: 12px;
    padding-bottom: 16px;
`

export const DropdownSelectDOB = styled.select<DobBoxProps>`
    border: 0.6px solid #254358;
    background-color: #f6f6f6;
    border-radius: 10px;
    width: 95px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #172c3b;
`
