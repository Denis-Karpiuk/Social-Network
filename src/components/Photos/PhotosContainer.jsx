import Photos from './Photos'
import {
	addPhotoActionCreate,
	createAlbumActionCreate,
} from '../../redux/photoReducer'
import { connect } from 'react-redux'

let mapStateToProps = state => {
	return {
		albums: state.photosPage.albums,
		photos: state.photosPage.photos,
		sumPhotos: state.photosPage.sumPhotos(),
		sumAlbums: state.photosPage.sumAlbums(),
	}
}
let mapDispatchToProps = dispatch => {
	return {
		createAlbum: () => {
			let imgAddress = prompt('url')
			dispatch(createAlbumActionCreate(imgAddress))
		},
		addPhoto: () => {
			let imgAddress = prompt('url')
			dispatch(addPhotoActionCreate(imgAddress))
		},
	}
}
const PhotosContainer = connect(mapStateToProps, mapDispatchToProps)(Photos)
export default PhotosContainer
