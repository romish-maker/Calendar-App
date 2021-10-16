export interface AuthState{
    isAuth: boolean
}

export enum AuthActionEnum  {
    isAuth = "SET_AUTH"
}

export interface SetIsAuthAction {
    type: AuthActionEnum.isAuth
    payload: boolean
}

export type AuthAction = SetIsAuthAction