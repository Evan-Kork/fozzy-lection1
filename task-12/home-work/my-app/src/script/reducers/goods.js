//масив із товарами які у нас є...

const INITIAL_STATE = [
	{
		id: 1,
		name: "Bosch",
		img: "/images//img-1.jpg",
		price: "1504 грн",
		powered: "Мощность: 1900 Вт",
		ice: "Колка льда: Нет",
		complactation: "Комплектация: чаша измельчителя из стекла",
		weight: "1.45кг",
		isActive: false,
	},
	{
		id: 2,
		name: "Braun",
		img: "/images//img-2.jpg",
		price: "2104 грн",
		powered: "Мощность: 1600 Вт",
		ice: "Колка льда: Нет",
		complactation: "Комплектация: Лезвие из нержавеющей стали, прорезиненные ножки",
		weight: "Вес: 1.2кг",
		isActive: false,
	},
	{
		id: 3,
		name: "Scarlet",
		img: "/images//img-3.jpg",
		price: "1904 грн",
		powered: "Мощность: 2900 Вт",
		ice: "Колка льда: Нет",
		complactation: "Комплектация: чаша измельчителя из стекла",
		weight: "Вес: 1.9кг",
		isActive: false,
	},
	{
		id: 4,
		name: "Ergo",
		img: "/images/img-4.jpg",
		price: "1124 грн",
		powered: "Мощность: 2000 Вт",
		ice: "Колка льда: Нет",
		complactation: "Комплектация: Кувшин, Инструкция по эксплуатации, Гарантийный талон",
		weight: "Вес: 2.3кг",
		isActive: false,
	}
]

export default (state = INITIAL_STATE, payload) => {

	switch(payload.type) {
			case 'CHANGE_GOODS': 
		return changeActivity(state, payload.id);
			default :
				return INITIAL_STATE;
	}
}

const changeActivity = (goodsArr, id) => {
	const result = goodsArr.map((item, itemId) => {
			if(itemId === id) {
				return {...item, isActive: !item.isActive}
			}
			return item;
	})
	return result;
}