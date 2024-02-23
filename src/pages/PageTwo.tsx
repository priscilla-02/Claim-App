import { ContinueButton } from '../styles/globalStyles'
import {
    CircleSelection,
    Header,
    Selections,
    SelectionsContainer,
    Title,
} from '../styles/pageTwoStyles'
import { BanksAndLenderArray } from '../utils/constants'

function PageTwo() {
    return (
        <>
            <Header>Thanks for that, now...</Header>
            <Title>
                Please can you tell us which bank(s) or lenders you have used?
            </Title>

            <SelectionsContainer>
                {BanksAndLenderArray.map((selection: string) => (
                    <div key={selection}>
                        <Selections>
                            <CircleSelection></CircleSelection>
                            {selection}
                        </Selections>
                    </div>
                ))}
            </SelectionsContainer>
            <ContinueButton>Continue</ContinueButton>
        </>
    )
}

export default PageTwo
