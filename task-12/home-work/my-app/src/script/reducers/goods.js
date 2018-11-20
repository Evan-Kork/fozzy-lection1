//масив із товарами які у нас є...

const INITIAL_STATE = [
	{
		id: 1,
		name: "Bosch",
		img: "https://hotline.ua/img/tx/900/900779_s265.jpg",
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
		img: "https://i2.rozetka.ua/goods/7238971/braun_jb_3010_tribute_images_7238971854.jpg",
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
		img: "https://hotline.ua/img/tx/169/169736659_s265.jpg",
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
		img: 'https://i1.foxtrot.com.ua/product/MediumImages/6354000_1.jpg',
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