import React from 'react'
import HeaderPage from '../Common/HeaderPage/HeaderPage'
import s from './News.module.css'
import Time from './Time'
import newsBg from '../../assets/images/BackgroundsHeaders/newsBg.jpg'

class News extends React.Component {
	render() {
		return (
			<div className={s.news}>
				<HeaderPage img={newsBg} tittle={'News'} />
				<div className={s.news_items}>
					<Time />
					<div className={s.news__text}>in progress...</div>
				</div>
			</div>
		)
	}
}
export default News
