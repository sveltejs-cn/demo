<script>
    import '../../style/index.less';

	export let type;
	export let disabled;
	export let mark;
	export let code;
	export let underline;
	export let strong;
    
    const classArr = [
        'ant-typography',
        type && `ant-typography-${type}`,
        disabled && `ant-typography-disabled`
    ]
</script>

<span class={classArr.join(' ')}>
    {#if mark}
    <mark><slot></slot></mark>
    {:else if code}
    <code><slot></slot></code>
    {:else if underline}
    <u><slot></slot></u>
    {:else if strong}
    <strong><slot></slot></strong>
    {:else}
    <slot></slot>
    {/if}
</span>
