import Messages from './Messages'
import { addMessage } from '../../redux/messageReducer'
import { connect } from 'react-redux'
import { reset } from 'redux-form'
import { getSearchUser } from '../../redux/Users-Reducer'

let mapStateToProps = state => {
	return {
		dialogs: state.messagesPage.dialogs,
		messages: state.messagesPage.messages,
	}
}
const MessagesContainer = connect(mapStateToProps, {
	addMessage,
	reset,
	getSearchUser,
})(Messages)

export default MessagesContainer
