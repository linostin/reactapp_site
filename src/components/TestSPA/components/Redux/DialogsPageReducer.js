const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGEBODY = "UPDATE-NEW-MESSAGEBODY";

const DialogsPageReducer = (state, action) => {
    
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