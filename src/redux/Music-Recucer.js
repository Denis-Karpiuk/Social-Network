const PLAY = 'PLAY'
const DELETE = 'DELETE'
const SETTRACKS = 'SETTRACKS'

const initialState = {
	tracks: [],
}

const musicReducer = (state = initialState, action) => {
	switch (action.type) {
		case PLAY:
			alert(state.tracks[action.index].trackName)
			return state
		case DELETE:
			return {
				...state,
				deleteTrack: [...state.tracks.splice(action.index, 1)],
				tracks: [...state.tracks],
			}
		case SETTRACKS:
			return {
				...state,
				tracks: [...state.tracks, ...action.tracks],
			}
		default:
			return state
	}
}

export const playTrackAC = index => {
	return {
		type: PLAY,
		index: index,
	}
}
export const deleteTrackAC = index => {
	return {
		type: DELETE,
		index: index,
	}
}
export const setTracksAC = tracks => {
	return {
		type: SETTRACKS,
		tracks: tracks,
	}
}

export default musicReducer
