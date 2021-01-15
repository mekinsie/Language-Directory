const add = function(option1, option3, option5, option8, option11, option15) {
  return (option1 + option3 + option5 + option8 + option11 + option15)
};

$(document).ready(function() { 
  $("form").submit(function (event) {
    event.preventDefault();
    let option1 = parseInt($("input:radio[name=code]:checked").val());
    let option3 = parseInt($("input:radio[name=pet]:checked").val());
    let option5 = parseInt($("#hand option:selected").val());
    let option8 = parseInt($("#coffee option:selected").val());
    let option11 = parseInt($("#sleep option:selected").val());
    let option15 = parseInt($("#tech option:selected").val());
    let result = (add(option1, option3, option5, option8, option11, option15));
   
   
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