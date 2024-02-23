export interface BankSelectionState {
    selectedBanks: string[]
}

const initialState: BankSelectionState = {
    selectedBanks: [],
}

interface SetSelectedBanksAction {
    type: 'SET_SELECTED_BANKS'
    payload: string[]
}

export type BankSelectionActionTypes = SetSelectedBanksAction

export const setSelectedBanks = (
    selectedBanks: string[]
): SetSelectedBanksAction => ({
    type: 'SET_SELECTED_BANKS',
    payload: selectedBanks,
})

const bankSelectionReducer = (
    state: BankSelectionState = initialState,
    action: BankSelectionActionTypes
): BankSelectionState => {
    switch (action.type) {
        case 'SET_SELECTED_BANKS':
            return {
                ...state,
                selectedBanks: action.payload,
            }
        default:
            return state
    }
}

export default bankSelectionReducer
