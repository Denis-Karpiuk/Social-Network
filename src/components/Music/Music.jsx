import React from 'react'
import s from './Music.module.css'

const Music = props => {
	if (props.tracks.length === 0) {
		props.setTracks([
			{
				id: 1,
				trackName: 'Hello',
				artist: 'Cue',
				preView:
					'https://img2.freepng.ru/20180402/jiw/kisspng-computer-icons-youtube-play-button-clip-art-play-button-5ac1d4d234ce28.5671524315226523702163.jpg',
				times: '3.56',
			},
			{
				id: 2,
				trackName: 'Beautiful life',
				artist: 'Thirty second to mars',
				preView:
					'https://img2.freepng.ru/20180402/jiw/kisspng-computer-icons-youtube-play-button-clip-art-play-button-5ac1d4d234ce28.5671524315226523702163.jpg',
				times: '5.06',
			},
			{
				id: 3,
				trackName: 'Stop and Play',
				artist: 'Justin Beebier',
				preView:
					'https://img2.freepng.ru/20180402/jiw/kisspng-computer-icons-youtube-play-button-clip-art-play-button-5ac1d4d234ce28.5671524315226523702163.jpg',
				times: '4.00',
			},
			{
				id: 4,
				trackName: 'Long Music',
				artist: 'IzzaMusic',
				preView:
					'https://img2.freepng.ru/20180402/jiw/kisspng-computer-icons-youtube-play-button-clip-art-play-button-5ac1d4d234ce28.5671524315226523702163.jpg',
				times: '50.56',
			},
		])
	}
	return (
		<div className={s.musicPage}>
			<div className={s.pageTitle}>{props.pageName}</div>
			<div iv className={s.tracks}>
				{props.tracks.map((track, index) => (
					<div className={s.track} key={track.id}>
						<div className={s.preView} onClick={() => props.playTrack(index)}>
							<img src={track.preView} />
						</div>
						<div className={s.test}>
							<div className={s.trackName}>{track.trackName}</div>
							<div className={s.artist}>{track.artist}</div>
						</div>

						<div className={s.trackInfo}>
							<div className={s.timeAndButton}>
								<div className={s.times}>{track.times}</div>
								<div className={s.time_button}>
									<div className={s.button}>
										<button onClick={() => props.deleteTrack(index)}>
											delete
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Music
