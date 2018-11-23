export const select = (id) => {
	console.log('action', id);
	return{
		type: "CHANGE_GOODS",
		id: id
	}
};