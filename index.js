var a, b
a = Math.floor(Math.random() * 1000)
b = Math.floor(Math.random() * 1000)

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function inc(n) {
  n++
  return n
}

function dec(n) {
  n--
  return n
}

function makeInt(n) {
  parseInt('n', 10)
  if (n === n) {
    return n
  }
  else if (n === NaN) {
    return true
  }
  return n
}

function preserveDecimal(n) {
  parseFloat('n')
  if (n === NaN) {
    return true
  }
  return n
}