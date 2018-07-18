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
let documentationArray = [
	{
		name: 'Lenght',
		text: 'Length documentation'
	},
	{
		name: 'Slice',
		text: 'Slice documentation'
	}
];
for (let i = accordionCardsElement.length - 1; i >= 0; i--) {
	let LinksAccordionCardElement = accordionCardsElement[i].getElementsByClassName('btn-link');
	if (LinksAccordionCardElement.length > 0) {
		let link = LinksAccordionCardElement[0];
		link.innerHTML = documentationArray[i].name;
	}
	let lastElementChild = accordionCardsElement[i].lastElementChild;
	let bodyAccordionCardElement = lastElementChild.getElementsByClassName('card-body');
	if (bodyAccordionCardElement.length > 0) {
		let body = bodyAccordionCardElement[0];
		body.innerText = documentationArray[i].text;
		let newElement = document.createElement('div');
		newElement.className = 'new-element';
		let paramElement = document.createElement('div');
		paramElement.innerText = documentationArray[i].text;
		newElement.appendChild(paramElement);
		console.log('newElement', newElement);
		body.innerHTML = '';
		body.appendChild(newElement);
	}
}


