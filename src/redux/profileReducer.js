const UPDATEPROFILETEXTAREA = 'UPDATE_PROFILE_TEXTAREA';
const ADDPROFILEPOST = 'ADDPROFILEPOST';
const SET_PROFILE = 'SET_PROFILE';


let initialState = {
    profile: null,
    profileInfo: {
        avatar: 'https://sun9-71.userapi.com/impf/c6138/v6138737/152f/04tnjdejYXo.jpg?size=640x480&quality=96&sign=85c53b1681bb92e85c1ac1ff2f8e9319&type=album',
        description: 'Hello My name Is Denis. I am Programmer JS'
    },
    textAreaPostValue: '',
    postData: [
        {
            id: 1,
            text: 'Hi! I am learning JS React!',
            likesCount: 30,
            img: 'https://sun9-71.userapi.com/impf/c6138/v6138737/152f/04tnjdejYXo.jpg?size=640x480&quality=96&sign=85c53b1681bb92e85c1ac1ff2f8e9319&type=album'
        },
        {
            id: 2,
            text: 'I will be a programmer this year!!!',
            likesCount: 1000,
            img: 'https://sun9-71.userapi.com/impf/c6138/v6138737/152f/04tnjdejYXo.jpg?size=640x480&quality=96&sign=85c53b1681bb92e85c1ac1ff2f8e9319&type=album'

        },
        {
            id: 3,
            text: 'I will be a programmer this year!!!',
            likesCount: 10050,
            img: 'https://sun9-71.userapi.com/impf/c6138/v6138737/152f/04tnjdejYXo.jpg?size=640x480&quality=96&sign=85c53b1681bb92e85c1ac1ff2f8e9319&type=album'
        },
        {
            id: 4,
            text: 'I will be a programmer this year!!!',
            likesCount: 10,
            img: 'https://sun9-71.userapi.com/impf/c6138/v6138737/152f/04tnjdejYXo.jpg?size=640x480&quality=96&sign=85c53b1681bb92e85c1ac1ff2f8e9319&type=album'
        }
    ]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATEPROFILETEXTAREA:
            return {
                ...state,
                textAreaPostValue: action.text
            }
        case ADDPROFILEPOST:
            let post = {
                id: 5,
                text: state.textAreaPostValue,
                likesCount: 0,
                img: 'https://sun9-71.userapi.com/impf/c6138/v6138737/152f/04tnjdejYXo.jpg?size=640x480&quality=96&sign=85c53b1681bb92e85c1ac1ff2f8e9319&type=album'
            }
            return {
                ...state,
                postData: [...state.postData, post],
                textAreaPostValue: ''
            }
        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

export const updateProfileTextareaActionCreate = (text) => {
    return {
        type: UPDATEPROFILETEXTAREA,
        text: text
    }
}

export const addProfilePostActionCreate = () => {
    return {
        type: ADDPROFILEPOST
    }
}

export const setProfile = (profile) => {
    return {
        type: SET_PROFILE,
        profile
    }
}
export default profileReducer;