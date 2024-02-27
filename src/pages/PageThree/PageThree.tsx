import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { IAddress, setAddress } from '../../reducer/UserSlice'
import {
    ContinueButton,
    Header,
    InputBox,
    Title,
} from '../../styles/globalStyles'
import {
    MessageConatiner,
    PostCodeConatiner,
    InputContainer,
    PostcodeLabel,
    SearchButton,
    Text,
} from './PageThreeStyles'
import { FullAddressDetails } from '../../utils/constants'
import { open, close } from '../../reducer/PopupSlice'

function PageThree() {
    const [addressLocalState, setAddressLocalState] = useState<IAddress>({
        addressLine1: '',
        addressLine2: '',
        townOrCity: '',
        county: '',
        country: '',
        postcode: '',
    })
    const [clickSearch, setClickSearch] = useState<boolean>(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {}, [clickSearch])

    const addressLineObject: IAddress = {
        addressLine1: 'Address line 1',
        addressLine2: 'Address line 2',
        townOrCity: 'Town/City',
        county: 'County',
        country: 'Country',
        postcode: 'Postcode',
    }

    const handleFullAddressSumbit = () => {
        if (
            addressLocalState.addressLine1 !== '' &&
            addressLocalState.addressLine2 !== '' &&
            addressLocalState.townOrCity !== '' &&
            addressLocalState.county !== '' &&
            addressLocalState.country !== '' &&
            addressLocalState.postcode !== ''
        ) {
            dispatch(close())
            dispatch(setAddress(addressLocalState))
            navigate('/page/4')
        } else {
            dispatch(open({ text: 'Missing Field', type: 'error' }))
        }
    }

    const handleSearchPostCode = () => {
        if (addressLocalState.postcode === '' || !addressLocalState.postcode) {
            dispatch(open({ text: 'Missing Postcode', type: 'error' }))
        } else {
            dispatch(close())
            setClickSearch(true)
        }
    }

    return (
        <>
            <Header>That’s great! Now please could you enter this in…</Header>
            <Title>Please enter your postcode in the box below</Title>
            <MessageConatiner>
                <img src="/pageThree-message.svg" alt="Message Icon" />
                <Text>We need this information for anti-fraud purposes.</Text>
            </MessageConatiner>
            {addressLocalState.postcode !== '' && clickSearch ? (
                <InputContainer>
                    {FullAddressDetails.map((line: string, index: number) => (
                        <InputBox
                            key={index}
                            type="text"
                            id={line}
                            name={line}
                            placeholder={addressLineObject[line]}
                            value={
                                line.toLowerCase() === 'postcode'
                                    ? addressLocalState.postcode
                                    : addressLocalState[line]
                            }
                            onChange={(e) =>
                                setAddressLocalState({
                                    ...addressLocalState,
                                    [line]: e.target.value,
                                })
                            }
                        ></InputBox>
                    ))}
                    <ContinueButton onClick={() => handleFullAddressSumbit()}>
                        Continue
                    </ContinueButton>
                </InputContainer>
            ) : (
                <PostCodeConatiner>
                    <PostcodeLabel
                        type="text"
                        id="postcode"
                        name="postcode"
                        placeholder="Postcode"
                        onChange={(e) =>
                            setAddressLocalState({
                                ...addressLocalState,
                                postcode: e.target.value,
                            })
                        }
                    ></PostcodeLabel>
                    <SearchButton onClick={handleSearchPostCode}>
                        Search
                    </SearchButton>
                </PostCodeConatiner>
            )}
        </>
    )
}

export default PageThree
