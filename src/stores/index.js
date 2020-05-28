import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducer/userReducer";
import guildReducer from "./reducer/guildReducer";

const rootReducer = combineReducers({
    user: userReducer,
    guild: guildReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
    console.log('%c Oh my heavens! ', 'background: #222; color: #bada55', store.getState());
});
export default store;