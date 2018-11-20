import React, { Component } from 'react';

class Header extends Component {
	render () {
		return(
			<div className="header-line">
				<div className="together"><span>Сравниваем блендеры</span></div>
				<div className="clear_all"><button onclick={this.setState=null}>Очистить все</button></div>
				<div className="header-icons">
					<img src="/facebook-icon.png" alt={"facebook"}/>
					<img src="/google-icon.png" alt={"google"}/>
					<img src="/twitter-icon.png" alt={"twitter"}/>
					<img src="/mail-icon.png" alt={"mail"}/>
				</div>
				<div className="link_btn"><button><a href="#">Поделится ссылкой</a></button></div>
			</div>
		)
	}
}

export default Header;