import { connect } from 'react-redux'
import { deleteTrackAC, playTrackAC, setTracksAC } from '../../redux/Music-Recucer'
import Music from './Music'


const mapStateToProps = (state) => {
    return {
        pageName: state.musicPage.pageName,
        tracks: state.musicPage.tracks
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        playTrack: (index) => {
            dispatch(playTrackAC(index))
        },
        deleteTrack: (index) => {
            dispatch(deleteTrackAC(index))
        },
        setTracks: (tracks) => {
            dispatch(setTracksAC(tracks))
        }
    }
}
const Music_Container = connect(mapStateToProps, mapDispatchToProps)(Music);

export default Music_Container;