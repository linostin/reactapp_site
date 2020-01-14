import {createStore, combineReducers} from "redux";
import PostPageReducer from "./PostsPageReducer"
import DialogsPageReducer from "./DialogsPageReducer"

let reducers = combineReducers({
    PostsPage: PostPageReducer,
    DialogsPage: DialogsPageReducer
});

let store = createStore(reducers);

export default store;

