function getCount(str) {
  var vowelsCount = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      vowelsCount += 1
    }
  }
  return vowelsCount
}

function invert(array) {
  let result = array.map(function (elem) {
    return elem * -1
  })
  return result
}
