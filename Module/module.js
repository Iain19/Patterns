var module = (function(depependency1, dependency2) {
  // Private
  var privateProperty;
  function privateMethod() {
    // ...
  };

  //Public
  return {
    publicMethod: function() {
      return privateMethod();
    }
  };
}(dependency1, dependency2));