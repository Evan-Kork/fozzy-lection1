import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField';
import style from './Login.css';
import Animation from './LoginAninm/AnimationComponent.jsx';
import paperStyle from './paperStyle'

const animStyle = ( paramW, paramH, sec ) => (
	{
		width: paramW,
		height: paramH,
        animationDuration: sec + 's',
		animationDeploy: sec + 's'
	}
);

const ButtonLabel = () => (
	<div className={style.ButtonContainer}>
		<FlatButton label="Sing in"
			hovercolor="#64FFDA"
			rippleColor="#B2FF59"
			style={{
				color: '#009688'
			}}
		/>
		<FlatButton label="Sing up"
			secondary={true}
			hovercolor="#8AA62F"
			rippleColor="#FF7043"
		/>
	</div>
);

const InputLabel = () => (
	<div className={style.InputContainer}>
		<TextField
			hintText="Email Field"
			floatingLabelText="Email"
			type="email"
		/>
		<TextField
			floatingLabelText="Password"
			type="password"
		/>
		<ButtonLabel />
	</div>
);

const PaperComponent = () => (
	<Paper style={paperStyle} zDepth={2} circle={true}>
		<InputLabel />
	</Paper>
);

export default class StrartPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false
		}
	}

	render(){
		return(
			<div className = {style.StartPage}>
					<PaperComponent />
					<Animation />
			</div>
		)
	}
}

