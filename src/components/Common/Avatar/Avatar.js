import React from 'react'
import avatar from '../../../assets/images/avatar1.png'

const Avatar = ({ width, height }) => {
	const style = {
		width: width,
		height: height,
	}
	return (
		<div>
			<img style={style} src={avatar} />
		</div>
	)
}
export default Avatar
