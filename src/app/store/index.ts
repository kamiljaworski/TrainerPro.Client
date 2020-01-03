import { combineReducers, createStore, applyMiddleware } from 'redux';
import { authorizationReducer } from './authorization/authorizationReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const rootReducer = combineReducers({
    authorization:  persistReducer({key: '1', storage: storage}, authorizationReducer),
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);

export type AppState = ReturnType<typeof rootReducer>
