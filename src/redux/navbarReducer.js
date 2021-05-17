let initialState = {
	navbarBlock: [
		{
			id: 1,
			name: 'Моя Страница',
			link: '/profile',
			img:
				'https://www.pngitem.com/pimgs/m/87-877270_logo-icon-profile-png-transparent-png.png',
		},
		{
			id: 2,
			name: 'Новости',
			link: '/news',
			img:
				'https://e7.pngegg.com/pngimages/917/849/png-clipart-computer-icons-news-media-newspaper-press-release-veille-juridique-text-logo.png',
		},
		{
			id: 3,
			name: 'Сообщения',
			link: '/messages',
			img:
				'https://library.kissclipart.com/20181213/fce/kissclipart-message-logo-png-clipart-computer-icons-clip-art-2ce7c3ec0ae1623d.jpg',
		},
		{
			id: 4,
			name: 'Фотографии',
			link: '/photos',
			img:
				'https://img2.freepng.ru/20180426/pfw/kisspng-computer-icons-camera-photography-5ae221306ada91.9319799815247690724377.jpg',
		},
		{
			id: 5,
			name: 'Музыка',
			link: '/music',
			img: 'http://s1.iconbird.com/ico/2013/9/452/w512h5121380476942music.png',
		},
		{
			id: 6,
			name: 'Видео',
			link: '/video',
			img:
				'https://w7.pngwing.com/pngs/639/88/png-transparent-documentary-film-computer-icons-cinema-video-icon-miscellaneous-angle-text.png',
		},
		{
			id: 7,
			name: 'Users',
			link: '/users',
			img:
				'https://img1.pnghut.com/5/13/8/DUEbm10kQ4/logo-love-black-friendship-symbol.jpg',
		},
	],
	navFriends: {
		name: 'Друзья',
		link: '/friends2',
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
	},
}

const navbarReducer = (state = initialState, aciton) => {
	return state
}

export default navbarReducer
