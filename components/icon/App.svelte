<script>
    import '../../style/index.less';
    import './index.less'
    import * as allIcons from '@ant-design/icons/lib/dist';
    import { generate as generateColor } from '@ant-design/colors';

	export let type;
	export let theme = 'outline';
	export let className = `anticon anticon-${type}`;
    export let twoToneColor;
    
    function toUpper(str){
        if (str === 'twotone'){
            return 'TwoTone'
        }
        if (str.indexOf('-') > -1){
            const index = str.indexOf('-')
            str = str.replace(/-/,'')
            str =  str.substring(0,index) + str.charAt(index).toUpperCase() + str.substring(index+1,str.length)
            str = toUpper(str)
            return str
        }
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
    const name = `${toUpper(type)}${toUpper(theme)}`
    let currentIcon = allIcons[name]
    if (theme === 'twotone'){
        currentIcon.icon = currentIcon.icon(twoToneColor,generateColor(twoToneColor)[0])
    }
</script>

<style>

</style>

<i class={className}>
    <svg viewBox={currentIcon.icon.attrs.viewBox} class="" data-icon={type} width='1em' height='1em' fill="currentColor" aria-hidden="true" focusable="false">
        {#each currentIcon.icon.children as chlid}
            <path fill={chlid.attrs.fill} d={chlid.attrs.d}></path>
        {/each}
    </svg>
</i>
