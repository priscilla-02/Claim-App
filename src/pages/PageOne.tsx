import { useState } from 'react'
import { Counter } from '../features/counter/Counter'
import {
    Container,
    Header,
    Title,
    // ButtonContainer,
    ButtonYes,
    ButtonNo,
} from '../styles/pageOneStyles'
import { Link } from 'react-router-dom'

function PageOne() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Container>
                {/* <div>
                    <button
                        className="border border-gray-400 rounded px-4 py-2 mt-4 hover:(bg-teal-400 border-teal-400)"
                        onClick={() => setCount((count) => count + 1)}
                    >
                        count is: {count}
                    </button>
                </div>
                <div className="card">
                    <Counter />
                </div> */}

                <Header>Let’s get started with your free Plevin check!</Header>
                <Title>
                    Have you had a credit card, loan or mortgage in the past?
                </Title>
                <Link to="/page/2">
                    <ButtonYes>Yes</ButtonYes>
                </Link>
                <ButtonNo>No</ButtonNo>
            </Container>
        </>
    )
}
export default PageOne
