import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
        type: 'html5',
        theme: 'twoTone',
        twoToneColor: '#eb2f96',
        width: '100px',
        height: '100px'
    }
});


export default app;