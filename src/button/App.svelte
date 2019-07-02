<script>
    import './index.less'
	export let type;
    export let text;
    
    let className = `ant-btn ant-btn-${type}`
</script>


<button class={className} data-type={type}>{text}</button>