import React from 'react'
import Time from './Time'
import s from './News.module.css'
import Paginator from '../Common/Paginator/Paginator'

class News extends React.Component {
	onUpdateTextarea = e => {
		this.text = e.target.value
		this.props.updateTextArea(this.text)
	}
	onAddNewsPost = () => {
		debugger
		this.props.addNewsPost()
	}
	onPressEnter = e => (e.key === 'Enter' ? this.onAddNewsPost() : false)
	render() {
		return (
			<div className={s.news}>
				<Time />
				<div className={s.newsText}>
					{this.props.newsTexts.map(news => (
						<div key={news}>{news}</div>
					))}
				</div>
				<div>
					<textarea
						className={s.textarea}
						value={this.props.textAreaNewsValue}
						onChange={this.onUpdateTextarea}
						onKeyPress={this.onPressEnter}
					></textarea>
				</div>
				<div className={s.buttonPress}>
					<button onClick={this.onAddNewsPost}>Add News</button>
				</div>
			</div>
		)
	}
}
export default News
