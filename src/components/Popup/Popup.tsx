import { FC, ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/index'
import { CloseIcon, PopupComponent } from './PopupStyles'
import { close } from '../../reducer/PopupSlice'

export const Popup: FC = (): ReactElement => {
    const popupState = useSelector((state: RootState) => state.popup)
    const dispatch = useDispatch()

    useEffect(() => {
        if (popupState.open) {
            const timer = setTimeout(() => {
                dispatch(close())
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [popupState.open, dispatch])

    return popupState.open ? (
        <PopupComponent bgColor={popupState.type == 'error' ? 'red' : 'green'}>
            <span>{popupState.text}</span>
            <CloseIcon
                src="/popup-close.svg"
                onClick={() => dispatch(close())}
            />
        </PopupComponent>
    ) : (
        <></>
    )
}
export default Popup
