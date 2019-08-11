/* eslint-disable eqeqeq */
let urlParams = ''

export function getUrl(_url) {
  urlParams = _url
}
export const getAddressKey = function(key) {
  // 获取地址栏参数
  const qsobj = query(urlParams)
  if (qsobj) {
    return qsobj[key] || null
  } else {
    return null
  }
}

export const query = function(url) {
  // 获取地址栏参数对象集合
  const _url = url || this.url
  if (_url.includes('?')) {
    const qsobj = {}
    let thisqs = _url.split('?')[1]
    if (thisqs) {
      thisqs = thisqs.replace(/#/g, '')
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
}

export const getUdid = function() {
  let udid = getAddressKey('udid') || ''
  udid = udid.split('/')[0]
  if (!udid) {
    udid = getAddressKey('c_udid')
    if (!udid) {
      udid = getAddressKey('sudid')
      if (!udid) {
        const udidcook = getCookie('yl_udid')
        if (!udidcook) {
          udid = generateSession(40)
        } else {
          udid = udidcook
        }
      }
    }
  }
  setCookie('yl_udid', udid)
  return udid
}

export const getUid = function() {
  let uid = getAddressKey('uid') || ''
  uid = uid.split('/')[0]
  if (!uid) {
    uid = getAddressKey('c_uid')
    if (!uid) {
      uid = getAddressKey('suid')
      if (!uid) {
        const uidcook = getCookie('yl_uid')
        if (!uidcook) {
          uid = ''
        } else {
          uid = uidcook
        }
      }
    }
  }
  uid = uid.substring(0, 64)
  setCookie('yl_uid', uid)
  return uid
}

export function setCookie(cName, value) {
  const Days = 300
  const exp = new Date()
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
  if (process.browser) {
    document.cookie =
      cName + '=' + escape(value) + ';expires=' + exp.toGMTString()
  }
}

export function getCookie(name) {
  let arr
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  if (process.browser) {
    arr = document.cookie.match(reg)
  }

  if (arr) {
    return arr[2]
  } else {
    return null
  }
}

export function generateSession(n) {
  const words = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ]
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  const chars = nums.concat(words).concat(
    words.map(function(s) {
      return s.toLowerCase()
    })
  )
  let res = ''
  for (let i = 0; i < n; i++) {
    const id = Math.ceil(Math.random() * 61)
    res += chars[id]
  }
  return res
}

export function isWeixin() {
  const ua = navigator.userAgent
  return /micromessenger/.test(ua)
}

export function isAndroid() {
  const ua = navigator.userAgent
  return ua.includes('Android') || ua.includes('Adr')
}

export function isiOS() {
  const ua = navigator.userAgent
  return !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
}

export function curClient() {
  const ios = isiOS()
  const android = isAndroid()
  if (ios) {
    return 'iPhone'
  } else if (android) {
    return 'Android'
  } else {
    return 'PC'
  }
}

// 判断安卓还是ios
export function platForm() {
  if (curClient() == 'iPhone') {
    return 'iOS'
  } else if (curClient() == 'Android') {
    return 'Android'
  } else {
    return 'PC'
  }
}

// 数组去重
export function distinctArr(arr) {
  let i
  const obj = {}
  const result = []
  const len = arr.length
  for (i = 0; i < len; i++) {
    if (!obj[arr[i]]) {
      // 如果能查找到，证明数组元素重复了
      obj[arr[i]] = 1
      result.push(arr[i])
    }
  }
  return result
}
// console.log(getCookie('yl_uid'))
