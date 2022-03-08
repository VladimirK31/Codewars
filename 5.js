function check(a, x) {
  var result = false
  for (i = 0; i < a.length; i++) {
    if (a[i] == x) {
      result = true
    }
  }
  return result
}

const areaOrPerimeter = function (l, w) {
  if (l == w) {
    return l * w
  } else {
    return l * 2 + w * 2
  }
}
