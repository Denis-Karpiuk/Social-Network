import React from 'react'
import Dialogs from './Dialogs/Dialogs'
import s from './Messages.module.css'

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
			</div>
		</div>
	)
}
export default Messages
