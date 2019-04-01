//Business Logic
function PizzaOrder(toppings, sauce, size) {
  this.toppings = [];
  this.sauce = [];
  this.size = size;
}

PizzaOrder.prototype.finalPizza = function() {
  var cost = [];
  for (var i = 0; i <= this.toppings.length; i ++) {
       cost.push(i);
     }
     return cost;
  }


$(document).ready(function(){
  $('form#order').submit(function(){
    event.preventDefault();

    var toppingsInput = [];
    $('input:checkbox[name=toppings]:checked').each(function(){
      var toppings = $(this).val();
      toppingsInput.push(toppings);
    })

    var sauceInput = [];
    $('input:checkbox[name=sauce]:checked').each(function(){
      var sauce = $(this).val();
      sauceInput.push(sauce);
    })

    var sizeInput = $('input:radio[name=size]:checked').val();

    var InputPizzaOrder = new PizzaOrder(toppingsInput, sauceInput, sizeInput);

    $('#pizza').text(InputPizzaOrder.finalPizza());

  })
})
