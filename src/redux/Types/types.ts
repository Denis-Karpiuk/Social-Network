export type ProfileType = {
	userId: number | undefined
	lookingForAJob: boolean
	lookingForAJobDescription: number | undefined
	fullName: string | undefined
	contacts: ContactsType
	photos: PhotosType
}

export type ContactsType = {
	github: string | null
	vk: string | null
	facebook: string | null
	instagram: string | null
	twitter: string | null
	website: string | null
	youtube: string | null
	mainLink: string | null
}
export type PhotosType = {
	small: string | null
	large: string | null
}

export type PostType = {
	id: number
	text: string
	likes: number
}
export type UserType = {
	name: 'Shubert'
	id: number | null
	photos: PhotosType
	status: null | string
	followed: boolean
}
export type Nullable<T> = T | null;