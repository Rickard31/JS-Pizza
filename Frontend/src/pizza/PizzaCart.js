/**
 * Created by chaika on 02.02.16.
 */
var Templates = require('../Templates');

//Перелік розмірів піци
var PizzaSize = {
    Big: "big_size",
    Small: "small_size"
};

//Змінна в якій зберігаються перелік піц в кошику
var Cart = [];

//HTML едемент куди будуть додаватися піци
var $cart = $("#cart").find(".orders");

function addToCart(pizza, size) {
    var exists = false;

    Cart.forEach(function (item) {
        if (item.pizza.id === pizza.id && item.size === size) {
            exists = true;
            item.quantity++;
            //localStorage.removeItem(item.pizza.id + " " + item.size);
            localStorage.setItem(pizza.id + " " + size, JSON.stringify({
                pizza: pizza,
                size: size,
                quantity: item.quantity
            }));
            return;
        }
    });
    if (!exists) {
        Cart.push({
            pizza: pizza,
            size: size,
            quantity: 1
        });
        localStorage.setItem(pizza.id + " " + size, JSON.stringify({
            pizza: pizza,
            size: size,
            quantity: 1
        }));
    }
    //Оновити вміст кошика на сторінці
    updateCart();
}

function removeFromCart(cart_item) {
    //Видалити піцу з кошика
    localStorage.removeItem(cart_item.pizza.id + " " + cart_item.size);
    for (var i = 0, j = 0; i < Cart.length; i++) {
        if (Cart[i] !== cart_item) Cart[j++] = Cart[i];
    }
    Cart.pop();
    //Після видалення оновити відображення
    updateCart();
}

function initialiseCart() {
    //Фукнція віпрацьвуватиме при завантаженні сторінки
    //Тут можна наприклад, зчитати вміст корзини який збережено в Local Storage то показати його
    Object.keys(localStorage).forEach(function (key) {
        Cart.push(JSON.parse(localStorage.getItem(key)));
    });

    //Clear-Cart button
    $(".outer").find(".btn-link").click(function () {
        for (var i = Cart.length - 1; i >= 0; i--) {
            removeFromCart(Cart[i]);
        }
    });

    updateCart();

}

function getPizzaInCart() {
    //Повертає піци які зберігаються в кошику
    return Cart;
}

function updateCart() {
    //Функція викликається при зміні вмісту кошика
    //Тут можна наприклад показати оновлений кошик на екрані та зберегти вміт кошика в Local Storage

    //Очищаємо старі піци в кошику
    $cart.html("");
    var sum = 0;

    //Онволення однієї піци
    function showOnePizzaInCart(cart_item) {
        var html_code = Templates.PizzaCart_OneItem(cart_item);

        var $node = $(html_code);

        $node.find(".plus").click(function () {
            //Збільшуємо кількість замовлених піц
            cart_item.quantity += 1;

            localStorage.setItem(cart_item.pizza.id + " " + cart_item.size, JSON.stringify({
                pizza: cart_item.pizza,
                size: cart_item.size,
                quantity: cart_item.quantity
            }));


            //Оновлюємо відображення
            updateCart();
        });

        $node.find(".minus").click(function () {
            //Збільшуємо кількість замовлених піц
            if (cart_item.quantity === 1) removeFromCart(cart_item);
            else {
                cart_item.quantity -= 1;

                localStorage.setItem(cart_item.pizza.id + " " + cart_item.size, JSON.stringify({
                    pizza: cart_item.pizza,
                    size: cart_item.size,
                    quantity: cart_item.quantity
                }));

                //Оновлюємо відображення
                updateCart();
            }
        });

        $node.find(".remove").click(function () {
            //Збільшуємо кількість замовлених піц
            removeFromCart(cart_item);
            //Оновлюємо відображення
            updateCart();
        });
        $cart.append($node);

        var cur_price = parseInt($node.find(".price").html().substr(0, $node.find(".price").html().length - 4));
        //console.log("Item price - " + cur_price);
        sum += cur_price;
        $(".summary").find(".outer").find(".number").html(sum + " грн");

    }

    $(".outer").find(".amount-label").html("<span>" + Cart.length + "</span>");

    if (Cart.length > 0) {
        $("#btn-order").attr('disabled', false);
        $("#btn-order").attr('href', 'order.html');
        Cart.forEach(showOnePizzaInCart);
    }
    else {
        $("#btn-order").attr('disabled', true);
        $("#btn-order").attr('href', '/');
        $(".summary").find(".outer").find(".number").html(0 + " грн");
        $cart.html("<div class='no-text-label'>Пусто в холодильнику?<br>Замовте піцу!</div >")
    }

}

exports.removeFromCart = removeFromCart;
exports.addToCart = addToCart;

exports.getPizzaInCart = getPizzaInCart;
exports.initialiseCart = initialiseCart;

exports.PizzaSize = PizzaSize;