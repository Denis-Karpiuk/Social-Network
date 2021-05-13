import { connect } from 'react-redux';
import { addProfilePostActionCreate, updateProfileTextareaActionCreate } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        textAreaPostValue: state.profilePage.textAreaPostValue
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        changeTextValue: (text) => {
            dispatch(updateProfileTextareaActionCreate(text));
        },
        addPost: () => {
            dispatch(addProfilePostActionCreate())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;