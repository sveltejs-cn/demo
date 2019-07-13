<script>
    import '../../style/index.less';

	export let level;
    
</script>

{#if +level===1}
<h1 class="ant-typography"><slot></slot></h1>
{:else if +level===2}
<h2 class="ant-typography"><slot></slot></h2>
{:else if +level===3}
<h3 class="ant-typography"><slot></slot></h3>
{:else if +level===4}
<h4 class="ant-typography"><slot></slot></h4>
{/if}



