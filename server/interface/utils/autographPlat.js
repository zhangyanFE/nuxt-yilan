/* eslint-disable no-unused-vars */
import MD5 from 'js-md5'

// 加密盐
const salt = 'Cx2LBrnRAqRsJOhrMMieBu07jvJu3a91'

const saltHT = 'TuXInMLidHlhI4iwy3GmYmr8CmcNTXQu'

/** * 对象按键排序 */
function objKeySort(obj) {
  const newkey = Object.keys(obj).sort()
  // 创建一个新的对象，用于存放排好序的键值对
  const newObj = {}
  for (let i = 0; i < newkey.length; i++) {
    newObj[newkey[i]] = obj[newkey[i]]
  }
  return newObj
}

/** * 签名算法 */
export default function genSign(data, isHT = 'access_token') {
  // console.log(isHT)
  let str = ''
  if (!data || !salt) {
    return str
  }
  const map = objKeySort(data)
  map[isHT] = 'MARexyHggm5YDfbc3fCbqnXTziXSYFbL'
  for (const i in map) {
    str += i + '=' + map[i] + '&'
  }
  // 移除尾部&
  str = str.substr(0, str.length - 1)
  return MD5(str)
}
