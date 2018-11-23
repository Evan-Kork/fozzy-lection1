//в цьому файлі ми можемо поєднувати всі наші преобразователі....
import {combineReducers} from 'redux';
import goods from './goods';
import ActiveGoods from './goods-active';

const allReducers = combineReducers ({
	goods: goods,
	active: ActiveGoods
});

export default allReducers



//change to index.js this file 