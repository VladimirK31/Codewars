function alternateCase(s) {
  var newStr = ''
  for (var i = 0; i < s.length; i++) {
    if (s[i] === s[i].toLowerCase()) {
      newStr += s[i].toUpperCase()
    } else {
      newStr += s[i].toLowerCase()
    }
  }
  return newStr
}
