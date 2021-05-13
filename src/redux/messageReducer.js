const UPDATEMESSAGESTEXTAREA = 'UPDATEMESSAGESTEXTAREA';
const ADDMESSAGE = 'ADDMESSAGE';


let initialState = {
    textAreaMessagesValue: ' ',
    usersData: [
        { id: 1, name: 'Denis' },
        { id: 2, name: 'Katy' },
        { id: 3, name: 'Ivan' }
    ],
    messagesData:
    {
        id: 1,
        message: ['Hello!', 'How are you?', 'You are the best'],
        answer: ['Hi', 'Best']
    }
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATEMESSAGESTEXTAREA:
            return {
                ...state,
                textAreaMessagesValue: action.text
            }
        case ADDMESSAGE:
            let stateCopy = { ...state };
            stateCopy.messagesData.answer.push(state.textAreaMessagesValue);
            stateCopy.textAreaMessagesValue = '';
            return stateCopy;
        default:
            return state;
    }
}

export const updateMessagesTextareaActionCreate = (text) => {
    return {
        type: UPDATEMESSAGESTEXTAREA,
        text: text
    }
};
export const addMessageActionCreate = () => {
    return {
        type: ADDMESSAGE
    }
};
export default messageReducer;
