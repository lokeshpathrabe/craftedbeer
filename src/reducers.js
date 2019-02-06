import { combineReducers } from "redux";
import beerPanelReducers from "./projects/craftedBeer/reducers/beerPanelReducer"
import filterReducer from "./projects/craftedBeer/reducers/filterReducer"

const shadowReducer = (showShadow = false, action) => {
    return action.type == "toggle-shadow" ? !showShadow: showShadow;
}

export default combineReducers({beer: beerPanelReducers, filter: filterReducer, showShadow: shadowReducer});