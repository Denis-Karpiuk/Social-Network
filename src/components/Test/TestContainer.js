import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuth } from '../../hoc/withAuth'
import {
	changePages,
	choicePage,
	getUsersTest,
	followUser,
	unFollowUser,
} from '../../redux/Test-Reducer'
import Test from './Test'

class TestContainerClass extends React.Component {
	componentDidMount() {
		this.props.getUsersTest(
			this.props.testPage.pageNumber,
			this.props.testPage.pageSize
		)
	}
	render() {
		let prevNextPages = pageNumber => {
			this.props.getUsersTest(pageNumber, this.props.testPage.pageSize)
			this.props.changePages(pageNumber)
		}

		let activePage = pageNumber => {
			this.props.getUsersTest(pageNumber, this.props.testPage.pageSize)
			this.props.choicePage(pageNumber)
		}
		return (
			<Test
				prevNextPages={prevNextPages}
				activePage={activePage}
				{...this.props}
			/>
		)
	}
}

const mapStateToProps = state => {
	return {
		testPage: state.testPage,
	}
}

const OneTestContainer = compose(
	connect(mapStateToProps, {
		changePages,
		choicePage,
		getUsersTest,
		followUser,
		unFollowUser,
	}),
	withAuth
)(TestContainerClass)

export default OneTestContainer
