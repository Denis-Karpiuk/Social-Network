import { connect } from 'react-redux'
import { compose } from 'redux'
import { reset } from 'redux-form'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import { addMessage } from '../../redux/Messages-Reducer'
import Messages from './Messages'

let mapStateToProps = state => {
	return {
		dialogs: state.messagesPage.dialogs,
		messages: state.messagesPage.messages,
	}
}
const MessagesContainer = compose(
	connect(mapStateToProps, {
		addMessage,
		reset,
	}),
	withAuthRedirect
)(Messages)

export default MessagesContainer
