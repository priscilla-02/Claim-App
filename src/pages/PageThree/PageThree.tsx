import { Header, Title } from '../../styles/globalStyles'
import { MessageConatiner, PostCodeConatiner } from './PageThreeStyles'

function PageThree() {
    return (
        <>
            <Header>That’s great! Now please could you enter this in…</Header>
            <Title>Please enter your postcode in the box below</Title>
            <MessageConatiner>
                <img src="/pageThree-message.svg" alt="Message Icon" />
                <h2>We need this information for anti-fraud purposes.</h2>
            </MessageConatiner>
            <PostCodeConatiner>
                <form>
                    <input
                        type="text"
                        id="postcode"
                        name="postcode"
                        placeholder="Postcode"
                    ></input>
                </form>
                <button>Search</button>
            </PostCodeConatiner>
        </>
    )
}

export default PageThree
