const initialState = {
    count: 0,
    MAXIMUM: 1,
    MINIMUM: 0,
    settings: false,
    minimum: 0,
    maximum: 1,
    disableSet: false
}

type InitialStateType = typeof initialState

type ActionType =
    IncValuesActionType
    | ValueFromLocalStorageType
    | SettingsType
    | MinimumSettingsType
    | MaximumSettingsType
    | DisableType
    | SetCountType
export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case "INCREMENT_COUNT":
            return {
                ...state,
                count: state.count + 1
            }
        case "SET_MINIMUM_FROM_LOCAL_STORAGE":
            return {
                ...state,
                MINIMUM: action.minimum
            }
        case "SET_SETTINGS":
            return {
                ...state,
                settings: action.settings
            }
        case "MINIMUM_SETTINGS":
            return {
                ...state,
                minimum: action.minimum
            }
        case "MAXIMUM_SETTINGS":
            return {
                ...state,
                maximum: action.maximum
            }
        case "DISABLE_SETTINGS":
            return {
                ...state,
                disableSet: action.disableSet
            }
        case "SET_COUNT":
            return {
                ...state,
                count: action.count
            }
        default:
            return state
    }
}

export type IncValuesActionType = ReturnType<typeof incrementCountAC>
export type SettingsType = ReturnType<typeof setSettingsAC>
export type ValueFromLocalStorageType = ReturnType<typeof setValueFromLocalStorageAC>
export type MinimumSettingsType = ReturnType<typeof setMinimumSettingsAC>
export type MaximumSettingsType = ReturnType<typeof setMaximumSettingsAC>
export type DisableType = ReturnType<typeof disableSetAC>
export type SetCountType = ReturnType<typeof setCountAC>

export const incrementCountAC = () => ({type: "INCREMENT_COUNT"} as const);
export const setCountAC = (count: number) => ({type: "SET_COUNT", count} as const);
export const setSettingsAC = (settings: boolean) => ({type: "SET_SETTINGS", settings} as const);
export const setValueFromLocalStorageAC = (minimum: number) => ({
    type: "SET_MINIMUM_FROM_LOCAL_STORAGE", minimum
} as const);
export const setMinimumSettingsAC = (minimum: number) => ({type: "MINIMUM_SETTINGS", minimum} as const);
export const setMaximumSettingsAC = (maximum: number) => ({type: "MAXIMUM_SETTINGS", maximum} as const);
export const disableSetAC = (bool: boolean) => ({type: "DISABLE_SETTINGS", disableSet: bool} as const);