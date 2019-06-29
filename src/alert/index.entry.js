import App from './App.svelte';
import './index.css'

const arr = [
    {
        title: 'this is success alert(can close)',
        message: 'Success Text',
        type: 'success',
        closable: true,
        showIcon: true
    },
    {
        title: 'this is error alert(can close)',
		message: 'error Text',
		type: 'error',
		closable: true,
		showIcon: true
    },
    {
        title: 'this is warning alert(can close)',
		message: 'warning Text',
		type: 'warning',
		closable: true,
		showIcon: true
    },
    {
        title: 'this is info alert(can close)',
		message: 'info Text',
		type: 'info',
		closable: true,
		showIcon: true
    },
    {
        title: 'this is success alert(cannot close no icon)',
		message: 'Success Text',
		type: 'success',
		closable: false,
		showIcon: false
    }
]

arr.forEach(val => {
    let elem1 = document.createElement('div')
    elem1.className = 'common'
    new App({
        target: elem1,
        props: val
    });
    document.body.append(elem1)
})
