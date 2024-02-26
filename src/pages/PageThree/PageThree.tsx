import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { IAddress, setAddress } from '../../reducer/UserSlice'
import {
    ContinueButton,
    Header,
    InputLabel,
    Title,
} from '../../styles/globalStyles'
import {
    MessageConatiner,
    PostCodeConatiner,
    InputContainer,
    PostcodeLabel,
    SearchButton,
} from './PageThreeStyles'
import { FullAddressDetails } from '../../utils/constants'
import { open, close } from '../../reducer/PopupSlice'

function PageThree() {
    const [addressState, setAddressState] = useState<IAddress>({
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
            addressState.addressLine1 !== '' &&
            addressState.addressLine2 !== '' &&
            addressState.townOrCity !== '' &&
            addressState.county !== '' &&
            addressState.country !== '' &&
            addressState.postcode !== ''
        ) {
            dispatch(close())
            dispatch(setAddress(addressState))
            navigate('/page/4')
        } else {
            dispatch(open({ text: 'Missing Field', type: 'error' }))
        }
    }

    const handleSearchPostCode = () => {
        if (addressState.postcode === '' || !addressState.postcode) {
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
                <h2>We need this information for anti-fraud purposes.</h2>
            </MessageConatiner>
            {addressState.postcode !== '' && clickSearch ? (
                <InputContainer>
                    {FullAddressDetails.map((line: string, index: number) => (
                        <div key={index}>
                            <InputLabel
                                type="text"
                                id={line}
                                name={line}
                                placeholder={addressLineObject[line]}
                                value={
                                    line.toLowerCase() === 'postcode'
                                        ? addressState.postcode
                                        : addressState[line]
                                }
                                onChange={(e) =>
                                    setAddressState({
                                        ...addressState,
                                        [line]: e.target.value,
                                    })
                                }
                            ></InputLabel>
                        </div>
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
                            setAddressState({
                                ...addressState,
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
