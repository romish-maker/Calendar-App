import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {authReducer} from '../store/reducers/auth/authReducer';


const reducers = combineReducers({
    authMe: authReducer
})

export const store = createStore(reducers, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;