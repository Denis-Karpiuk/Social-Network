import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Dialogs from './Dialogs/Dialogs'
import s from './Messages.module.css'

const FormMessages = props => {
	return (
		<div>
			<form onSubmit={props.handleSubmit}>
				<div>
					<Field name='message' component='textarea' />
				</div>
				<button>Отправить сообщение</button>
			</form>
		</div>
	)
}

const FormReduxMessages = reduxForm({ form: 'messages' })(FormMessages)
const onSendMessage = message => {
	console.log(message)
}
const Messages = props => {
	let sendMessage = messageData => props.addMessage(messageData.message)
	return (
		<div className={s.messagesPage}>
			<div className={s.dialogs}>
				{props.dialogs.map(user => (
					<Dialogs key={user.id} id={user.id} name={user.name} />
				))}
			</div>
			<div className={s.messages}>
				{props.messages.map(message => (
					<div key={message.id}>{message.text}</div>
				))}
				<div className={s.formMessage}>
					<FormReduxMessages onSubmit={onSendMessage} />
				</div>
			</div>
		</div>
	)
}
export default Messages
