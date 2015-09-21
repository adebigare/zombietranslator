requirejs.config({
  "baseUrl" : "js/vendors",
  "paths" : {
    "app" : "../../js/app",
    "jquery": "jquery.min",
    "bootstrap" : "../css/bootstrap.min",
    "jasmine" : "jasmine-core/jasmine",
    "jasmine-html" : "jasmine-core/jasmine-html",
    "jasmine-boot" : "jasmine-core/boot"
  },
  "shim": {
    "jasmine-html" : {
      "deps" : ["jasmine"]
    },
    "jasmine-boot" : {
      "deps" : ["jasmine", "jasmine-html"]
    }
  } 
});

require(['jasmine-boot'], function () {
  require(['my-library.specs'], function(){
    //trigger Jasmine
    window.onload();
  })
});

requirejs(['app/main']);