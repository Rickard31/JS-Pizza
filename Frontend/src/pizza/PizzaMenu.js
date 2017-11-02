/**
 * Created by chaika on 02.02.16.
 */
var Templates = require('../Templates');
var PizzaCart = require('./PizzaCart');
var Pizza_List = require('../Pizza_List');

//HTML едемент куди будуть додаватися піци
var $pizza_list = $("#pizza_list");

$(".btn-filter").click(function () {
    $(".active").prop('class', 'btn btn-warning btn-filter');
    $(this).prop('class', 'btn btn-filter active');
    var filter = $(this).prop('id').substr(7);
    filterPizza(filter);
});

function showPizzaList(list) {
    $(".page-title-row").find(".amount-label").html("<span>"+list.length+"</span>");
    //Очищаємо старі піци в кошику
    $pizza_list.html("");

    //Онволення однієї піци
    function showOnePizza(pizza) {
        var html_code = Templates.PizzaMenu_OneItem({pizza: pizza});

        var $node = $(html_code);

        $node.find(".buy-big").click(function () {
            PizzaCart.addToCart(pizza, PizzaCart.PizzaSize.Big);
        });
        $node.find(".buy-small").click(function () {
            PizzaCart.addToCart(pizza, PizzaCart.PizzaSize.Small);
        });

        $pizza_list.append($node);
    }

    list.forEach(showOnePizza);
}

function filterPizza(filter) {
    //Масив куди потраплять піци які треба показати
    var pizza_shown = [];
    Pizza_List.forEach(function (pizza) {
        //Якщо піка відповідає фільтру
        if(filter==="vega"  && pizza.content["meat"]===undefined && pizza.content["ocean"]===undefined){
            //console.log(pizza.content["meat"]);
            pizza_shown.push(pizza);
        }
        else if (pizza.content[filter] || filter === 'all') pizza_shown.push(pizza);
    });

    //Показати відфільтровані піци
    showPizzaList(pizza_shown);
}

function initialiseMenu() {
    //Показуємо усі піци
    showPizzaList(Pizza_List);

}

exports.filterPizza = filterPizza;
exports.initialiseMenu = initialiseMenu;