import { combineReducers, createStore, applyMiddleware } from 'redux';
import { authorizationReducer } from './authorization/authorizationReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    authorization: authorizationReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type AppState = ReturnType<typeof rootReducer>
