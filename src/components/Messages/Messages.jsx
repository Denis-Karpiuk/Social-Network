import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, maxLength15 } from '../../util/Validators'
import { Textarea } from '../Common/FormsControl/FormsControl'
import Dialogs from './Dialogs/Dialogs'
import s from './Messages.module.css'

const FormMessages = props => {
	return (
		<div>
			<form onSubmit={props.handleSubmit}>
				<div>
					<Field
						name='message'
						placeholder='enter your message'
						component='textarea'
					/>
				</div>
				<button>Отправить сообщение</button>
			</form>
		</div>
	)
}

const FormReduxMessages = reduxForm({ form: 'messages' })(FormMessages)
const Messages = props => {
	let sendMessage = messageData => {
		props.addMessage(messageData.message)
		props.reset('messages')
	}
	return (
		<div className={s.messagesPage}>
			<div className={s.progress}>in progress right now...</div>
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
					<FormReduxMessages onSubmit={sendMessage} />
				</div>
			</div>
		</div>
	)
}
export default Messages
