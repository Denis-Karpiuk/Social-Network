export const updateObjectInArray = (arr, propObj, searchProp, newPropsObj) => {
	return arr.map(item => {
		if (item[propObj] === searchProp) {
			return { ...item, ...newPropsObj }
		}
		return item
	})
}
