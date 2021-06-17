import React from 'react'
import HeaderPage from '../Common/HeaderPage/HeaderPage'
import s from './News.module.css'
import Time from './Time'
import newsBg from '../../assets/images/BackgroundsHeaders/newsBg.jpg'

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
				<HeaderPage img={newsBg} tittle={'News'} />
				<div className={s.news_items}>
					<Time />
					<div className={s.news__text}>
						{this.props.newsTexts.map(news => (
							<div key={news}>{news}</div>
						))}
					</div>
				</div>
			</div>
		)
	}
}
export default News
