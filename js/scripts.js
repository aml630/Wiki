$(document).ready(function() {


$("#printString").click(function() {
var array = ["dog"]
var input = $("#inputString").val()
array.push(input)
$("#array").text(array);
})

$("#addInputs").click(function () {
var add1 = parseInt($("#firstnum").val())
var add2 = parseInt($("#secondnum").val())
$("#sum").text(add1+add2);

})

$("#capital").click(function () {
  var letters = $("#inputLetters").val();
$("#uppercase").text(letters.toUpperCase());
})

$("#hover").hover(function () {
  $("#hover").toggleClass("bigimg");
})


})
