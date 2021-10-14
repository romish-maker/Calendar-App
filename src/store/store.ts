import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


const reducers = combineReducers({

})

export const store = createStore(reducers, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;