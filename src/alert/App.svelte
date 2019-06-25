<script>
    // import { sineOut } from 'svelte/easing';

	export let title;
	export let message;
    export let type;
    export let closable;
    export let visible = true;
    
    function handleClick() {
        visible = false
    }

    function alertOut(node, params) {
		return {
			delay: 0,
			duration: 200,
			// easing: sineOut,
			css: (t) => `transform:scaleY(${t})`
		};
    }
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
.alert{
    padding: 8px 15px;
    border-radius: 4px;
    position: relative;
    color: rgba(0,0,0,0.65);
    font-size: 14px;
    line-height: 1.5;
    transform-origin: top center;
}
.alert.closable{
    padding-right: 30px;
}
.alert[data-type='success']{
    background-color: #f6ffed;
    border: 1px solid #b7eb8f;
}
.alert[data-type='info']{
    background-color: #e6f7ff;
    border: 1px solid #91d5ff;
}
.alert[data-type='warning']{
    background-color: #fffbe6;
    border: 1px solid #ffe58f;
}
.alert[data-type='error']{
    background-color: #fff1f0;
    border: 1px solid #ffa39e;
}
.alert .title{
    margin-bottom: 4px;
    color: rgba(0,0,0,0.85);
    font-size: 16px;
}
.alert .close{
    position: absolute;
    width: 14px;
    height: 14px;
    top: 16px;
    right: 16px;
}
</style>


{#if visible}
    <div out:alertOut class="alert" class:closable={closable} data-type={type}>
        <p class="title">{title}</p>
        <p class="messgae">{message}</p>
        {#if closable}
            <img class="close" on:click={handleClick} src="http://h0.hucdn.com/open201925/35e16b1f47c825de_40x40.png" alt="">
        {/if}
    </div>
{/if}