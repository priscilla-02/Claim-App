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

    // const dispatch = useDispatch()

    const bankUseSelection = (lender: string) => {
        if (lenderArray.includes(lender)) {
            const filteredArray = lenderArray.filter(
                (selectedlender) => selectedlender !== lender
            )
            setLenderArray(filteredArray)
        } else {
            lenderArray.push(lender)
            setLenderArray(lenderArray)
        }
        console.log('lenderArray3', lenderArray)

        // dispatch(setBankUsed(selectedLendersArray))
    }

    // const handleOptionsSelect = (lender: string) => {
    //     setLenderSelect((prev) => !prev)

    // }

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
                        // colorChange={lenderArray.includes(lender)}
                    >
                        <CircleSelection></CircleSelection>
                        {lender}
                    </Selections>
                ))}
            </SelectionsContainer>
            <ContinueButton>Continue</ContinueButton>
        </>
    )
}

export default PageTwo
