import {AuthState, AuthAction, AuthActionEnum} from './types';


const initialState: AuthState = {
    isAuth: true
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionEnum.isAuth:
            return {
                ...state,
                isAuth: action.payload
            }

        default: 
            return state
    }
}