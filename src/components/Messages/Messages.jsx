import React from 'react';
import s from './Messages.module.css'
import TextItem from './TextItem/TextItem';
import UserMessageItem from './UserMessageItem/UserMessageItem';


const Messages = props => {
    let usersElements = props.usersData.map(user => <UserMessageItem id={user.id} name={user.name} />);
    let onChangeTextareaValue = (e) => {
        let text = e.target.value;
        props.changeTextareaValue(text);
    }
    let onSendMessage = () => props.sendMessage();
    let onPressEnter = (e) => e.key === 'Enter' ? onSendMessage() : false;
    return (
        <div className={s.messages}>
            <div className={s.messagesUsers}>
                {usersElements}
            </div>
            <div className={s.messagesTexts}>
                <div className={s.conversation}>
                    <TextItem messagesData={props.messagesData} />
                </div>
                <div className={s.messageSend}>
                    <div className={s.textarea}>
                        <textarea value={props.textAreaMessagesValue} onChange={onChangeTextareaValue} onKeyPress={onPressEnter} ></textarea>
                    </div>
                    <div className={s.button}>
                        <button onClick={onSendMessage} >Send Message</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Messages;