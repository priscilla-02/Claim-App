import { useDispatch } from 'react-redux'
import { setBankUsed } from '../../reducer/UserSlice'
import { useState } from 'react'
import { ContinueButton } from '../../styles/globalStyles'
import {
    CircleSelection,
    Header,
    Selections,
    SelectionsContainer,
    Title,
} from './PageTwoStyles'
import { BanksAndLenderArray } from '../../utils/constants'

function PageTwo() {
    const [lenderArray, setLenderArray] = useState<string[]>([])
    const dispatch = useDispatch()

    const bankUseSelection = (lender: string) => {
        if (lenderArray.includes(lender)) {
            const filteredArray = lenderArray.filter(
                (selectedlender) => selectedlender !== lender
            )
            setLenderArray(filteredArray)
        } else {
            setLenderArray([...lenderArray, lender])
        }
    }

    const handleBankUseSubmit = () => {
        dispatch(setBankUsed(lenderArray))
    }

    return (
        <>
            <Header>Thanks for that, now...</Header>
            <Title>
                Please can you tell us which bank(s) or lenders you have used?
            </Title>

            <SelectionsContainer>
                {BanksAndLenderArray.map((lender: string) => (
                    <Selections
                        key={lender}
                        onClick={() => bankUseSelection(lender)}
                        colourChange={lenderArray.includes(lender)}
                    >
                        <CircleSelection
                            colourChange={lenderArray.includes(lender)}
                        ></CircleSelection>
                        {lender}
                    </Selections>
                ))}
            </SelectionsContainer>
            <ContinueButton onClick={() => handleBankUseSubmit()}>
                Continue
            </ContinueButton>
        </>
    )
}

export default PageTwo
