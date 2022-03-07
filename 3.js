function check(a, x) {
  return a.includes(x)
}

function removeChar(str) {
  let arr = str.replace(/^.|.$/g, '')
  return arr
}
