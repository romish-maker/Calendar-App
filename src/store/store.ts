import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {authReducer} from '../store/reducers/auth/authReducer';
import {EventReducer} from '../store/reducers/event/eventReducer';


const reducers = combineReducers({
    authMe: authReducer,
    event: EventReducer
})

export const store = createStore(reducers, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;