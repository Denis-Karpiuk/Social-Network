import { useState } from 'react'
import s from './ProfileStatus.module.css'

const ProfileStatusWithHook = props => {
	let [status, setStatus] = useState(props.status)
	let [editMode, setEditMode] = useState(false)
	let activeEditMode = () => {
		setEditMode(true)
	}
	let deActiveEditMode = () => {
		setEditMode(false)
		props.updateStatus(status)
	}
	let changeStatus = e => {
		setStatus(e.currentTarget.value)
	}

	return (
		<div className={s.status}>
			{!editMode && (
				<span onDoubleClick={activeEditMode}>
					{props.status ? props.status : 'not status'}
				</span>
			)}
			{editMode && (
				<input
					value={status}
					onBlur={deActiveEditMode}
					autoFocus
					onChange={changeStatus}
				></input>
			)}
		</div>
	)
}

export default ProfileStatusWithHook
