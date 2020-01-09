let RenderEntireTree = () => {
    console.log("State changed")
}

let state = {
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
    }
    

export const addPost = () => {
    let NewPost = {
        id: 5,
        post: state.PostsPage.newPostText
    }
    state.PostsPage.PostsData.push(NewPost);
    state.PostsPage.newPostText = "";
    RenderEntireTree(state);
}


export const updateNewPostText = (newText) => {
    state.PostsPage.newPostText = newText;
    RenderEntireTree(state);
}

export const subscribe = (observer) => {
    RenderEntireTree = observer;
}


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


export default state;