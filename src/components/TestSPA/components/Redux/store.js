import PostPageReducer from "./PostsPageReducer"
import DialogsPageReducer from "./DialogsPageReducer"

let store = {
    _state: {
        DialogsPage: {
            NewMessageBody: "",
            DialogsData: [
                {id: "1", name: "user1"},
                {id: "2", name: "user2"},
                {id: "3", name: "user3"}
            ],
        
            MessagesData: [
                {id: "1", message: "Hello!"},
                {id: "2", message: "How are you?"},
                {id: "3", message: "Where you from?"}
            ]
            },
        PostsPage: {
            newPostText: "test post state example",
            PostsData: [
                {id: "1", post: "Hi world!"},
                {id: "2", post: "How are you?"},
                {id: "3", post: "Nice!"}
            ]
            }
        },
    
    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log("State changed");
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.PostsPage =  PostPageReducer(this._state.PostsPage, action);
        this._state.DialogsPage = DialogsPageReducer(this._state.DialogsPage, action);
        this._callSubscriber(this._state);

        }
}

export default store;
window.store = store;