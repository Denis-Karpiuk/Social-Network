import { connect } from 'react-redux';
import { addNewsPostActionCreate, updateNewsTextAreaActionCreate } from '../../redux/newsReducer';
import News from "./News";


let mapStateToProps = (state) => {
    return {
        newsTexts: state.newsPage.newsTexts,
        textAreaNewsValue: state.newsPage.textAreaNewsValue
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateTextArea: (text) => {
            dispatch(updateNewsTextAreaActionCreate(text))
        },
        addNewsPost: () => {
            dispatch(addNewsPostActionCreate())
        }

    }
}
const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News)
export default NewsContainer;