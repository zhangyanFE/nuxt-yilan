if(process.browser) {
    function setCookie(cName, value) {
        let Days = 300
        let exp = new Date()
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
        document.cookie = cName + '=' + escape(value) + ';expires=' + exp.toGMTString()
    }
    
    function getCookie(name) {
        let arr
        let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
        arr = document.cookie.match(reg)
    
        if (arr) {
            return (arr[2])
        } else {
            return null
        }
    }
    // console.log(getCookie('yl_uid'))
}