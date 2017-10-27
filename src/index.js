import style from './styles.css'

function component() {
	const element = document.createElement('div')
	element.innerHTML = 'Hello webpack'

	//here the css
	element.className = style.test

	return element
}

document.body.appendChild(component())
