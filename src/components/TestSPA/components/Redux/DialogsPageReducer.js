const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGEBODY = "UPDATE-NEW-MESSAGEBODY";

let initialState ={
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
};

const DialogsPageReducer = (state = initialState, action) => {
    
        switch (action.type) {
            case SEND_MESSAGE:
                let NewBody = state.NewMessageBody;
                state.NewMessageBody = "";
                state.MessagesData.push({id: 4, message: NewBody});
                return state;
            case UPDATE_NEW_MESSAGEBODY: 
                state.NewMessageBody = action.NewBody;
                return state;
            default:
                return state;
        }

    // if (action.type === SEND_MESSAGE) {
    //     let NewBody = state.NewMessageBody;
    //     state.NewMessageBody = "";
    //     state.MessagesData.push({id: 4, message: NewBody});
    // } else if (action.type === UPDATE_NEW_MESSAGEBODY) {
    //     state.NewMessageBody = action.NewBody;
    // }

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

export default DialogsPageReducer;