function toUpper(str){
    if (str.indexOf('-') > -1){
        const index = str.indexOf('-')
        str = str.replace(/-/,'')
        return str.substring(0,index) + str.charAt(index).toUpperCase() + str.substring(index+1,str.length)
    }
    return str.charAt(0).toUpperCase() + str.slice(1)
}
console.log(toUpper('abc-def'))