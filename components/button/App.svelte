<script>
    import Icon from '../icon/App.svelte';
    import './index.less'
    export let type;
    export let size;
    export let icon;

    const sizeMap = {
        small: 'sm'
    }
    const classArr = [
        'ant-btn',
        `ant-btn-${type}`,
        size && `ant-btn-${sizeMap[size]}`
    ]
</script>


<button class={classArr.join(' ')} on:click data-type={type}>
    {#if icon}
        <Icon type={icon}></Icon>
    {/if}
    <slot>
    </slot>
</button>