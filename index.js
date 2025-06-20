function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  function namedFunction() {
    // This is a named function
    return "I am a named function";
  }
  return namedFunction;
}

function returnsAnAnonymousFunction() {
  return function() {
    // This is an anonymous function
    return "I am an anonymous function";
  };
}