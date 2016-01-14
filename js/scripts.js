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

$("#button").click(function(event) {
  var age = parseInt($("#age").val());
console.log(age);

  if (age >= 22) {
    $("#text").text("You're old.")
  } else if (age < 20) {
    $("#text").text("You're not old.")
  } else if (age === 21) {
    $("#text").text("You're 21")
  }else {
    $("#text").text("Enter Something")
  }
event.preventDefault()
})

$("button#on").click(function(){
  $("body").removeClass();
  $("body").addClass("blue-background")
})

$("button#off").click(function(){
  $("body").removeClass();
})

$("#arrayClick").click(function () {
  var numArray = [1,2,3,4,5,6]
  numArray.forEach(function (number) {
  $("#arrayPrint").append(", " + number);
  })
})

$("#arrayAdd").click(function() {
  var total = 0
  var num = [1, 2, 3, 4, 5]
  num.forEach(function(num) {
    total += num;
    $("#arrayAdd").text(total);
    $("#arrayAdd").after(" " +total);
  })
})

$("#arrayMultiply").click(function() {
  var total = 1
  var num = [1, 2, 3, 4, 5]
  num.forEach(function(num) {
    total *= num;
    $("#arrayMultiply").text(total);
    $("#arrayMultiply").after(" " +total);

  })
})

$("#clickFor").click(function() {
var num = $("#inputFor").val()
for(var i=0; i<=num; i+=1) {
$("#printFor").append("<li>"+i+"</li>")
}
})

$("#click").click(function() {
var array = [1, 2, 3, 4, 5]
for (var i=0; i<=array.length; i++ )
$("#click").append(i)


})







})
