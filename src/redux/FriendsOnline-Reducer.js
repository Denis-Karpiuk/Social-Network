const initialState = {
	name: 'Friends Online',
	link: '/friends',
	friends: [
		{
			id: 1,
			name: 'Evgeniy',
			avatar:
				'https://sun2.velcom-by-minsk.userapi.com/s/v1/ig2/cNMLAJP7xC347e53DZGA4OkP9XuAlkXOGiNZW6QsJE0uh4SaFahf434JgOsDUfGQ1AXp8j6cYTKn3nxOBPxiCkCH.jpg?size=200x0&quality=96&crop=0,540,1620,1620&ava=1',
			link: '/friends01',
		},
		{
			id: 2,
			name: 'Evgeniy',
			avatar:
				'https://sun9-32.userapi.com/impf/c841223/v841223028/15c7c/C8-TbtEBfmo.jpg?size=1536x2048&quality=96&sign=0e2609f70749f508a9b8abf0096cf031&type=album',
			link: '/friends02',
		},
		{
			id: 3,
			name: 'July',
			avatar:
				'https://sun1.velcom-by-minsk.userapi.com/s/v1/if1/OGB0bI0uymSdYN6wu844fMU6cmB__iKjJ5qi8zdiFzm5WMlgzVd2cg0-cifzAMBNUeVBrWnJ.jpg?size=200x0&quality=96&crop=856,182,1086,1521&ava=1',
			link: '/friends03',
		},
	],
}

const friendsOnlineReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state
	}
}

export default friendsOnlineReducer
