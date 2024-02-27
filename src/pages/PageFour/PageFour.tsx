import {
    ContinueButton,
    Header,
    InputBox,
    Title,
} from '../../styles/globalStyles'
import { IUserinfo, setUserInfo } from '../../reducer/UserSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
    DropdownDOB,
    DropdownTitle,
    FormDOB,
    InputContainer,
    MaidenNameBox,
    Text,
    TextBox,
} from './PageFourStyles'
import { UserTitleOptions } from '../../utils/constants'
import { open, close } from '../../reducer/PopupSlice'
import { useNavigate } from 'react-router-dom'

function PageFour() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [userLocalState, setUserLocalState] = useState<IUserinfo>({
        title: '',
        firstName: '',
        lastName: '',
        maidenName: '',
        dob: '',
    })

    const nameLineObject: IUserinfo = {
        title: 'Title',
        firstName: 'First Name',
        lastName: 'Surname',
        maidenName: 'Enter here',
        dob: '',
    }
    const [selectedTitle, setSelectedTitle] = useState<string>('')
    const [selectedDay, setSelectedDay] = useState<string>('')
    const [selectedMonth, setSelectedMonth] = useState<string>('')
    const [selectedYear, setSelectedYear] = useState<string>('')
    const [isValid, setIsValid] = useState<boolean>(false)

    const validateDateOfBirth = () => {
        const day = parseInt(selectedDay, 10)
        const month = parseInt(selectedMonth, 10)
        const year = parseInt(selectedYear, 10)
        const isValidDay = day >= 1 && day <= daysInMonth(month, year)
        const isValidMonth = month >= 1 && month <= 12
        const isValidYear = year >= 1900 && year <= 2024
        setIsValid(isValidDay && isValidMonth && isValidYear)
        if (isValid) {
            const formattedDay = selectedDay.padStart(2, '0')
            const formattedMonth = selectedMonth.padStart(2, '0')
            const formattedDOB = `${formattedDay}-${formattedMonth}-${selectedYear}`
            setUserLocalState({ ...userLocalState, dob: formattedDOB })
        }
    }

    const daysInMonth = (month: any, year: any) => {
        const thirtyDaysMonths = [4, 6, 9, 11]
        const thirtyOneDaysMonths = [1, 3, 5, 7, 8, 10, 12]
        if (thirtyDaysMonths.includes(month)) {
            return 30
        } else if (thirtyOneDaysMonths.includes(month)) {
            return 31
        } else if (month === 2) {
            return isLeapYear(year) ? 29 : 28
        }
        return 0
    }
    const isLeapYear = (year: any) => {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    }

    const handleSubmit = () => {
        validateDateOfBirth()
        if (
            isValid &&
            userLocalState.title !== '' &&
            userLocalState.firstName !== '' &&
            userLocalState.lastName !== '' &&
            userLocalState.maidenName !== '' &&
            userLocalState.dob !== ''
        ) {
            dispatch(setUserInfo(userLocalState))
            navigate('/page/5')
        } else if (
            !isValid &&
            userLocalState.title !== '' &&
            userLocalState.firstName !== '' &&
            userLocalState.lastName !== '' &&
            userLocalState.maidenName !== '' &&
            userLocalState.dob !== ''
        ) {
            console.log('DOB is not valid for submittion')
            dispatch(open({ text: 'Invalid Date of Birth', type: 'error' }))
        } else {
            dispatch(open({ text: 'Missing Field', type: 'error' }))
        }
    }

    return (
        <>
            <Header>Good news! It looks like you might have a claim!</Header>
            <Title>
                In order to proceed with your claim, please enter your details
                below:
            </Title>
            <DropdownTitle>
                <select
                    id="title"
                    value={selectedTitle}
                    onChange={(e) => {
                        setSelectedTitle(e.target.value)
                        setUserLocalState({
                            ...userLocalState,
                            title: e.target.value,
                        })
                    }}
                >
                    <option value="">{nameLineObject['title']}</option>
                    {UserTitleOptions.map((title) => (
                        <option key={title} value={title}>
                            {title}
                        </option>
                    ))}
                </select>
            </DropdownTitle>
            <InputContainer>
                <InputBox
                    key="firstName"
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder={nameLineObject['firstName']}
                    value={userLocalState.firstName}
                    onChange={(e) =>
                        setUserLocalState({
                            ...userLocalState,
                            firstName: e.target.value,
                        })
                    }
                ></InputBox>
                <InputBox
                    key="lastName"
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder={nameLineObject['lastName']}
                    value={userLocalState.lastName}
                    onChange={(e) =>
                        setUserLocalState({
                            ...userLocalState,
                            lastName: e.target.value,
                        })
                    }
                ></InputBox>
                <TextBox>
                    <Text>Madien/ Previous Names(s)</Text>
                    <MaidenNameBox>
                        <InputBox
                            key="maidenName"
                            type="text"
                            id="maidenName"
                            name="maidenName"
                            placeholder={nameLineObject['maidenName']}
                            value={userLocalState.maidenName}
                            onChange={(e) =>
                                setUserLocalState({
                                    ...userLocalState,
                                    maidenName: e.target.value,
                                })
                            }
                        ></InputBox>
                    </MaidenNameBox>
                </TextBox>

                <TextBox>
                    <Text>Date of Birth</Text>
                    <FormDOB>
                        <DropdownDOB>
                            <select
                                id="day"
                                value={selectedDay}
                                onChange={(e) => {
                                    setSelectedDay(e.target.value)
                                }}
                            >
                                <option value="">DD</option>
                                {[...Array(31).keys()].map((day) => (
                                    <option key={day + 1} value={day + 1}>
                                        {day + 1}
                                    </option>
                                ))}
                            </select>
                        </DropdownDOB>
                        <DropdownDOB>
                            <select
                                id="month"
                                value={selectedMonth}
                                onChange={(e) => {
                                    setSelectedMonth(e.target.value)
                                }}
                            >
                                <option value="">MM</option>
                                {[...Array(12).keys()].map((month) => (
                                    <option key={month + 1} value={month + 1}>
                                        {month + 1}
                                    </option>
                                ))}
                            </select>
                        </DropdownDOB>
                        <DropdownDOB>
                            <select
                                id="year"
                                value={selectedYear}
                                onChange={(e) => {
                                    setSelectedYear(e.target.value)
                                }}
                            >
                                <option value="">YYYY</option>
                                {[...Array(100).keys()].map((year) => (
                                    <option
                                        key={1924 + year}
                                        value={1924 + year}
                                    >
                                        {1924 + year}
                                    </option>
                                ))}
                            </select>
                        </DropdownDOB>
                    </FormDOB>
                </TextBox>
                {isValid && <p>Date of Birth is valid!</p>}
                {!isValid && <p>Date of Birth is not valid!</p>}
                <ContinueButton onClick={handleSubmit}>Continue</ContinueButton>
            </InputContainer>
        </>
    )
}

export default PageFour
