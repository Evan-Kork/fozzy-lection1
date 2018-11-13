import React, {Component} from 'react'
import './Test.css'

const question = [{
		question: "сколько будет 4+4:",
		answer: ["8"],
		variations: ["4", "8", "1", "10"],
		type: "radio",
		name: "one"
	}, {
		question: "Отметьте гласные буквы",
		answer: ["о", "а"],
		variations: ["о", "в", "ц", "а"],
		type: "checkbox",
		name:"two"
	}, {
		question: " Отметьте согласные буквы",
		answer: ["в", "м"],
		variations: ["о", "в", "м", "а"],
		type: "checkbox",
		name: "three"
	}, {
		question: "Введите имя чемпиона",
		answer: ["Валера"],
		variations: [""],
		type: "text",
		name: "four"
	}];


class Test extends Component{
				constructor(props) {
				super(props);
				this.state = { answers: []};
			}

			componentDidMount() {
				// console.log('didMountWork');
				let initDataAnswers = [];
				for (var i = 0; i < question.length; i++) {
					console.log(question[i].answer.length);
					if (question[i].answer.length === 1) {
							initDataAnswers.push('');
					}else{
						initDataAnswers.push([]);
					}
				}
				this.setState({answers: initDataAnswers});
			}

		changeValue = (event,index) => {
			console.log(this.state.answers[index]);
				let changedAnswers = this.state.answers;
				let copyMassive = [...this.state.answers];
				// changedAnswers[index] = event.target.value;
				// this.setState({answers: changedAnswers});
				if (Array.isArray(copyMassive[index])) {
					
					copyMassive[index].push(event.target.value)
			}else {
				copyMassive[index] = event.target.value;
			}
			this.setState({answers: copyMassive})
			let correctAnswers = () =>{

				}
			}
			// this.setState({answers: changedAnswers});
		}



		createElement = (name, type, value, index) => {
			// console.log(type);
			// console.log(value);
			switch(type) {
				case 'radio':
					return (
							<input type={type} name={name} value={value} onChange={event=> {this.changeValue(event, index)}}/>
						);
					case 'checkbox':
					return (
							<input type={type} name={name} value={value} onChange={event=> {this.changeValue(event, index)}}/>
						);
					case 'text':
					return (
							<input type='text' defaultValue="" onChange={event=> {this.changeValue(event, index)}}/>
						);
					default: return(
					<input type="text" value=""/>
				)
			}

		}
		
	render();{

		const arrayElements = question.map((arrayObject, index) => {
			  // console.log('стейт', this.state.answers);
			return(
				<div key={index} className="body">
					<div className="question">{arrayObject.question}</div>
					<div>
						{arrayObject.variations.map((variation, indexVariations) => {
							return(
								<div key={`Hello${indexVariations}`}>
									{variation}{this.createElement(arrayObject.name, arrayObject.type, variation, index)}
								</div>
							)
						})}	
					</div>
				</div>
				)
		})
		return (
			<div>
				<h1 className="App-title">React project Test</h1>
				<div>
					{arrayElements}
				</div>
			</div>
			);
	}
}

export default Test;


///вывести инпут, создать кнопку при надатии на которую будет выводится то что вызвал пользователь
// нужно поработать с обходным масивом, если radio то пустый масив, если checkbox то тогда вложеный масив. 

// проицилиизировать данные по дефолту, нужно сделать чтобы когда checkbox записывались данные и если забираются, тогда переписывался или дописывался

// изучить функцыию find и с помощью её нужно удалить. При нажатии на кнопку нужно сравнить со стейтом правильно или нет. 
//Створити нову кнопку. Створити нову функцію яка визиває  нову кнопку, щоб появлявся новий блок із вірними відповідями (кількість вірних відповідей) у відсотках.
// linux arch