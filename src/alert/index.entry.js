import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
                title: 'this is title',
                message: 'Success Text',
                type: 'success',
                closable: true,
                showIcon: true
	}
});

window.app = app;

export default app;