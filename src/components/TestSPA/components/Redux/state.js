const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGEBODY = "UPDATE-NEW-MESSAGEBODY";


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
        if (action.type === ADD_POST) {
            let NewPost = this._state.PostsPage.newPostText;
            this._state.PostsPage.newPostText = "";
            this._state.PostsPage.PostsData.push({id: 4, post: NewPost});
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.PostsPage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let NewBody = this._state.DialogsPage.NewMessageBody;
            this._state.DialogsPage.NewMessageBody = "";
            this._state.DialogsPage.MessagesData.push({id: 4, message: NewBody});
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGEBODY) {
            this._state.DialogsPage.NewMessageBody = action.NewBody;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {
      type: ADD_POST,
    }
  }
  
export const updateNewPostTextActionCreator = (text) => {
    return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
    }
  }

export const sendMessageActionCreator = () => {
    return {
      type: SEND_MESSAGE,
    }
  }
  
export const updateNewMessageBodyActionCreator = (body) => {
    return {
      type: UPDATE_NEW_MESSAGEBODY,
      NewBody: body
    }
  }


export default store;