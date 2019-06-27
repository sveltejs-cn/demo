<script>
    // import { sineOut } from 'svelte/easing';
    

	export let title;
	export let message;
    export let type;
    export let closable;
    export let visible = true;
    export let showIcon = false;
    
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
    
    let typeToObject = {
        success: 'check-circle',
        info: 'info-circle',
        warning: 'exclamation-circle',
        info: 'close-circle',
    }
    let iconType = typeToObject[type]
    import Icon from '../icon/App.svelte';

    const iconTheme = 'fill'
    const iconWidth = '14px'
    const iconHeight = '14px'
    const iconClass = "alert-icon"
</script>

{#if visible}
    <div out:alertOut class="alert" class:closable={closable} class:showIcon={showIcon} data-type={type}>
        {#if showIcon}
            <span class="icon">
                <Icon bind:type={iconType} bind:theme={iconTheme} bind:width={iconWidth} bind:height={iconHeight}></Icon>
            </span>
        {/if}
        <p class="title">{title}</p>
        <p class="messgae">{message}</p>
        {#if closable}
            <img class="close" on:click={handleClick} src="http://h0.hucdn.com/open201925/35e16b1f47c825de_40x40.png" alt="">
        {/if}
    </div>
{/if}



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
.alert.showIcon{
    padding-left: 36px;
}
.alert[data-type='success']{
    background-color: #f6ffed;
    border: 1px solid #b7eb8f;
    color: #52c41a;
}

.alert[data-type='info']{
    background-color: #e6f7ff;
    border: 1px solid #91d5ff;
    color: #1890ff;
}
.alert[data-type='warning']{
    background-color: #fffbe6;
    border: 1px solid #ffe58f;
    color: #faad14;
}
.alert[data-type='error']{
    background-color: #fff1f0;
    border: 1px solid #ffa39e;
    color: #f5222d;
}
.alert .title{
    margin-bottom: 4px;
    color: rgba(0,0,0,0.85);
    font-size: 16px;
}
.alert .messgae{
    color: rgba(0,0,0,0.65);
}
.icon{
    position: absolute;
    top: 12px;
    left: 16px;
}

.alert .close{
    position: absolute;
    width: 14px;
    height: 14px;
    top: 16px;
    right: 16px;
    
}
</style>
