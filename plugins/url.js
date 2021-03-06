/**
 * 链接处理工具
 * @author dezhao
 */
'use strict';

function Index() {
    this.init.apply(this, arguments);
}

Index.prototype = {
    init: function (url) {
        this.url = url;
        this.host = this.strip();
        return this
    },

    /*
     * 获取当前页面URL地址传递的参数
     * 返回结果：{a:1, b:2, c:3}
     * */
    query: function (url) {
        var _url = url ? url : this.url;
        if (_url.indexOf('?') != -1) {
            var qsobj = {};
            var thisqs = _url.split('?')[1];
            if (thisqs) {
                thisqs = thisqs.replace(/#\//g, '');
                var pairs = thisqs.split('&');
                for (var i = 0; i < pairs.length; i++) {
                    // var pair = pairs[i].split('=');
                    // qsobj[pair[0]] = pair[1];
                    var num=pairs[i].indexOf("=");
                    qsobj[pairs[i].substring(0,num)] = pairs[i].substr(num+1);
                }
            }
            return qsobj;
        } else {
            return null;
        }
    },

    /*
     * 返回链接?号前的部分
     * */
    strip: function () {
        if (this.url.indexOf('?') != -1) {
            return this.url.split('?')[0];
        } else {
            return this.url;
        }
    },

    /*
     * 获取对于key的值
     * 例如: http://www.100credit.com/index.html?a=1&b=2&c=3
     * url.get(a); //返回结果: 1
     * */
    get: function (key) {
        var qsobj = this.query(this.url);
        if (qsobj) {
            return qsobj[key] || null;
        } else {
            return null;
        }
    },

    //格式化链接为埋点链接
    formatUrlBySPM: function (url) {
        var BrSPM = window.BrSPM || BrSPM;
        if (BrSPM || url.indexOf('spm=') == -1) {
            var str = url.indexOf('?') != -1 ? '&' : '?';
            return url + str + 'spm=' + BrSPM.SPM_ID + '.0.0';
        } else {
            return url;
        }
    }
};

export default Index;
