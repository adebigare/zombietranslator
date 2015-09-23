require(['jquery', 'bootstrap'], function ($) {
  $(document).ready(function(){
    $('#zombie-to-english-btn').click(function(event){
      unzombify();
      return false;
    });

    $('#english-to-zombie-btn').click(function(event){
      zombify();
      return false;
    });

    function zombify(){
    
        var value = $(this).val();
        var zombie = $("#zombie");
        var pattern = new RegExp(/r\b/g);
        var newVal = value.replace(pattern, "rh");
        var result = pattern.test(value);
        switch(value) {
          case pattern:
            var newVal = value.replace(pattern, "rh");
            zombie.val(newVal);
            break;
          default:
            $('#zombie').val($('#english').val());
            break;
        }
        // if (result == true) {
        //  zombie.val(newVal);
        // } 
        // else {
        //   $('#zombie').val($('#english').val());
        // }
        
      



      
      // 1. lower-case "r" at the end of words replaced with "rh".
      // 2. an "a" or "A" by itself will be replaced with "hra".
      // 3. the starts of sentences are capitalised (the "start of a sentence" is any occurrence of
      //   ".!?", followed by a space, followed by a letter.)
      // 4. "e" or "E" is replaced by "rr"
      // 5. "i" or "I" is replaced by "rrRr"
      // 6. "o" or "O" is replaced by "rrrRr"
      // 7. "u" or "U" is replaced by "rrrrRr"
      // 8. "r" or "R' is replaced by "RR"
      
      
    }

    function unzombify(){


    }

    $('#english').on("keyup", zombify);

  });
});