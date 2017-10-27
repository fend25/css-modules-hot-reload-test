import style from './styles.css'

function component() {
	const element = document.createElement('h1')
	element.innerHTML = 'Hello webpack'

	//here the css
	element.className = style.test

	return element
}

document.body.appendChild(component())


//comment the next line to break hmr:
if (module.hot) module.hot.accept(['./styles.css'], () => {})
