import axios from "axios";
import { IUser } from "../../../models/IUser";
import { AppDispatch } from "../../store";
import {AuthActionEnum} from '../auth/types';
import {SetIsAuthAction, SetUserAction, SetErrorAction, SetIsLoadingAction} from '../auth/types';

export const AuthActionCreators = {
    // AC
    setUser: (users: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: users}),
    setError: (error: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload: error}),
    setIsAuth: (auth: boolean): SetIsAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: auth}),
    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload: isLoading}),

    // Thunk
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            setTimeout( async () => {
                const response = await axios.get<IUser[]>('./users.json');
                const mockUser = response.data.find(user => user.username === username && user.password === password);
                if (mockUser) {
                    localStorage.setItem('auth', 'true');
                    localStorage.setItem('username', mockUser.username);
                    dispatch(AuthActionCreators.setIsAuth(true));
                    dispatch(AuthActionCreators.setUser(mockUser));
                } else {
                    dispatch(AuthActionCreators.setError("Неккоректный пароль или логин"));
                } 
                dispatch(AuthActionCreators.setIsLoading(false))
            }, 1000);
        } catch (e) {
            dispatch(AuthActionCreators.setError("Произошла ошибка при логине"));
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        try {
            localStorage.removeItem('auth');
            localStorage.removeItem('username');
            dispatch(AuthActionCreators.setUser({} as IUser));
            dispatch(AuthActionCreators.setIsAuth(false));
        } catch (error) {
            console.warn(error);
        }
    }
}