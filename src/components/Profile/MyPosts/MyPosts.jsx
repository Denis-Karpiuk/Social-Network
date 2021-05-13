import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'


class MyPosts extends React.Component {
    onAddPost = () => { this.props.addPost() }
    onChangeTextValue = (e) => {
        let text = e.target.value;
        this.props.changeTextValue(text)
    }
    onKeyEnter = (e) => e.key === 'Enter' ? this.onAddPost() : false
    render() {
        return (
            <div className={s.myPosts}>
                <h3>My Posts</h3>
                <div className={s.textarea}>
                    <textarea value={this.props.textAreaPostValue} onChange={this.onChangeTextValue} onKeyPress={this.onKeyEnter} placeholder='Enter text of your post' ></textarea>
                </div>
                <div className={s.button}>
                    <button onClick={this.onAddPost}>Add Post</button>
                </div>
                <div className={s.posts}>
                    {this.props.postData.map(post => <Post key={post.id} text={post.text} likesCount={post.likesCount} img={post.img} />)}
                </div>
            </div >
        )
    }
}

export default MyPosts;