function find_average(array) {
  let sum = 0
  let result = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
    result = sum / array.length
  }
  return result
}

function greet(name) {
  return 'Hello, ' + name + ' how are you doing today?'
}
