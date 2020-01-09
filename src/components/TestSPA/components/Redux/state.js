const ADD_POST = "ADD-POST";
 const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
    _state: {
        DialogsPage: {
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
            let NewPost = {
                id: 5,
                post: this._state.PostsPage.newPostText
            }
            this._state.PostsPage.PostsData.push(NewPost);
            this._state.PostsPage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.PostsPage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {
      type: ADD_POST
    }
  }
  
export const updateNewPostTextActionCreator = (text) => {
    return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
    }
  }


// let RenderEntireTree = () => {
//     console.log("State changed")
// }

// let state = {
//     DialogsPage: {
//         DialogsData: [
//             {id: "1", name: "user1"},
//             {id: "2", name: "user2"},
//             {id: "3", name: "user3"}
//         ],
    
//         MessagesData: [
//             {id: "1", message: "Hello!"},
//             {id: "2", message: "How are you?"},
//             {id: "3", message: "Where you from?"}
//         ]
//         },
//     PostsPage: {
//         newPostText: "test post state example",
//         PostsData: [
//             {id: "1", post: "Hi world!"},
//             {id: "2", post: "How are you?"},
//             {id: "3", post: "Nice!"}
//         ]
//         }
//     }
    

// export const addPost = () => {
//     let NewPost = {
//         id: 5,
//         post: state.PostsPage.newPostText
//     }
//     state.PostsPage.PostsData.push(NewPost);
//     state.PostsPage.newPostText = "";
//     RenderEntireTree(state);
// }


// export const updateNewPostText = (newText) => {
//     state.PostsPage.newPostText = newText;
//     RenderEntireTree(state);
// }

// export const subscribe = (observer) => {
//     RenderEntireTree = observer;
// }


// let DialogsData =[
//     {id: "1", name: "user1"},
//     {id: "2", name: "user2"},
//     {id: "3", name: "user3"}
// ]

// let MessagesData =[
//     {id: "1", message: "Hello!"},
//     {id: "2", message: "How are you?"},
//     {id: "3", message: "Where you from?"}
// ]


export default store;