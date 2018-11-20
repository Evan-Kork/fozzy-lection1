import React, {Component} from 'react';
import {connect} from 'react-redux';
import {select} from '../actions/index';


class GoodsList extends Component {
	showList() {
		return this.props.goods.map((goods, id, img) =>{
			return (
				<div key={`${goods.id}-list-goods`} className="sidebar_field"><input type="checkbox" 
					onClick={() => this.props.select(id)} 
				/>{goods.name}
					<img src={'../img/goods.img'} alt="img" />
				</div>
			);
		});
	}
	render(){
		return(
				<div>{this.showList()}</div>
		)
	}
}

function mapStateToProps(state) {
	return{
		goods: state.goods
	};
}


const mapDispatchToProps = dispatch => {
  return {
    select: id => dispatch(select(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoodsList);