import Messages from "./Messages";
import { addMessageActionCreate, updateMessagesTextareaActionCreate } from '../../redux/messageReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        usersData: state.messagesPage.usersData,
        textAreaMessagesValue: state.messagesPage.textAreaMessagesValue,
        messagesData: state.messagesPage.messagesData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(addMessageActionCreate())
        },
        changeTextareaValue: (text) => {
            dispatch(updateMessagesTextareaActionCreate(text))
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;