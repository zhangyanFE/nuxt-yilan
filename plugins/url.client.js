/* eslint-disable no-use-before-define */
/**
 * 链接处理工具
 * @author dezhao
 */
'use strict'

function Index() {
  this.init.apply(this, arguments)
}

Index.prototype = {
  init(url) {
    this.url = url
    this.host = this.strip()
    return this
  },

  /*
   * 获取当前页面URL地址传递的参数
   * 返回结果：{a:1, b:2, c:3}
   * */
  query(url) {
    const _url = url || this.url
    if (_url.includes('?')) {
      const qsobj = {}
      let thisqs = _url.split('?')[1]
      if (thisqs) {
        thisqs = thisqs.replace(/#\//g, '')
        const pairs = thisqs.split('&')
        for (let i = 0; i < pairs.length; i++) {
          // var pair = pairs[i].split('=');
          // qsobj[pair[0]] = pair[1];
          const num = pairs[i].indexOf('=')
          qsobj[pairs[i].substring(0, num)] = pairs[i].substr(num + 1)
        }
      }
      return qsobj
    } else {
      return null
    }
  },

  /*
   * 返回链接?号前的部分
   * */
  strip() {
    if (this.url.includes('?')) {
      return this.url.split('?')[0]
    } else {
      return this.url
    }
  },

  /*
   * 获取对于key的值
   * 例如: http://www.100credit.com/index.html?a=1&b=2&c=3
   * url.get(a); //返回结果: 1
   * */
  get(key) {
    const qsobj = this.query(this.url)
    if (qsobj) {
      return qsobj[key] || null
    } else {
      return null
    }
  },

  // 格式化链接为埋点链接
  formatUrlBySPM(url) {
    const BrSPM = window.BrSPM || BrSPM
    if (BrSPM || !url.includes('spm=')) {
      const str = url.includes('?') ? '&' : '?'
      return url + str + 'spm=' + BrSPM.SPM_ID + '.0.0'
    } else {
      return url
    }
  }
}

export default Index
