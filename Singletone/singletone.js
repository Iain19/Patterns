var Singletone = (function() {
  var instance;

  return function ConstructSingletone() {
    if (instance) {
      return instance;
    }
    if (this &&
        this.constructor === ConstructSingletone) {
      instance = this;
    } else {
      return new ConstructSingletone();
    }
  };
}());