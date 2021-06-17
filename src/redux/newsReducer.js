const UPDATENEWSTEXTAREA = 'UPDATENEWSTEXTAREA'
const ADDNEWSPOST = 'ADDNEWSPOST'

let initialState = {
	newsTexts: ['in progress....'],
}

const newsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATENEWSTEXTAREA:
			return {
				...state,
				textAreaNewsValue: action.text,
			}
		case ADDNEWSPOST:
			return {
				...state,
				newsTexts: [...state.newsTexts, state.textAreaNewsValue],
				textAreaNewsValue: '',
			}

		default:
			return state
	}
}

export const updateNewsTextAreaActionCreate = text => {
	return {
		type: UPDATENEWSTEXTAREA,
		text: text,
	}
}
export const addNewsPostActionCreate = () => {
	return {
		type: ADDNEWSPOST,
	}
}

export default newsReducer
