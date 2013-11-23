define([
  './adapters/cookie',
  './adapters/data-attribute',
  './adapters/local-storage',
  './adapters/location-hash',
  './adapters/memory',
  './adapters/window-name'
], function(cookie, dataAttribute, localStorage, locationHash, memory, windowName) {

  return function() {

    var adapters = {
      'cookie': cookie,
      'data-attribute': dataAttribute,
      'local-storage': localStorage,
      'location-hash': locationHash,
      'memory': memory,
      'window-name': windowName
    };

    this.availableAdapters = function() {
      return Object.keys(adapters);
    };

    this.adapter = function(name) {
      return adapters[name];
    };

  };

});
