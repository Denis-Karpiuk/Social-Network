import React from 'react'

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status,
	}
	activeEditMode = () => {
		this.setState({
			editMode: true,
		})
	}
	changeStatus = e => {
		this.setState({
			status: e.currentTarget.value,
		})
	}
	deActiveEditMode = () => {
		this.setState({
			editMode: false,
		})
		this.props.updateStatus(this.state.status)
	}
	componentDidUpdate(prevProps) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status,
			})
		}
	}
	render() {
		return (
			<div>
				{this.state.editMode ? (
					<input
						onBlur={this.deActiveEditMode}
						autoFocus={true}
						onChange={this.changeStatus}
						value={this.state.status}
					/>
				) : (
					<span onDoubleClick={this.activeEditMode}>
						{this.props.status || 'Нет Статуса'}
					</span>
				)}
			</div>
		)
	}
}
export default ProfileStatus
