import React, { Component } from 'react';

class Header extends Component {
	render () {
		return(
			<div className="header-line">
				<div className="together"><span>Сравниваем блендеры</span></div>
				<div className="clear_all"><button>Очистить все</button></div>
				<div className="header-icons">
					<img src={require('../img/facebook-icon.png')} alt={"facebook"}/>
					<img src={require('../img/google-icon.png')} alt={"google"}/>
					<img src={require('../img/twitter-icon.png')} alt={"twitter"}/>
					<img src={require('../img/mail-icon.png')} alt={"mail"}/>
				</div>
				<div className="link_btn"><button><a href="#">Поделится ссылкой</a></button></div>
			</div>
		)
	}
}

export default Header;