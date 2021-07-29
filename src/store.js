import {createStore, applyMiddleware , combineReducers} from "redux";
import thunk from "redux-thunk";
import {userReducer} from "./reducer/UserReducer"



const Reducers = combineReducers({

        userStore : userReducer
    });

const store = createStore( Reducers,applyMiddleware(thunk));
export default store
