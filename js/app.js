requirejs.config({
  "baseUrl" : "js/app",
  "paths" : {
    "jquery": "../vendors/jquery.min",
    "bootstrap": "../vendors/bootstrap.min",
    "ZombieLang" : "ZombieLang"
  },
  "shim": {
    "bootstrap" :["jquery"]
  } 
});

require(['main']);

 requirejs(["jquery","ZombieLang"], function() {
   console.log('Everything is set up.');
});