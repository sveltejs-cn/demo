<script >
    import './index.less'

	export let size;
    export let tip;

    const sizeMap = {
    	'small': 'sm',
    	'large': 'lg',
    	'default': '',
    }

    let sizeClass = ''

    if (size && sizeMap[size]) {
    	sizeClass = `ant-spin-${sizeMap[size]}`
    }

    let containerName = `ant-spin ant-spin-spinning ${sizeClass}`

    let spinName = `ant-spin-dot ant-spin-dot-spin`

    let dotClass = `ant-spin-dot-item`
</script>

<div class={containerName}>
    <span class={spinName}>
          <i class={dotClass} />
          <i class={dotClass} />
          <i class={dotClass} />
          <i class={dotClass} />
    </span>
    {#if tip}
        <div class='ant-spin-text'>{tip}</div>
    {/if}
</div>
