import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { setAddress } from '../../reducer/UserSlice'
import { Header, Title } from '../../styles/globalStyles'
import { MessageConatiner, PostCodeConatiner } from './PageThreeStyles'

function PageThree() {
    const [postcode, setPostcode] = useState<string>('')

    const dispatch = useDispatch()

    const addressState = useSelector((state: RootState) => state.address)

    const handleSearch = () => {
        console.log('postcode', postcode)
        dispatch(
            setAddress({
                ...addressState,
                postcode: postcode,
            })
        )
    }

    return (
        <>
            <Header>That’s great! Now please could you enter this in…</Header>
            <Title>Please enter your postcode in the box below</Title>
            <MessageConatiner>
                <img src="/pageThree-message.svg" alt="Message Icon" />
                <h2>We need this information for anti-fraud purposes.</h2>
            </MessageConatiner>

            <div>
                <PostCodeConatiner>
                    <input
                        type="text"
                        id="postcode"
                        name="postcode"
                        placeholder="Postcode"
                        onChange={(e) => setPostcode(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </PostCodeConatiner>
            </div>

            <div></div>
        </>
    )
}

export default PageThree
