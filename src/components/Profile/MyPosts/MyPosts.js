import React from 'react'
import { Field, Form, reduxForm } from 'redux-form'
import Icon from '../../Common/Icon/Icon'
import TittleItem from '../../Common/TittleItem/TittleItem'
import s from './MyPosts.module.css'
import Post from './Post.js/Post'

const PostForm = ({ handleSubmit, profilePhoto }) => {
	return (
		<div className={s.postForm}>
			<Form onSubmit={handleSubmit}>
				<div className={s.postForm__item}>
					<div className={s.postForm__avatar}>
						<Icon img={profilePhoto} r='50%' />
					</div>
					<div className={s.postForm__textarea}>
						<Field
							name='postText'
							placeholder='Write something here...'
							component='textarea'
							type='textarea'
						/>
					</div>
				</div>
				<div className={s.postForm__button}>
					<button>Create Post</button>
				</div>
			</Form>
		</div>
	)
}
const PostReduxForm = reduxForm({ form: 'post' })(PostForm)

const MyPosts = ({ posts, profilePhoto, addPostProfile, reset }) => {
	const addPost = data => {
		addPostProfile(data.postText)
		reset('post')
	}
	if (!posts) return null
	return (
		<div className={s.myPosts}>
			<div className={s.createPosts}>
				<TittleItem tittle={'Create Post'} />
				<PostReduxForm profilePhoto={profilePhoto} onSubmit={addPost} />
			</div>
			<div className={s.posts}>
				<div className={s.tittle}>
					<TittleItem tittle={'My Posts'} />
				</div>
				{posts.map(post => (
					<div key={post.id} className={s.post}>
						<Post
							profilePhoto={profilePhoto}
							text={post.text}
							likes={post.likes}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default MyPosts
