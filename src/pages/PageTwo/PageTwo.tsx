import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setBankUsed } from '../../reducer/UserSlice'
import { useState } from 'react'
import { ContinueButton, Header, Title } from '../../styles/globalStyles'
import {
    CircleSelection,
    Selections,
    SelectionsContainer,
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
                        {lenderArray.includes(lender) ? (
                            <CircleSelection
                                src="/selected-circle.svg"
                                alt="Selected"
                            />
                        ) : (
                            <CircleSelection
                                src="/unselected-circle.svg"
                                alt="Unselected"
                            />
                        )}

                        {lender}
                    </Selections>
                ))}
            </SelectionsContainer>
            <Link to="/page/3">
                <ContinueButton onClick={() => handleBankUseSubmit()}>
                    Continue
                </ContinueButton>
            </Link>
        </>
    )
}

export default PageTwo
