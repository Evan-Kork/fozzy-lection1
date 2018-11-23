import React, {Component} from 'react';
import {connect} from 'react-redux';


class Details extends Component {
	render () {
		const activeGoods = this.props.goods.map((item, id) => {
				if(item.isActive) {
						return (
							<div key={`${id}-goods-items-active`} className="field-goods">
								<h2>{item.name}</h2>
								<div className="brend_img"><img src={item.img} alt=""/></div>
								<div className="price-field"><span>{item.price}</span></div>
								<div><span>{item.powered}</span></div>
								<div><span>{item.ice}</span></div>
								<div><span>{item.complactation}</span></div>
								<div><span>{item.weight}</span></div>
							</div>
						)
				}
				return null;
		})
		return(
			<div>
				{activeGoods}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return{
		good: state.active,
		goods: state.goods
	};
}

export default connect (mapStateToProps)(Details);