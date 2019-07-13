<script>
    import Icon from '../icon/App.svelte';
    import './index.less'
    export let type;
    export let size;
    export let icon;
    export let disabled;
    export let ghost;
    export let shape;

    const sizeMap = {
        small: 'sm'
    }
    const classArr = [
        'ant-btn',
        `ant-btn-${type}`,
        size && `ant-btn-${sizeMap[size]}`,
        ghost && `ant-btn-background-ghost`,
        shape && `ant-btn-${shape}`,
    ]
</script>


<button class={classArr.join(' ')} disabled={disabled} on:click data-type={type}>
    {#if icon}
        <Icon type={icon}></Icon>
    {/if}
    <slot>
    </slot>
</button>