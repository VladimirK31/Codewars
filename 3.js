function check(a, x) {
  return a.includes(x)
}

function removeChar(str) {
  let arr = str.replace(/^.|.$/g, '')
  return arr
}

function multiplyAll(arr){
  return function myFun(num){
    return arr.map(function(elem){
      return elem*num
    })
  }
}