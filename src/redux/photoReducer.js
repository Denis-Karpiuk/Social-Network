const CREATEALBUM = 'CREATEALBUM';
const ADDPHOTO = 'ADDPHOTO';

let initialState = {
    albums: ['https://sun9-48.userapi.com/impf/aDmPDZGKyG2WJ9m6xkSuc4DPolRnRbpDBsH-TQ/1VWO1HDO2CU.jpg?size=1280x960&quality=96&sign=c745e8d52fa1cd5d3cd67a71fd5a45ea&type=album', 'https://sun9-5.userapi.com/impf/c849136/v849136754/c399c/6g2jbO_RT4E.jpg?size=1280x960&quality=96&sign=118f2609d5db93ab33edfd3441f733ff&type=album', 'https://sun9-69.userapi.com/impf/c849332/v849332651/46959/-ybylOBpKYI.jpg?size=2560x1707&quality=96&sign=76834e7a562106a9366f4d8dcd94c656&type=album'],
    photos: ['https://sun9-48.userapi.com/impf/aDmPDZGKyG2WJ9m6xkSuc4DPolRnRbpDBsH-TQ/1VWO1HDO2CU.jpg?size=1280x960&quality=96&sign=c745e8d52fa1cd5d3cd67a71fd5a45ea&type=album', 'https://sun9-5.userapi.com/impf/c849136/v849136754/c399c/6g2jbO_RT4E.jpg?size=1280x960&quality=96&sign=118f2609d5db93ab33edfd3441f733ff&type=album', 'https://sun9-69.userapi.com/impf/c849332/v849332651/46959/-ybylOBpKYI.jpg?size=2560x1707&quality=96&sign=76834e7a562106a9366f4d8dcd94c656&type=album', 'https://sun9-71.userapi.com/impf/c6138/v6138737/152f/04tnjdejYXo.jpg?size=640x480&quality=96&sign=85c53b1681bb92e85c1ac1ff2f8e9319&type=album', 'https://sun9-40.userapi.com/impf/c850036/v850036234/ee7f5/6ATuI0UnMm4.jpg?size=1280x783&quality=96&sign=70581070a045f737ca32caff2fdf0d0b&type=album', 'https://sun9-5.userapi.com/impf/c846522/v846522839/de422/DAvyJH5Jz6M.jpg?size=2560x1707&quality=96&sign=2e9826f91e6ff89b32e37a712acb26bb&type=album'],
    sumAlbums() { return this.albums.length },
    sumPhotos() { return this.photos.length }
}

const photoReducer = (state = initialState, action) => {
    if (action.img === null || action.img === '') {
        return state;
    } switch (action.type) {
        case ADDPHOTO:
            return {
                ...state,
                photos: [...state.photos, action.img]
            }
        case CREATEALBUM:
            return {
                ...state,
                albums: [...state.albums, action.img]
            }
        default:
            return state;
    }
}

export const createAlbumActionCreate = (address) => {
    return {
        type: CREATEALBUM,
        img: address
    }
}

export const addPhotoActionCreate = (address) => {
    return {
        type: ADDPHOTO,
        img: address
    }
}


export default photoReducer;