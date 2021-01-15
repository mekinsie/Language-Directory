const add = function(option1, option2, option3, option4, option5, option6) {
  return (option1 + option2 + option3 + option4 + option5 + option6)
};

$(document).ready(function() { 
  $("form").submit(function (event) {
    event.preventDefault();
    let option1 = parseInt($("input:radio[name=code]:checked").val());
    let option2 = parseInt($("input:radio[name=pet]:checked").val());
    let option3 = parseInt($("#hand option:selected").val());
    let option4 = parseInt($("#coffee option:selected").val());
    let option5 = parseInt($("#sleep option:selected").val());
    let option6 = parseInt($("#tech option:selected").val());
    let result = (add(option1, option2, option3, option4, option5, option6));

    if (result <= 3) {
    $(".ruby").show();
    $(".python, .csharp").hide();
    } 
    else if (result = 4 && result <= 7) {
    $(".python").show();
    $(".ruby, .csharp").hide();
    } 
    else if (result = 8 && result <= 12) {
    $(".csharp").show();
    $(".python, .ruby").hide();
    }
  });
});