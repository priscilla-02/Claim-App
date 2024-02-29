import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { IAddress, setAddress } from '../../reducer/UserSlice'
import {
    ContinueButton,
    Header,
    InputBox,
    Title,
    MessageInfoContainer,
    MessageInfoText,
} from '../../styles/globalStyles'
import {
    PostCodeConatiner,
    InputContainer,
    PostcodeLabel,
    SearchButton,
    PreviousAddressBox,
    PreviousAddress,
    AddButton,
} from './PageThreeStyles'
import { FullAddressDetails } from '../../utils/constants'
import { open, close } from '../../reducer/PopupSlice'
function PageThree() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [clickSearch, setClickSearch] = useState<boolean>(false)
    const [addressLocalState, setAddressLocalState] = useState<IAddress[]>([
        {
            addressLine1: '',
            addressLine2: '',
            townOrCity: '',
            county: '',
            country: '',
            postcode: '',
        },
    ])

    const addressLineObject: IAddress = {
        addressLine1: 'Address line 1',
        addressLine2: 'Address line 2',
        townOrCity: 'Town/City',
        county: 'County',
        country: 'Country',
        postcode: 'Postcode',
    }

    useEffect(() => {}, [clickSearch])

    const handleFullAddressSumbit = () => {
        if (
            addressLocalState[0].addressLine1 !== '' &&
            addressLocalState[0].addressLine2 !== '' &&
            addressLocalState[0].townOrCity !== '' &&
            addressLocalState[0].county !== '' &&
            addressLocalState[0].country !== '' &&
            addressLocalState[0].postcode !== ''
        ) {
            dispatch(close())
            dispatch(setAddress(addressLocalState))
            navigate('/page/4')
        } else {
            dispatch(open({ text: 'Missing Field', type: 'error' }))
        }
    }
    const handleSearchPostCode = () => {
        if (
            addressLocalState[0].postcode === '' ||
            !addressLocalState[0].postcode
        ) {
            dispatch(open({ text: 'Missing Postcode', type: 'error' }))
        } else {
            dispatch(close())
            setClickSearch(true)
        }
    }

    const handleAddAddress = () => {
        setAddressLocalState([
            ...addressLocalState,
            {
                addressLine1: '',
                addressLine2: '',
                townOrCity: '',
                county: '',
                country: '',
                postcode: '',
            },
        ])
    }
    return (
        <>
            <Header>That's great! Now please could you enter this in…</Header>
            <Title>Please enter your postcode in the box below</Title>
            <MessageInfoContainer>
                <img src="/pageThree-message.svg" alt="Message Icon" />
                <MessageInfoText>
                    We need this information for anti-fraud purposes.
                </MessageInfoText>
            </MessageInfoContainer>
            {addressLocalState[0].postcode !== '' && clickSearch ? (
                <InputContainer>
                    {addressLocalState.map((address, index) => (
                        <div key={index}>
                            {addressLocalState.length > 1 && (
                                <div>Address number {index + 1}</div>
                            )}
                            {FullAddressDetails.map(
                                (line: string, idx: number) => (
                                    <InputBox
                                        key={idx}
                                        type="text"
                                        id={line}
                                        name={line}
                                        placeholder={addressLineObject[line]}
                                        value={
                                            line.toLowerCase() === 'postcode'
                                                ? addressLocalState[index]
                                                      ?.postcode
                                                : addressLocalState[index]?.[
                                                      line
                                                  ]
                                        }
                                        onChange={(e) =>
                                            setAddressLocalState(
                                                (prevState) => {
                                                    const updatedAddress = [
                                                        ...prevState,
                                                    ]
                                                    updatedAddress[index] = {
                                                        ...updatedAddress[
                                                            index
                                                        ],
                                                        [line]: e.target.value,
                                                    }
                                                    return updatedAddress
                                                }
                                            )
                                        }
                                    ></InputBox>
                                )
                            )}
                        </div>
                    ))}
                    <ContinueButton onClick={() => handleFullAddressSumbit()}>
                        Continue
                    </ContinueButton>
                    <PreviousAddressBox>
                        <PreviousAddress>Previous address</PreviousAddress>
                        <MessageInfoText>
                            Please enter any previous addresses you might have
                            lived at when you originally took out the credit (if
                            different from the address above)
                        </MessageInfoText>
                    </PreviousAddressBox>
                    <AddButton onClick={() => handleAddAddress()}>
                        Add Address
                    </AddButton>
                </InputContainer>
            ) : (
                <PostCodeConatiner>
                    <PostcodeLabel
                        type="text"
                        id="postcode"
                        name="postcode"
                        placeholder="Postcode"
                        onChange={(e) =>
                            setAddressLocalState([
                                {
                                    ...addressLocalState[0],
                                    postcode: e.target.value,
                                },
                            ])
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
