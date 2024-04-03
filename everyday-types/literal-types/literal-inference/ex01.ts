const obj = { counter: 0 }; // inferido com number e não como 0
if (true) {
  obj.counter = 1; // ok
}