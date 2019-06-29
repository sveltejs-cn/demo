import mainfest from '@ant-design/icons/lib/manifest';
import Icon from './App.svelte';
import './index.css'

const baseArr = [
    {
        name: 'fill',
        props: {
            theme: 'fill',
            width: '20px',
            height: '20px'
        }
    },
    {
        name: 'outline',
        props: {
            theme: 'outline',
            width: '20px',
            height: '20px'
        }
    },
    {
        name: 'twotone',
        props: {
            theme: 'twotone',
			width: '20px',
			height: '20px',
			twoToneColor: '#eb2f96',
        }
    }
]
baseArr.forEach((val) => {
    const arr = mainfest[val.name]
    const wrapperElem = document.createElement('div')
    wrapperElem.className = 'common'
    for (let i = 0;i < arr.length; i++){
        let elem = document.createElement('span')
        new Icon({
            target: elem,
            props: {
                type: arr[i],
                ...val.props
            }
        });
        wrapperElem.appendChild(elem)
    }
    document.body.appendChild(wrapperElem)
})
