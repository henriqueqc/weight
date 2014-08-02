"use strict";

var weight = weight || {};

weight.Mesassuare = function() {
  this.value = 0;
  this.unit = "kg";
};

var database = database || {};

weight.onDatabaseOpened = function(database) {
  database.onerror = console.log;
  weight.database = database;
};

database.openDatabase = function(onDatabaseOpened) {
  var database;
  var request = window.indexedDB.open("WeightDatabase", 2);

  request.onsuccess = function(event) {
    database = request.result;
    onDatabaseOpened(database);
  };

  request.onerror = console.log.bind(console);

  request.onupgradeneeded = function(error) {
    var database = event.target.result;
    var objectStore = database.createObjectStore("Measures", {autoIncrement: true});
  };
};
