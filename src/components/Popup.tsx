import { FC, ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

export const Popup: FC = (): ReactElement => {
    const popupState = useSelector((state: RootState) => state.popup)

    return popupState.open ? <div>{popupState.text}</div> : <></>
}
export default Popup
