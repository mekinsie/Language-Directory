const add = function(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10, option11, option12, option13, option14, option15, option16, option17) {
  return (option1 + option2 + option3 + option4 + option5 + option6 + option7 + option8 + option9 + option10 + option11 + option12 + option13 + option14 + option15 + option16 + option17)
};

  

$(document).ready(function() { 
  $("form").submit(function (event) {
    event.preventDefault();
    let option1 = parseInt($("input [name=code]:checked", "#codeyes").val());
    let option2 = parseInt($("input [name=code]:checked","#codeno").val());
    let option3 = parseInt($("input [name=pet]:checked","#petyes").val());
    let option4 = parseInt($("input [name=pet]:checked","#petno").val());
    let option5 = parseInt($("option [name=hand]:selected","#right").val());
    let option6 = parseInt($("option [name=hand]:selected","#left").val());
    let option7 = parseInt($("option [name=hand]:selected", "#both").val());
    let option8 = parseInt($("option [name=coffee]:selected", "#coffeeyes").val());
    let option9 = parseInt($("option [name=coffee]:selected","#coffeeno").val());
    let option10 = parseInt($("option [name=coffee]:selected","#coffeesometimes").val());
    let option11 = parseInt($("option [name=sleep]:selected", "#back").val());
    let option12 = parseInt($("option [name=sleep]:selected", "#side").val());
    let option13 = parseInt($("option [name=sleep]:selected", "#front").val());
    let option14 = parseInt($("option [name=sleep]:selected", "#idontsleep").val());
    let option15 = parseInt($("option [name=tech]:selected", "#microsoft").val());
    let option16 = parseInt($("option [name=tech]:selected", "#apple").val());
    let option17 = parseInt($("option [name=tech]:selected", "#neither").val());
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