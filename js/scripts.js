//Business Logic
function PizzaOrder(toppings, sauce, size) {
  this.toppings = toppings;
  this.sauce = sauce;
  this.size = size;
}

PizzaOrder.prototype.finalPizza = function() {
  var cost = 0
  if (this.toppings.length <= 3 && this.sauce.length === 1 && this.size === 'small'){
    return cost + 5
  } else if(this.toppings.length <= 3 && this.sauce.length === 1 && this.size === 'medium'){
    return cost + 8
  } else if(this.toppings.length <= 3 && this.sauce.length === 1 && this.size === 'large'){
    return cost + 11
  } else {
    return cost + 15
  }
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

    $('#pizza').text('$' + InputPizzaOrder.finalPizza());

  })
})
