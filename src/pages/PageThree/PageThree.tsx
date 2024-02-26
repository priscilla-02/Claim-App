import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { RootState } from '../../store'
import { IAddress, setAddress } from '../../reducer/UserSlice'
import { ContinueButton, Header, Title } from '../../styles/globalStyles'
import { MessageConatiner, PostCodeConatiner } from './PageThreeStyles'
import { FullAddressDetails } from '../../utils/constants'

function PageThree() {
    // const [postcode, setPostcode] = useState<string>('')
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
    // const addressStoreState = useSelector((state: RootState) => state.address)

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
            dispatch(setAddress(addressState))
        }
    }

    const handleSearchPostCode = () => {
        if (addressState.postcode === '' || !addressState.postcode) {
            dispatch(open({ text: 'text', type: 'error' }))
        } else {
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
                <div>
                    {FullAddressDetails.map((line: string, index: number) => (
                        <div key={index}>
                            <input
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
                            />
                        </div>
                    ))}
                    <ContinueButton onClick={() => handleFullAddressSumbit()}>
                        Continue
                    </ContinueButton>
                </div>
            ) : (
                <PostCodeConatiner>
                    <input
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
                    />
                    <button onClick={handleSearchPostCode}>Search</button>
                </PostCodeConatiner>
            )}
            <div></div>
        </>
    )
}

export default PageThree
