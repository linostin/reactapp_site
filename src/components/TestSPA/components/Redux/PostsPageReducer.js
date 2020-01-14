const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState ={
            newPostText: "test post state example",
            PostsData: [
                {id: "1", post: "Hi world!"},
                {id: "2", post: "How are you?"},
                {id: "3", post: "Nice!"}
            ]
          };

const PostPageReducer = (state = initialState, action) => {

        switch (action.type) {
            case ADD_POST: 
                let NewPost = state.newPostText;
                state.newPostText = "";
                state.PostsData.push({id: 4, post: NewPost});
                return state;
            case UPDATE_NEW_POST_TEXT: 
                state.newPostText = action.newText;
                return state;
            default: 
                return state;
        }

        // if (action.type === ADD_POST) {
        //     let NewPost = state.newPostText;
        //     state.newPostText = "";
        //     state.PostsData.push({id: 4, post: NewPost});
        // } else if (action.type === UPDATE_NEW_POST_TEXT) {
        //     state.newPostText = action.newText;
        // }   
    
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

export default PostPageReducer;