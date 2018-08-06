// Find by id
let accordionElement = document.getElementById('accordion');
console.log('accordionElement', accordionElement);
// accordionElement.innerHTML = 'Chaned Accordion';
// getAttribute
let accordionClass = accordionElement.getAttribute('class');
console.log('accordionClass', accordionClass);
// hasAttribute
let hasAccordionClass = accordionElement.hasAttribute('class');
let hasAccordionOnclick = accordionElement.hasAttribute('onclick');
console.log('hasAccordion', hasAccordionClass, hasAccordionOnclick);
// Find by class
let accordionCardsElement = accordionElement.getElementsByClassName('card');
console.log('accordionCardsElement', accordionCardsElement);
let checkLengthArray = () => {
	let value = document.getElementById('functionLengthInput').value;
	let valueArray = value.split(',');
	console.log('checkLengthArray', valueArray);
	let functionLengthResult = document.getElementsByClassName('function-length-result');
	console.log('functionLengthResult', functionLengthResult);
	functionLengthResult[0].innerText = 'Result => ' + valueArray.length;
};
let createLengthFunction = () => {
	return `<div>
				<div class="input-group mb-3">
				  <div class="input-group-prepend" id="button-addon3">
				    <button class="btn btn-outline-secondary" type="button">Button</button>
				  </div>
				  <input type="text" class="form-control" placeholder="" aria-label="Example text with two button addons" aria-describedby="button-addon3">
				  <div class="input-group-append" id="button-addon3">
				    <button class="btn btn-outline-secondary" type="button">Button</button>
				  </div>
				</div>
				<input id="functionLengthInput" type="text" value="1,2,3,4,5">
				<button id="buttonLengthArray" class="btn btn-default">Chekc length</button>
				<div class="function-length-result"></div>
			</div>`;
}
let documentationArray = [
	{
		name: 'Lenght',
		text: 'Length documentation',
		init: createLengthFunction
	},
	{
		name: 'Slice',
		text: 'Slice documentation'
	},
	{
		name: 'Concat',
		text: 'Concat documentation'
	}
];
// for (let i = accordionCardsElement.length - 1; i >= 0; i--) {
// 	let LinksAccordionCardElement = accordionCardsElement[i].getElementsByClassName('btn-link');
// 	if (LinksAccordionCardElement.length > 0) {
// 		let link = LinksAccordionCardElement[0];
// 		link.innerHTML = documentationArray[i].name;
// 	}
// 	let lastElementChild = accordionCardsElement[i].lastElementChild;
// 	let bodyAccordionCardElement = lastElementChild.getElementsByClassName('card-body');
// 	if (bodyAccordionCardElement.length > 0) {
// 		let body = bodyAccordionCardElement[0];
// 		body.innerText = documentationArray[i].text;
// 		let newElement = document.createElement('div');
// 		newElement.className = 'new-element';
// 		let paramElement = document.createElement('div');
// 		paramElement.innerText = documentationArray[i].text;
// 		newElement.appendChild(paramElement);
// 		console.log('newElement', newElement);
// 		body.innerHTML = '';
// 		body.appendChild(newElement);
// 	}
// }

let documentationBlock = document.getElementById('documentation');
let createCardHeader = (i) => {
	let cardHeaderBlock = document.createElement('div');
	cardHeaderBlock.className = 'card-header';
	cardHeaderBlock.setAttribute('id', 'heading' + i);
	cardHeaderBlock.innerHTML = `<button
								
									class="btn btn-link"
									type="button"
									data-toggle="collapse"
									data-target="#collapse${i}"
									aria-expanded="${i === 0 ? 'true' : 'false'}"
									aria-controls="collapse${i}"
								>
									${documentationArray[i].name}
								</button>`;
	console.log('cardHeaderBlock', cardHeaderBlock);
	return cardHeaderBlock;
}
let createBodyCard = (i) => {
	let cardBodyBlock = document.createElement('div');
	cardBodyBlock.setAttribute('id', 'collapse' + i);
	cardBodyBlock.setAttribute('class', `collapse ${i === 0 ? 'show' : ''}`);
	cardBodyBlock.setAttribute('aria-labelledby', `heading${i}`);
	cardBodyBlock.setAttribute('data-parent', '#documentation');
	cardBodyBlock.innerHTML = `<div class="card-body">
									${documentationArray[i].init !== undefined ? documentationArray[i].init() : documentationArray[i].text}
								</div>`;
	return cardBodyBlock;
}
let clickButtonFunction = () => {
	document.getElementById('buttonLengthArray').addEventListener('click', checkLengthArray);
	// document.getElementById('buttonLengthArray').removeEventListener('click', checkLengthArray);
	
}
let createCard = (i) => {
	let cardBlock = document.createElement('div');
	cardBlock.className = 'card';
	cardBlock.append(createCardHeader(i));
	cardBlock.append(createBodyCard(i));
	documentationBlock.append(cardBlock);
	clickButtonFunction();
}
for (let i = 0; i < documentationArray.length; i++) {
	createCard(i);
}

let jIdDocumentation = $('#documentation').addClass('add').addClass('add1');
let jClassAccordion = $('.accordion');
jIdDocumentation.addClass('add2');
$(jIdDocumentation[0]).removeClass('add');
$(jIdDocumentation[0]).toggleClass('add1').toggleClass('add3');
console.log('jDocumentation', jIdDocumentation[0], jClassAccordion);


