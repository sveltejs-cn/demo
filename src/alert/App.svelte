<script>
    import Alert from '../../components/alert/App.svelte';
    const arr = [
        {
            title: 'this is success alert(can close)',
            message: 'Success Text',
            type: 'success',
            closable: true,
            showIcon: true
        },
        {
            title: 'this is error alert(can close)',
            message: 'error Text',
            type: 'error',
            closable: true,
            showIcon: true
        },
        {
            title: 'this is warning alert(can close)',
            message: 'warning Text',
            type: 'warning',
            closable: true,
            showIcon: true
        },
        {
            title: 'this is info alert(can close)',
            message: 'info Text',
            type: 'info',
            closable: true,
            showIcon: true
        },
        {
            title: 'this is success alert(cannot close no icon)',
            message: 'Success Text',
            type: 'success',
            closable: false,
            showIcon: false
        }
    ]
</script>


<style>
.common{
    margin-bottom: 20px;
}
</style>


<div>
    {#each arr as item}
        <div class="common">
            <Alert title={item.title} message={item.message} type={item.type} closable={item.closable} showIcon={item.showIcon}></Alert>
        </div>
    {/each}
</div>
