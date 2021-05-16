import React from 'react'
import { Field, reduxForm } from 'redux-form'
import s from './Messages.module.css'
import TextItem from './TextItem/TextItem'
import UserMessageItem from './UserMessageItem/UserMessageItem'

const MessageForm = props => {
	return (
		<div>
			<form onSubmit={props.handleSubmit}>
				<Field name='message' component='input' />
				<button>Send Message</button>
			</form>
		</div>
	)
}

const MessageReduxForm = reduxForm({ form: 'message' })(MessageForm)

const onSubmit = data => console.log(data)

const Messages = props => {
	let usersElements = props.usersData.map(user => (
		<UserMessageItem key={user.id} id={user.id} name={user.name} />
	))
	let onChangeTextareaValue = e => {
		let text = e.target.value
		props.changeTextareaValue(text)
	}
	let onSendMessage = () => props.sendMessage()
	let onPressEnter = e => (e.key === 'Enter' ? onSendMessage() : false)
	return (
		<div className={s.messages}>
			<div className={s.messagesUsers}>{usersElements}</div>
			<div className={s.messagesTexts}>
				<div className={s.conversation}>
					<TextItem messagesData={props.messagesData} />
				</div>
				<div className={s.messageSend}>
					<MessageReduxForm onSubmit={onSubmit} />
				</div>
			</div>
		</div>
	)
}
export default Messages
