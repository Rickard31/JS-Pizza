/**
 * Created by chaika on 09.02.16.
 */
var Pizza_List = require('./data/Pizza_List');

exports.getPizzaList = function (req, res) {
    res.send(Pizza_List);
};

var crypto = require("crypto");

function sha1(string) {
    var sha1 = crypto.createHash('sha1');
    sha1.update(string);
    return sha1.digest('base64');
}

function base64(str) {
    return new Buffer(str).toString('base64');
}

exports.createOrder = function (req, res) {
    //console.log("create order called");
    var order_info = req.body;
    console.log("Creating Order", order_info);
    var amount = 0;
    var description = "Замовлення піци: " + order_info.name +
        "\nАдреса доставки: " + order_info.address +
        "\nТелефон: " + order_info.phone +
        "\nЗамовлення: ";
    order_info.order.forEach(function (item) {
        description += "\n- " + item.quantity + "шт. ";
        if (item.size == "small_size") {
            description += "[Мала] " + item.pizza.title + " "
                + item.pizza.small_size.price + "грн.*" + item.quantity + "="
                + item.pizza.small_size.price * item.quantity + "грн.;";
            amount += item.pizza.small_size.price * item.quantity;
        } else {
            description += "[Велика] " + item.pizza.title + " "
                + item.pizza.big_size.price + "грн.*" + item.quantity + "="
                + item.pizza.big_size.price * item.quantity + "грн.;";
            amount += item.pizza.big_size.price * item.quantity;
        }
    });
    description += "\n\n Разом " + amount + "грн.";
    //console.log("description:",description);
    var order = {
        version: 3,
        public_key: "i96776360770",
        action: "pay",
        amount: amount,
        currency: "UAH",
        description: description,
        order_id: Math.random(),
        sandbox: 1 //!!!Важливо щоб було 1,	бо інакше візьме гроші!!!
    };
    var data = base64(JSON.stringify(order));
    //console.log("order:", order);
    //console.log("data:", data);
    var signature = sha1(
        "EsNbRRQZePvIXoYtZMwbqJsYeRzJLclIhJ0A8ev7" + data +
        "EsNbRRQZePvIXoYtZMwbqJsYeRzJLclIhJ0A8ev7");
    res.send({
        success: true,
        data: data,
        signature: signature
    });
};