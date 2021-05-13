import s from './TextItem.module.css'

const TextItem = (props) => {
    let answers = props.messagesData.answer.map(answer => <div>{answer}</div>)
    let messages = props.messagesData.message.map(message => <div>{message}</div>)
    return (
        <div className={s.textItems}>
            <dvi className={s.answer}>{answers}</dvi>
            <div className={s.message}>{messages}</div>
        </div>
    )
}
export default TextItem;