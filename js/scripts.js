const add = function(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10, option11, option12, option13, option14, option15, option16, option17) {
  return (option1 + option2 + option3 + option4 + option5 + option6 + option7 + option8 + option9 + option10 + option11 + option12 + option13 + option14 + option15 + option16 + option17)
};

  

$(document).ready(function() { 
  $("form").submit(function (event) {
    event.preventDefault();
    const option1 = parseInt($("#codeyes").val());
    const option2 = parseInt($("#codeno").val());
    const option3 = parseInt($("#petyes").val());
    const option4 = parseInt($("#petno").val());
    const option5 = parseInt($("#right").val());
    const option6 = parseInt($("#left").val());
    const option7 = parseInt($("#both").val());
    const option8 = parseInt($("#coffeeyes").val());
    const option9 = parseInt($("#coffeeno").val());
    const option10 = parseInt($("#coffeesometimes").val());
    const option11 = parseInt($("#back").val());
    const option12 = parseInt($("#side").val());
    const option13 = parseInt($("#front").val());
    const option14 = parseInt($("#idontsleep").val());
    const option15 = parseInt($("#microsoft").val());
    const option16 = parseInt($("#apple").val());
    const option17 = parseInt($("#neither").val());
    const result = (add(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10, option11, option12, option13, option14, option15, option16, option17));
    if (result <= 4) {
      $(".ruby").show();
      $(".python, .csharp").hide();
    }
    if (result = 5 <= 9) {
      $(".python").show();
      $(".ruby, .csharp").hide();
    }
    if (result = 10 <= 13) {
      $(".csharp").show();
      $(".python, .ruby").hide();
    }
  });
});