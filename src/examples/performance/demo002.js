var foo = {
  a: 19,
  b: 20,
  c: {
    m: 10,
    n: 20,
    k: 10,
    l: {
      p: 1,
      q: {
        x: 1,
        y: 2
      }
    }
  }
}

var foo = {
  a: 10,
  b: {
    m: 20,
    n: 30
  }
}

var copy = Object.assign({}, foo);

console.log(foo === copy);