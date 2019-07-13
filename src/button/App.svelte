<script>
    import Button from '../../components/button/App.svelte';
    const typeArr = ['primary','dashed','danger','link']
</script>


<style>
.container{
    padding: 20px;
}
.wrapper{
    margin-bottom: 20px
}
.common{
    margin-right: 20px;
}
</style>


<div class="container">
    <div class="wrapper">
        {#each typeArr as item}
            <span class="common">
                <Button 
                on:click={() => {console.log(item)}} 
                type={item}
                >{item}</Button>
            </span>
        {/each}
    </div>
    <div class="wrapper">
        {#each typeArr as item}
            <span class="common">
                <Button 
                on:click={() => {console.log(item)}} 
                type={item}
                size='small'
                >{item}</Button>
            </span>
        {/each}
    </div>
    <div class="wrapper">
        {#each typeArr as item}
            <span class="common">
                <Button 
                on:click={() => {console.log(item)}} 
                type={item}
                icon='search'
                >{item}</Button>
            </span>
        {/each}
    </div>
    <div class="wrapper">
        {#each typeArr as item}
            <span class="common">
                <Button 
                disabled
                on:click={() => {console.log(item)}} 
                type={item}
                >{item}</Button>
            </span>
        {/each}
    </div>
    <div class="wrapper" style="background: rgb(190, 200, 200);">
        {#each typeArr as item}
            <span class="common">
                <Button 
                ghost
                on:click={() => {console.log(item)}} 
                type={item}
                >{item}</Button>
            </span>
        {/each}
    </div>
    <div class="wrapper" style="background: rgb(190, 200, 200);">
        {#each typeArr as item}
            <span class="common">
                <Button 
                icon="download"
                on:click={() => {console.log(item)}} 
                type={item}
                >{item}</Button>
            </span>
        {/each}
    </div>
    <div class="wrapper">
        {#each typeArr as item}
            <span class="common">
                <Button 
                shape="round"
                on:click={() => {console.log(item)}} 
                type={item}
                >{item}</Button>
            </span>
        {/each}
    </div>
</div>
