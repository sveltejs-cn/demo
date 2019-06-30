import Button from './App.svelte';
import './index.css'

const typeArr = ['primary','dashed','danger','link']

const baseWrapper = document.createElement('div')
baseWrapper.id = 'base'
typeArr.forEach(val => {
    const elem = document.createElement('span')
    elem.className = 'common'
    new Button({
        target: elem,
        props: {
            text: val,
            type: val
        }
    });
    baseWrapper.appendChild(elem)
})
document.body.appendChild(baseWrapper)

