import s from './TextItem.module.css'

const TextItem = props => {
	let answers = props.messagesData.answer.map(answer => (
		<div key={answer.length}>{answer}</div>
	))
	let messages = props.messagesData.message.map(message => (
		<div key={message.length}>{message}</div>
	))
	return (
		<div className={s.textItems}>
			<div className={s.answer}>{answers}</div>
			<div className={s.message}>{messages}</div>
		</div>
	)
}
export default TextItem
