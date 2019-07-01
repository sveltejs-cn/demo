<script>
    import mainfest from '@ant-design/icons/lib/manifest';
    import Icon from '../../components/icon/App.svelte';
    const baseArr = [
        {
            name: 'fill',
            list: mainfest.fill,
            props: {
                theme: 'fill',
            }
        },
        {
            name: 'outline',
            list: mainfest.outline,
            props: {
                theme: 'outline',
            }
        },
        {
            name: 'twotone',
            list: mainfest.twotone,
            props: {
                theme: 'twotone',
                twoToneColor: '#eb2f96',
            }
        }
    ]
</script>


<style>
.common{
    margin-bottom: 20px;
}
.common span{
    margin-right: 10px;
}
</style>


<div>
    {#each baseArr as wrapper}
        <div class="common">
            {#each wrapper.list as item}
                <span>
                    <Icon type={item} theme={wrapper.props.theme} twoToneColor={wrapper.props.twoToneColor}></Icon>
                </span>
            {/each}
        </div>
    {/each}
</div>
