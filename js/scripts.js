const add = function(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10, option11, option12, option13, option14, option15, option16, option17) {
  return (option1 + option2 + option3 + option4 + option5 + option6 + option7 + option8 + option9 + option10 + option11 + option12 + option13 + option14 + option15 + option16 + option17)
};

  

$(document).ready(function() { 
  $("form").submit(function (event) {
    event.preventDefault();
    let option1 = parseInt($("#codeyes").val());
    let option2 = parseInt($("#codeno").val());
    let option3 = parseInt($("#petyes").val());
    let option4 = parseInt($("#petno").val());
    let option5 = parseInt($("#right").val());
    let option6 = parseInt($("#left").val());
    let option7 = parseInt($("#both").val());
    let option8 = parseInt($("#coffeeyes").val());
    let option9 = parseInt($("#coffeeno").val());
    let option10 = parseInt($("#coffeesometimes").val());
    let option11 = parseInt($("#back").val());
    let option12 = parseInt($("#side").val());
    let option13 = parseInt($("#front").val());
    let option14 = parseInt($("#idontsleep").val());
    let option15 = parseInt($("#microsoft").val());
    let option16 = parseInt($("#apple").val());
    let option17 = parseInt($("#neither").val());
    let result = (add(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10, option11, option12, option13, option14, option15, option16, option17));
   
   
    if (result <= 4) {
      $(".ruby").show();
      $(".python, .csharp").hide();

    } else if (result = 5 && result <= 9) {
      $(".python").show();
      $(".ruby, .csharp").hide();
    }
      else if (result = 10 && result <= 13) {
      $(".csharp").show();
      $(".python, .ruby").hide();
    }
  });
});