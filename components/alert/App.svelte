<script>
    // import { sineOut } from 'svelte/easing';
    import Icon from '../icon/App.svelte';
    import './index.less'
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
        error: 'close-circle',
    }
    let iconType = typeToObject[type]

    let iconTheme = 'fill'
    let className = `ant-alert ant-alert-${type} ${showIcon ? '':'ant-alert-no-icon'} ${message ? 'ant-alert-with-description': ''}`
    let iconClass = `anticon anticon-${iconType} ant-alert-icon`
</script>

{#if visible}
    <div out:alertOut class={className}>
        {#if showIcon}
            <Icon className={iconClass} bind:type={iconType} bind:theme={iconTheme} ></Icon>
        {/if}
        <span class="ant-alert-message">{title}</span>
        <span class="ant-alert-description">{message}</span>
        {#if closable}
            <a class="ant-alert-close-icon" on:click={handleClick} href="javascript:;">
                <Icon type="close" ></Icon>
            </a>
        {/if}
    </div>
{/if}
