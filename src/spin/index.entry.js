import Spin from './App.svelte';
import './index.css'

const sizeArr = ['small','default','large']

const baseWrapper = document.createElement('div')
baseWrapper.id = 'base'


const addSpin = (config) => {
	const elem = document.createElement('div')
	elem.className = 'common'
	
	config = Object.assign({target:elem}, config)
	new Spin(config);
	
	baseWrapper.appendChild(elem)
}

// size
sizeArr.forEach(val => {
	let config = {
		props: {
			size: val
		}
	}
	addSpin({
		props: {
			size: val
		}
	})
})

// tip
addSpin({
	props: {
		size: 'default',
		tip: 'loading'
	}
})


document.body.appendChild(baseWrapper)

