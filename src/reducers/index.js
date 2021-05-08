import {combineReducers} from "redux";
import { userReducer } from "./reducer";


export default combineReducers({
    job : userReducer,
});
