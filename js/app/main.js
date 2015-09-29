require(['jquery',"ZombieLang"], function($,ZombieLang) {

  function zombify() {

      var inputValue = $(this).val();
      var zombie = $("#zombie");

      var output = ZombieLang.convert(inputValue);
      zombie.val(output);    

  }
     
    function unzombify(){


    }

    $('#english').on("keyup", zombify);

  });
