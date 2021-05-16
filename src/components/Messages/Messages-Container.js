import Messages from './Messages'
import { addMessage } from '../../redux/messageReducer'
import { connect } from 'react-redux'

let mapStateToProps = state => {
	return {
		dialogs: state.messagesPage.dialogs,
		messages: state.messagesPage.messages,
	}
}
const MessagesContainer = connect(mapStateToProps, { addMessage })(Messages)

export default MessagesContainer
