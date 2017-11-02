(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by diana on 12.01.16.
 */

var pizza_info = [
    {
        id:1,
        icon:'assets/images/pizza_7.jpg',
        title: "Імпреза",
        type: 'М’ясна піца',
        content: {
            meat: ['балик', 'салямі'],
            chicken: ['куриця'],
            cheese: ['сир моцарелла', 'сир рокфорд'],
            pineapple: ['ананаси'],
            additional: ['томатна паста', 'петрушка']
        },
        small_size:{
            weight: 370,
            size: 30,
            price: 99
        },
        big_size:{
            weight: 660,
            size: 40,
            price: 169
        },
        is_new:true,
        is_popular:true

    },
    {
        id:2,
        icon:'assets/images/pizza_2.jpg',
        title: "BBQ",
        type: 'М’ясна піца',
        content: {
            meat: ['мисливські ковбаски', 'ковбаски папероні', 'шинка'],
            cheese: ['сир домашній'],
            mushroom: ['шампінйони'],
            additional: ['петрушка', 'оливки']
        },
        small_size:{
            weight: 460,
            size: 30,
            price: 139
        },
        big_size:{
            weight: 840,
            size: 40,
            price: 199
        },
        is_popular:true
    },
    {
        id:3,
        icon:'assets/images/pizza_1.jpg',
        title: "Міксовий поло",
        type: 'М’ясна піца',
        content: {
            meat: ['вітчина', 'куриця копчена'],
            cheese: ['сир моцарелла'],
            pineapple: ['ананаси'],
            additional: ['кукурудза', 'петрушка', 'соус томатний']
        },
        small_size:{
            weight: 430,
            size: 30,
            price: 115
        },
        big_size:{
            weight: 780,
            size: 40,
            price: 179
        }
    },
    {
        id:4,
        icon:'assets/images/pizza_5.jpg',
        title: "Сициліано",
        type: 'М’ясна піца',
        content: {
            meat: ['вітчина', 'салямі'],
            cheese: ['сир моцарелла'],
            mushroom: ['шампінйони'],
            additional: ['перець болгарський',  'соус томатний']
        },
        small_size:{
            weight: 450,
            size: 30,
            price: 111
        },
        big_size:{
            weight: 790,
            size: 40,
            price: 169
        }
    },
    {
        id:17,
        icon:'assets/images/pizza_3.jpg',
        title: "Маргарита",
        type: 'Вега піца',
        content: {
            cheese: ['сир моцарелла', 'сир домашній'],
            tomato: ['помідори'],
            additional: ['базилік', 'оливкова олія', 'соус томатний']
        },
        small_size:{
            weight: 370,
            size: 30,
            price: 89
        }
    },
    {
        id:43,
        icon:'assets/images/pizza_6.jpg',
        title: "Мікс смаків",
        type: 'М’ясна піца',
        content: {
            meat: ['ковбаски'],
            cheese: ['сир моцарелла'],
            mushroom: ['шампінйони'],
            pineapple: ['ананаси'],
            additional: ['цибуля кримська', 'огірки квашені', 'соус гірчичний']
        },
        small_size:{
            weight: 470,
            size: 30,
            price: 115
        },
        big_size:{
            weight: 780,
            size: 40,
            price: 180
        }
    },
    {
        id:90,
        icon:'assets/images/pizza_8.jpg',
        title: "Дольче Маре",
        type: 'Морська піца',
        content: {
            ocean: ['криветки тигрові', 'мідії', 'ікра червона', 'філе червоної риби'],
            cheese: ['сир моцарелла'],
            additional: ['оливкова олія', 'вершки']
        },
        big_size:{
            weight: 845,
            size: 40,
            price: 399
        }
    },
    {
        id:6,
        icon:'assets/images/pizza_4.jpg',
        title: "Россо Густо",
        type: 'Морська піца',
        content: {
            ocean: ['ікра червона', 'лосось копчений'],
            cheese: ['сир моцарелла'],
            additional: ['оливкова олія', 'вершки']
        },
        small_size:{
            weight: 400,
            size: 30,
            price: 189
        },
        big_size:{
            weight: 700,
            size: 40,
            price: 299
        }
    }
];

module.exports = pizza_info;
},{}],2:[function(require,module,exports){
/**
 * Created by chaika on 02.02.16.
 */

var ejs = require('ejs');


exports.PizzaMenu_OneItem = ejs.compile("<%\nfunction getIngredientsArray(pizza) {\n    //Отримує вміст піци\n    var content = pizza.content;\n    var result = [];\n\n    //Object.keys повертає масив ключів в об’єкті JavaScript\n\n    Object.keys(content).forEach(function (key) {\n\n        //a.concat(b) створює спільний масив із масивів a та b\n        result = result.concat(content[key]);\n    });\n\n    return result;\n}\n%>\n\n<div class=\"col-md-6 col-lg-4 pizza-card\">\n    <div class=\"thumbnail\">\n        <img class=\"pizza-icon\" src=\"<%= pizza.icon %>\" alt=\"Pizza\">\n\n        <% if(pizza.is_new) { %>\n        <span class=\"label label-danger\">Нова</span>\n        <% }  else if(pizza.is_popular) { %>\n        <span class=\"label label-success\">Популярна</span>\n        <% } %>\n\n        <div class=\"caption\">\n            <span class=\"title\"><%= pizza.title %></span>\n            <span class=\"pizza-type\"><%= pizza.type %></span>\n            <p class=\"description\">\n                <%= getIngredientsArray(pizza).join(\", \") %>\n            </p>\n        </div>\n\n\n        <div class=\"row\">\n\n            <% if(pizza.small_size){ %>\n            <div class=\"col-sm-6\">\n                <div class=\"pizza-stats\">\n                    <img class=\"icon\" src=\"assets/images/size-icon.svg\">\n                    <span><%= pizza.small_size.size %></span>\n                </div>\n                <div class=\"pizza-stats\">\n                    <img class=\"icon\" src=\"assets/images/weight.svg\">\n                    <span><%= pizza.small_size.weight %></span>\n                </div>\n                <div class=\"price\"><%= pizza.small_size.price %></div>\n                <span>грн.</span>\n                <div>\n                    <button type=\"button\" class=\"btn btn-warning buy-small\">Купити</button>\n                </div>\n\n            </div>\n            <% } if(pizza.big_size){  %>\n            <div class=\"col-sm-6\">\n                <div class=\"pizza-stats\">\n                    <img class=\"icon\" src=\"assets/images/size-icon.svg\">\n                    <span><%= pizza.big_size.size %></span>\n                </div>\n                <div class=\"pizza-stats\">\n                    <img class=\"icon\" src=\"assets/images/weight.svg\">\n                    <span><%= pizza.big_size.weight %></span>\n                </div>\n                <div class=\"price\"><%= pizza.big_size.price %></div>\n                <span>грн.</span>\n                <div>\n                    <button type=\"button\" class=\"btn btn-warning buy-big\">Купити</button>\n                </div>\n            </div>\n            <% } %>\n\n        </div>\n    </div>\n</div>");

exports.PizzaCart_OneItem = ejs.compile("<%\n//var PizzaCart = require(\"ejs\").require(\"../../Frontend/src/pizza/PizzaCart\");\nfunction getSize() {\n    //console.log(pizza.size);\n    try {\n        if (pizza[size].size === pizza[\"small_size\"].size) return \" Мала \";\n    } catch (err) {\n        return \" Велика \";\n    }\n    return \" Велика \";\n}\n%>\n\n<div class=\"order-template\">\n    <div class=\"pizza-title\">\n        <%= pizza.title %>\n        (<%- getSize() %>\n        )\n    </div>\n    <div class=\"stats-block\">\n                        <span class=\"pizza-stats\">\n                            <img class=\"icon\" src=\"assets/images/size-icon.svg\">\n                            <span><%= pizza[size].size %></span>\n                        </span>\n        <span class=\"pizza-stats\">\n                            <img class=\"icon\" src=\"assets/images/weight.svg\">\n                            <span><%= pizza[size].weight %></span>\n                        </span>\n    </div>\n    <div class=\"amount-toggler-block\">\n\n        <span class=\"price\"><%= (pizza[size].price * quantity) %> грн</span>\n        <button type=\"button\" class=\"btn btn-danger minus\">\n            <span class=\"glyphicon glyphicon-minus\"></span>\n        </button>\n        <span class=\"quantity\"><%= quantity %></span>\n        <button type=\"button\" class=\"btn btn-success plus\">\n            <span class=\"glyphicon glyphicon-plus\"></span>\n        </button>\n        <button type=\"button\" class=\"btn btn-default remove\">\n            <span class=\"glyphicon glyphicon-remove\"></span>\n        </button>\n    </div>\n    <img class=\"pizza-logo\" src=\"<%= pizza.icon %>\">\n</div>");

},{"ejs":7}],3:[function(require,module,exports){
/**
 * Created by chaika on 25.01.16.
 */

$(function(){
    //This code will execute when the page is ready
    var PizzaMenu = require('./pizza/PizzaMenu');
    var PizzaCart = require('./pizza/PizzaCart');
    var Pizza_List = require('./Pizza_List');

    PizzaCart.initialiseCart();
    PizzaMenu.initialiseMenu();


});
},{"./Pizza_List":1,"./pizza/PizzaCart":4,"./pizza/PizzaMenu":5}],4:[function(require,module,exports){
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
    var sum = 0;

    //Очищаємо старі піци в кошику
    $cart.html("");

    //Онволення однієї піци
    function showOnePizzaInCart(cart_item) {
        var html_code = Templates.PizzaCart_OneItem(cart_item);

        var $node = $(html_code);

        $node.find(".plus").click(function () {
            //Збільшуємо кількість замовлених піц
            cart_item.quantity += 1;

            //Оновлюємо відображення
            updateCart();
        });

        $node.find(".minus").click(function () {
            //Збільшуємо кількість замовлених піц
            if (cart_item.quantity === 1) removeFromCart(cart_item);
            else {
                cart_item.quantity -= 1;
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

        console.log("Item price - "+$node.find(".number").textContent);
        //sum += cart_item.price;
    }

    console.log("Sum - "+sum);
    $(".summary").find(".number").html(sum+" грн");
    $(".outer").find(".amount-label").html("<span>" + Cart.length + "</span>");
    Cart.forEach(showOnePizzaInCart);

}

exports.removeFromCart = removeFromCart;
exports.addToCart = addToCart;

exports.getPizzaInCart = getPizzaInCart;
exports.initialiseCart = initialiseCart;

exports.PizzaSize = PizzaSize;
},{"../Templates":2}],5:[function(require,module,exports){
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
},{"../Pizza_List":1,"../Templates":2,"./PizzaCart":4}],6:[function(require,module,exports){

},{}],7:[function(require,module,exports){
/*
 * EJS Embedded JavaScript templates
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/

'use strict';

/**
 * @file Embedded JavaScript templating engine. {@link http://ejs.co}
 * @author Matthew Eernisse <mde@fleegix.org>
 * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
 * @project EJS
 * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
 */

/**
 * EJS internal functions.
 *
 * Technically this "module" lies in the same file as {@link module:ejs}, for
 * the sake of organization all the private functions re grouped into this
 * module.
 *
 * @module ejs-internal
 * @private
 */

/**
 * Embedded JavaScript templating engine.
 *
 * @module ejs
 * @public
 */

var fs = require('fs');
var path = require('path');
var utils = require('./utils');

var scopeOptionWarned = false;
var _VERSION_STRING = require('../package.json').version;
var _DEFAULT_DELIMITER = '%';
var _DEFAULT_LOCALS_NAME = 'locals';
var _NAME = 'ejs';
var _REGEX_STRING = '(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)';
var _OPTS = ['delimiter', 'scope', 'context', 'debug', 'compileDebug',
  'client', '_with', 'rmWhitespace', 'strict', 'filename'];
// We don't allow 'cache' option to be passed in the data obj
// for the normal `render` call, but this is where Express puts it
// so we make an exception for `renderFile`
var _OPTS_EXPRESS = _OPTS.concat('cache');
var _BOM = /^\uFEFF/;

/**
 * EJS template function cache. This can be a LRU object from lru-cache NPM
 * module. By default, it is {@link module:utils.cache}, a simple in-process
 * cache that grows continuously.
 *
 * @type {Cache}
 */

exports.cache = utils.cache;

/**
 * Custom file loader. Useful for template preprocessing or restricting access
 * to a certain part of the filesystem.
 *
 * @type {fileLoader}
 */

exports.fileLoader = fs.readFileSync;

/**
 * Name of the object containing the locals.
 *
 * This variable is overridden by {@link Options}`.localsName` if it is not
 * `undefined`.
 *
 * @type {String}
 * @public
 */

exports.localsName = _DEFAULT_LOCALS_NAME;

/**
 * Get the path to the included file from the parent file path and the
 * specified path.
 *
 * @param {String}  name     specified path
 * @param {String}  filename parent file path
 * @param {Boolean} isDir    parent file path whether is directory
 * @return {String}
 */
exports.resolveInclude = function(name, filename, isDir) {
  var dirname = path.dirname;
  var extname = path.extname;
  var resolve = path.resolve;
  var includePath = resolve(isDir ? filename : dirname(filename), name);
  var ext = extname(name);
  if (!ext) {
    includePath += '.ejs';
  }
  return includePath;
};

/**
 * Get the path to the included file by Options
 *
 * @param  {String}  path    specified path
 * @param  {Options} options compilation options
 * @return {String}
 */
function getIncludePath(path, options) {
  var includePath;
  var filePath;
  var views = options.views;

  // Abs path
  if (path.charAt(0) == '/') {
    includePath = exports.resolveInclude(path.replace(/^\/*/,''), options.root || '/', true);
  }
  // Relative paths
  else {
    // Look relative to a passed filename first
    if (options.filename) {
      filePath = exports.resolveInclude(path, options.filename);
      if (fs.existsSync(filePath)) {
        includePath = filePath;
      }
    }
    // Then look in any views directories
    if (!includePath) {
      if (Array.isArray(views) && views.some(function (v) {
        filePath = exports.resolveInclude(path, v, true);
        return fs.existsSync(filePath);
      })) {
        includePath = filePath;
      }
    }
    if (!includePath) {
      throw new Error('Could not find include include file.');
    }
  }
  return includePath;
}

/**
 * Get the template from a string or a file, either compiled on-the-fly or
 * read from cache (if enabled), and cache the template if needed.
 *
 * If `template` is not set, the file specified in `options.filename` will be
 * read.
 *
 * If `options.cache` is true, this function reads the file from
 * `options.filename` so it must be set prior to calling this function.
 *
 * @memberof module:ejs-internal
 * @param {Options} options   compilation options
 * @param {String} [template] template source
 * @return {(TemplateFunction|ClientFunction)}
 * Depending on the value of `options.client`, either type might be returned.
 * @static
 */

function handleCache(options, template) {
  var func;
  var filename = options.filename;
  var hasTemplate = arguments.length > 1;

  if (options.cache) {
    if (!filename) {
      throw new Error('cache option requires a filename');
    }
    func = exports.cache.get(filename);
    if (func) {
      return func;
    }
    if (!hasTemplate) {
      template = fileLoader(filename).toString().replace(_BOM, '');
    }
  }
  else if (!hasTemplate) {
    // istanbul ignore if: should not happen at all
    if (!filename) {
      throw new Error('Internal EJS error: no file name or template '
                    + 'provided');
    }
    template = fileLoader(filename).toString().replace(_BOM, '');
  }
  func = exports.compile(template, options);
  if (options.cache) {
    exports.cache.set(filename, func);
  }
  return func;
}

/**
 * Try calling handleCache with the given options and data and call the
 * callback with the result. If an error occurs, call the callback with
 * the error. Used by renderFile().
 *
 * @memberof module:ejs-internal
 * @param {Options} options    compilation options
 * @param {Object} data        template data
 * @param {RenderFileCallback} cb callback
 * @static
 */

function tryHandleCache(options, data, cb) {
  var result;
  try {
    result = handleCache(options)(data);
  }
  catch (err) {
    return cb(err);
  }
  return cb(null, result);
}

/**
 * fileLoader is independent
 *
 * @param {String} filePath ejs file path.
 * @return {String} The contents of the specified file.
 * @static
 */

function fileLoader(filePath){
  return exports.fileLoader(filePath);
}

/**
 * Get the template function.
 *
 * If `options.cache` is `true`, then the template is cached.
 *
 * @memberof module:ejs-internal
 * @param {String}  path    path for the specified file
 * @param {Options} options compilation options
 * @return {(TemplateFunction|ClientFunction)}
 * Depending on the value of `options.client`, either type might be returned
 * @static
 */

function includeFile(path, options) {
  var opts = utils.shallowCopy({}, options);
  opts.filename = getIncludePath(path, opts);
  return handleCache(opts);
}

/**
 * Get the JavaScript source of an included file.
 *
 * @memberof module:ejs-internal
 * @param {String}  path    path for the specified file
 * @param {Options} options compilation options
 * @return {Object}
 * @static
 */

function includeSource(path, options) {
  var opts = utils.shallowCopy({}, options);
  var includePath;
  var template;
  includePath = getIncludePath(path, opts);
  template = fileLoader(includePath).toString().replace(_BOM, '');
  opts.filename = includePath;
  var templ = new Template(template, opts);
  templ.generateSource();
  return {
    source: templ.source,
    filename: includePath,
    template: template
  };
}

/**
 * Re-throw the given `err` in context to the `str` of ejs, `filename`, and
 * `lineno`.
 *
 * @implements RethrowCallback
 * @memberof module:ejs-internal
 * @param {Error}  err      Error object
 * @param {String} str      EJS source
 * @param {String} filename file name of the EJS file
 * @param {String} lineno   line number of the error
 * @static
 */

function rethrow(err, str, flnm, lineno, esc){
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm); // eslint-disable-line
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
}

function stripSemi(str){
  return str.replace(/;(\s*$)/, '$1');
}

/**
 * Compile the given `str` of ejs into a template function.
 *
 * @param {String}  template EJS template
 *
 * @param {Options} opts     compilation options
 *
 * @return {(TemplateFunction|ClientFunction)}
 * Depending on the value of `opts.client`, either type might be returned.
 * @public
 */

exports.compile = function compile(template, opts) {
  var templ;

  // v1 compat
  // 'scope' is 'context'
  // FIXME: Remove this in a future version
  if (opts && opts.scope) {
    if (!scopeOptionWarned){
      console.warn('`scope` option is deprecated and will be removed in EJS 3');
      scopeOptionWarned = true;
    }
    if (!opts.context) {
      opts.context = opts.scope;
    }
    delete opts.scope;
  }
  templ = new Template(template, opts);
  return templ.compile();
};

/**
 * Render the given `template` of ejs.
 *
 * If you would like to include options but not data, you need to explicitly
 * call this function with `data` being an empty object or `null`.
 *
 * @param {String}   template EJS template
 * @param {Object}  [data={}] template data
 * @param {Options} [opts={}] compilation and rendering options
 * @return {String}
 * @public
 */

exports.render = function (template, d, o) {
  var data = d || {};
  var opts = o || {};

  // No options object -- if there are optiony names
  // in the data, copy them to options
  if (arguments.length == 2) {
    utils.shallowCopyFromList(opts, data, _OPTS);
  }

  return handleCache(opts, template)(data);
};

/**
 * Render an EJS file at the given `path` and callback `cb(err, str)`.
 *
 * If you would like to include options but not data, you need to explicitly
 * call this function with `data` being an empty object or `null`.
 *
 * @param {String}             path     path to the EJS file
 * @param {Object}            [data={}] template data
 * @param {Options}           [opts={}] compilation and rendering options
 * @param {RenderFileCallback} cb callback
 * @public
 */

exports.renderFile = function () {
  var filename = arguments[0];
  var cb = arguments[arguments.length - 1];
  var opts = {filename: filename};
  var data;

  if (arguments.length > 2) {
    data = arguments[1];

    // No options object -- if there are optiony names
    // in the data, copy them to options
    if (arguments.length === 3) {
      // Express 4
      if (data.settings) {
        if (data.settings['view options']) {
          utils.shallowCopyFromList(opts, data.settings['view options'], _OPTS_EXPRESS);
        }
        if (data.settings.views) {
          opts.views = data.settings.views;
        }
      }
      // Express 3 and lower
      else {
        utils.shallowCopyFromList(opts, data, _OPTS_EXPRESS);
      }
    }
    else {
      // Use shallowCopy so we don't pollute passed in opts obj with new vals
      utils.shallowCopy(opts, arguments[2]);
    }

    opts.filename = filename;
  }
  else {
    data = {};
  }

  return tryHandleCache(opts, data, cb);
};

/**
 * Clear intermediate JavaScript cache. Calls {@link Cache#reset}.
 * @public
 */

exports.clearCache = function () {
  exports.cache.reset();
};

function Template(text, opts) {
  opts = opts || {};
  var options = {};
  this.templateText = text;
  this.mode = null;
  this.truncate = false;
  this.currentLine = 1;
  this.source = '';
  this.dependencies = [];
  options.client = opts.client || false;
  options.escapeFunction = opts.escape || utils.escapeXML;
  options.compileDebug = opts.compileDebug !== false;
  options.debug = !!opts.debug;
  options.filename = opts.filename;
  options.delimiter = opts.delimiter || exports.delimiter || _DEFAULT_DELIMITER;
  options.strict = opts.strict || false;
  options.context = opts.context;
  options.cache = opts.cache || false;
  options.rmWhitespace = opts.rmWhitespace;
  options.root = opts.root;
  options.localsName = opts.localsName || exports.localsName || _DEFAULT_LOCALS_NAME;
  options.views = opts.views;

  if (options.strict) {
    options._with = false;
  }
  else {
    options._with = typeof opts._with != 'undefined' ? opts._with : true;
  }

  this.opts = options;

  this.regex = this.createRegex();
}

Template.modes = {
  EVAL: 'eval',
  ESCAPED: 'escaped',
  RAW: 'raw',
  COMMENT: 'comment',
  LITERAL: 'literal'
};

Template.prototype = {
  createRegex: function () {
    var str = _REGEX_STRING;
    var delim = utils.escapeRegExpChars(this.opts.delimiter);
    str = str.replace(/%/g, delim);
    return new RegExp(str);
  },

  compile: function () {
    var src;
    var fn;
    var opts = this.opts;
    var prepended = '';
    var appended = '';
    var escapeFn = opts.escapeFunction;

    if (!this.source) {
      this.generateSource();
      prepended += '  var __output = [], __append = __output.push.bind(__output);' + '\n';
      if (opts._with !== false) {
        prepended +=  '  with (' + opts.localsName + ' || {}) {' + '\n';
        appended += '  }' + '\n';
      }
      appended += '  return __output.join("");' + '\n';
      this.source = prepended + this.source + appended;
    }

    if (opts.compileDebug) {
      src = 'var __line = 1' + '\n'
          + '  , __lines = ' + JSON.stringify(this.templateText) + '\n'
          + '  , __filename = ' + (opts.filename ?
                JSON.stringify(opts.filename) : 'undefined') + ';' + '\n'
          + 'try {' + '\n'
          + this.source
          + '} catch (e) {' + '\n'
          + '  rethrow(e, __lines, __filename, __line, escapeFn);' + '\n'
          + '}' + '\n';
    }
    else {
      src = this.source;
    }

    if (opts.client) {
      src = 'escapeFn = escapeFn || ' + escapeFn.toString() + ';' + '\n' + src;
      if (opts.compileDebug) {
        src = 'rethrow = rethrow || ' + rethrow.toString() + ';' + '\n' + src;
      }
    }

    if (opts.strict) {
      src = '"use strict";\n' + src;
    }
    if (opts.debug) {
      console.log(src);
    }

    try {
      fn = new Function(opts.localsName + ', escapeFn, include, rethrow', src);
    }
    catch(e) {
      // istanbul ignore else
      if (e instanceof SyntaxError) {
        if (opts.filename) {
          e.message += ' in ' + opts.filename;
        }
        e.message += ' while compiling ejs\n\n';
        e.message += 'If the above error is not helpful, you may want to try EJS-Lint:\n';
        e.message += 'https://github.com/RyanZim/EJS-Lint';
      }
      throw e;
    }

    if (opts.client) {
      fn.dependencies = this.dependencies;
      return fn;
    }

    // Return a callable function which will execute the function
    // created by the source-code, with the passed data as locals
    // Adds a local `include` function which allows full recursive include
    var returnedFn = function (data) {
      var include = function (path, includeData) {
        var d = utils.shallowCopy({}, data);
        if (includeData) {
          d = utils.shallowCopy(d, includeData);
        }
        return includeFile(path, opts)(d);
      };
      return fn.apply(opts.context, [data || {}, escapeFn, include, rethrow]);
    };
    returnedFn.dependencies = this.dependencies;
    return returnedFn;
  },

  generateSource: function () {
    var opts = this.opts;

    if (opts.rmWhitespace) {
      // Have to use two separate replace here as `^` and `$` operators don't
      // work well with `\r`.
      this.templateText =
        this.templateText.replace(/\r/g, '').replace(/^\s+|\s+$/gm, '');
    }

    // Slurp spaces and tabs before <%_ and after _%>
    this.templateText =
      this.templateText.replace(/[ \t]*<%_/gm, '<%_').replace(/_%>[ \t]*/gm, '_%>');

    var self = this;
    var matches = this.parseTemplateText();
    var d = this.opts.delimiter;

    if (matches && matches.length) {
      matches.forEach(function (line, index) {
        var opening;
        var closing;
        var include;
        var includeOpts;
        var includeObj;
        var includeSrc;
        // If this is an opening tag, check for closing tags
        // FIXME: May end up with some false positives here
        // Better to store modes as k/v with '<' + delimiter as key
        // Then this can simply check against the map
        if ( line.indexOf('<' + d) === 0        // If it is a tag
          && line.indexOf('<' + d + d) !== 0) { // and is not escaped
          closing = matches[index + 2];
          if (!(closing == d + '>' || closing == '-' + d + '>' || closing == '_' + d + '>')) {
            throw new Error('Could not find matching close tag for "' + line + '".');
          }
        }
        // HACK: backward-compat `include` preprocessor directives
        if ((include = line.match(/^\s*include\s+(\S+)/))) {
          opening = matches[index - 1];
          // Must be in EVAL or RAW mode
          if (opening && (opening == '<' + d || opening == '<' + d + '-' || opening == '<' + d + '_')) {
            includeOpts = utils.shallowCopy({}, self.opts);
            includeObj = includeSource(include[1], includeOpts);
            if (self.opts.compileDebug) {
              includeSrc =
                  '    ; (function(){' + '\n'
                  + '      var __line = 1' + '\n'
                  + '      , __lines = ' + JSON.stringify(includeObj.template) + '\n'
                  + '      , __filename = ' + JSON.stringify(includeObj.filename) + ';' + '\n'
                  + '      try {' + '\n'
                  + includeObj.source
                  + '      } catch (e) {' + '\n'
                  + '        rethrow(e, __lines, __filename, __line, escapeFn);' + '\n'
                  + '      }' + '\n'
                  + '    ; }).call(this)' + '\n';
            }else{
              includeSrc = '    ; (function(){' + '\n' + includeObj.source +
                  '    ; }).call(this)' + '\n';
            }
            self.source += includeSrc;
            self.dependencies.push(exports.resolveInclude(include[1],
                includeOpts.filename));
            return;
          }
        }
        self.scanLine(line);
      });
    }

  },

  parseTemplateText: function () {
    var str = this.templateText;
    var pat = this.regex;
    var result = pat.exec(str);
    var arr = [];
    var firstPos;

    while (result) {
      firstPos = result.index;

      if (firstPos !== 0) {
        arr.push(str.substring(0, firstPos));
        str = str.slice(firstPos);
      }

      arr.push(result[0]);
      str = str.slice(result[0].length);
      result = pat.exec(str);
    }

    if (str) {
      arr.push(str);
    }

    return arr;
  },

  _addOutput: function (line) {
    if (this.truncate) {
      // Only replace single leading linebreak in the line after
      // -%> tag -- this is the single, trailing linebreak
      // after the tag that the truncation mode replaces
      // Handle Win / Unix / old Mac linebreaks -- do the \r\n
      // combo first in the regex-or
      line = line.replace(/^(?:\r\n|\r|\n)/, '');
      this.truncate = false;
    }
    else if (this.opts.rmWhitespace) {
      // rmWhitespace has already removed trailing spaces, just need
      // to remove linebreaks
      line = line.replace(/^\n/, '');
    }
    if (!line) {
      return line;
    }

    // Preserve literal slashes
    line = line.replace(/\\/g, '\\\\');

    // Convert linebreaks
    line = line.replace(/\n/g, '\\n');
    line = line.replace(/\r/g, '\\r');

    // Escape double-quotes
    // - this will be the delimiter during execution
    line = line.replace(/"/g, '\\"');
    this.source += '    ; __append("' + line + '")' + '\n';
  },

  scanLine: function (line) {
    var self = this;
    var d = this.opts.delimiter;
    var newLineCount = 0;

    newLineCount = (line.split('\n').length - 1);

    switch (line) {
    case '<' + d:
    case '<' + d + '_':
      this.mode = Template.modes.EVAL;
      break;
    case '<' + d + '=':
      this.mode = Template.modes.ESCAPED;
      break;
    case '<' + d + '-':
      this.mode = Template.modes.RAW;
      break;
    case '<' + d + '#':
      this.mode = Template.modes.COMMENT;
      break;
    case '<' + d + d:
      this.mode = Template.modes.LITERAL;
      this.source += '    ; __append("' + line.replace('<' + d + d, '<' + d) + '")' + '\n';
      break;
    case d + d + '>':
      this.mode = Template.modes.LITERAL;
      this.source += '    ; __append("' + line.replace(d + d + '>', d + '>') + '")' + '\n';
      break;
    case d + '>':
    case '-' + d + '>':
    case '_' + d + '>':
      if (this.mode == Template.modes.LITERAL) {
        this._addOutput(line);
      }

      this.mode = null;
      this.truncate = line.indexOf('-') === 0 || line.indexOf('_') === 0;
      break;
    default:
        // In script mode, depends on type of tag
      if (this.mode) {
          // If '//' is found without a line break, add a line break.
        switch (this.mode) {
        case Template.modes.EVAL:
        case Template.modes.ESCAPED:
        case Template.modes.RAW:
          if (line.lastIndexOf('//') > line.lastIndexOf('\n')) {
            line += '\n';
          }
        }
        switch (this.mode) {
            // Just executing code
        case Template.modes.EVAL:
          this.source += '    ; ' + line + '\n';
          break;
            // Exec, esc, and output
        case Template.modes.ESCAPED:
          this.source += '    ; __append(escapeFn(' + stripSemi(line) + '))' + '\n';
          break;
            // Exec and output
        case Template.modes.RAW:
          this.source += '    ; __append(' + stripSemi(line) + ')' + '\n';
          break;
        case Template.modes.COMMENT:
              // Do nothing
          break;
            // Literal <%% mode, append as raw output
        case Template.modes.LITERAL:
          this._addOutput(line);
          break;
        }
      }
        // In string mode, just add the output
      else {
        this._addOutput(line);
      }
    }

    if (self.opts.compileDebug && newLineCount) {
      this.currentLine += newLineCount;
      this.source += '    ; __line = ' + this.currentLine + '\n';
    }
  }
};

/**
 * Escape characters reserved in XML.
 *
 * This is simply an export of {@link module:utils.escapeXML}.
 *
 * If `markup` is `undefined` or `null`, the empty string is returned.
 *
 * @param {String} markup Input string
 * @return {String} Escaped string
 * @public
 * @func
 * */
exports.escapeXML = utils.escapeXML;

/**
 * Express.js support.
 *
 * This is an alias for {@link module:ejs.renderFile}, in order to support
 * Express.js out-of-the-box.
 *
 * @func
 */

exports.__express = exports.renderFile;

// Add require support
/* istanbul ignore else */
if (require.extensions) {
  require.extensions['.ejs'] = function (module, flnm) {
    var filename = flnm || /* istanbul ignore next */ module.filename;
    var options = {
      filename: filename,
      client: true
    };
    var template = fileLoader(filename).toString();
    var fn = exports.compile(template, options);
    module._compile('module.exports = ' + fn.toString() + ';', filename);
  };
}

/**
 * Version of EJS.
 *
 * @readonly
 * @type {String}
 * @public
 */

exports.VERSION = _VERSION_STRING;

/**
 * Name for detection of EJS.
 *
 * @readonly
 * @type {String}
 * @public
 */

exports.name = _NAME;

/* istanbul ignore if */
if (typeof window != 'undefined') {
  window.ejs = exports;
}

},{"../package.json":9,"./utils":8,"fs":6,"path":10}],8:[function(require,module,exports){
/*
 * EJS Embedded JavaScript templates
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/

/**
 * Private utility functions
 * @module utils
 * @private
 */

'use strict';

var regExpChars = /[|\\{}()[\]^$+*?.]/g;

/**
 * Escape characters reserved in regular expressions.
 *
 * If `string` is `undefined` or `null`, the empty string is returned.
 *
 * @param {String} string Input string
 * @return {String} Escaped string
 * @static
 * @private
 */
exports.escapeRegExpChars = function (string) {
  // istanbul ignore if
  if (!string) {
    return '';
  }
  return String(string).replace(regExpChars, '\\$&');
};

var _ENCODE_HTML_RULES = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&#34;',
  "'": '&#39;'
};
var _MATCH_HTML = /[&<>\'"]/g;

function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
}

/**
 * Stringified version of constants used by {@link module:utils.escapeXML}.
 *
 * It is used in the process of generating {@link ClientFunction}s.
 *
 * @readonly
 * @type {String}
 */

var escapeFuncStr =
  'var _ENCODE_HTML_RULES = {\n'
+ '      "&": "&amp;"\n'
+ '    , "<": "&lt;"\n'
+ '    , ">": "&gt;"\n'
+ '    , \'"\': "&#34;"\n'
+ '    , "\'": "&#39;"\n'
+ '    }\n'
+ '  , _MATCH_HTML = /[&<>\'"]/g;\n'
+ 'function encode_char(c) {\n'
+ '  return _ENCODE_HTML_RULES[c] || c;\n'
+ '};\n';

/**
 * Escape characters reserved in XML.
 *
 * If `markup` is `undefined` or `null`, the empty string is returned.
 *
 * @implements {EscapeCallback}
 * @param {String} markup Input string
 * @return {String} Escaped string
 * @static
 * @private
 */

exports.escapeXML = function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
        .replace(_MATCH_HTML, encode_char);
};
exports.escapeXML.toString = function () {
  return Function.prototype.toString.call(this) + ';\n' + escapeFuncStr;
};

/**
 * Naive copy of properties from one object to another.
 * Does not recurse into non-scalar properties
 * Does not check to see if the property has a value before copying
 *
 * @param  {Object} to   Destination object
 * @param  {Object} from Source object
 * @return {Object}      Destination object
 * @static
 * @private
 */
exports.shallowCopy = function (to, from) {
  from = from || {};
  for (var p in from) {
    to[p] = from[p];
  }
  return to;
};

/**
 * Naive copy of a list of key names, from one object to another.
 * Only copies property if it is actually defined
 * Does not recurse into non-scalar properties
 *
 * @param  {Object} to   Destination object
 * @param  {Object} from Source object
 * @param  {Array} list List of properties to copy
 * @return {Object}      Destination object
 * @static
 * @private
 */
exports.shallowCopyFromList = function (to, from, list) {
  for (var i = 0; i < list.length; i++) {
    var p = list[i];
    if (typeof from[p] != 'undefined') {
      to[p] = from[p];
    }
  }
  return to;
};

/**
 * Simple in-process cache implementation. Does not implement limits of any
 * sort.
 *
 * @implements Cache
 * @static
 * @private
 */
exports.cache = {
  _data: {},
  set: function (key, val) {
    this._data[key] = val;
  },
  get: function (key) {
    return this._data[key];
  },
  reset: function () {
    this._data = {};
  }
};

},{}],9:[function(require,module,exports){
module.exports={
  "_args": [
    [
      "ejs@2.5.7",
      "D:\\KMA\\NIT\\JS-Pizza\\JS-Pizza"
    ]
  ],
  "_from": "ejs@2.5.7",
  "_id": "ejs@2.5.7",
  "_inBundle": false,
  "_integrity": "sha1-zIcsFoiArjxxiXYv1f/ACJbJUYo=",
  "_location": "/ejs",
  "_phantomChildren": {},
  "_requested": {
    "type": "version",
    "registry": true,
    "raw": "ejs@2.5.7",
    "name": "ejs",
    "escapedName": "ejs",
    "rawSpec": "2.5.7",
    "saveSpec": null,
    "fetchSpec": "2.5.7"
  },
  "_requiredBy": [
    "/"
  ],
  "_resolved": "https://registry.npmjs.org/ejs/-/ejs-2.5.7.tgz",
  "_spec": "2.5.7",
  "_where": "D:\\KMA\\NIT\\JS-Pizza\\JS-Pizza",
  "author": {
    "name": "Matthew Eernisse",
    "email": "mde@fleegix.org",
    "url": "http://fleegix.org"
  },
  "bugs": {
    "url": "https://github.com/mde/ejs/issues"
  },
  "contributors": [
    {
      "name": "Timothy Gu",
      "email": "timothygu99@gmail.com",
      "url": "https://timothygu.github.io"
    }
  ],
  "dependencies": {},
  "description": "Embedded JavaScript templates",
  "devDependencies": {
    "browserify": "^13.0.1",
    "eslint": "^3.0.0",
    "git-directory-deploy": "^1.5.1",
    "istanbul": "~0.4.3",
    "jake": "^8.0.0",
    "jsdoc": "^3.4.0",
    "lru-cache": "^4.0.1",
    "mocha": "^3.0.2",
    "uglify-js": "^2.6.2"
  },
  "engines": {
    "node": ">=0.10.0"
  },
  "homepage": "https://github.com/mde/ejs",
  "keywords": [
    "template",
    "engine",
    "ejs"
  ],
  "license": "Apache-2.0",
  "main": "./lib/ejs.js",
  "name": "ejs",
  "repository": {
    "type": "git",
    "url": "git://github.com/mde/ejs.git"
  },
  "scripts": {
    "coverage": "istanbul cover node_modules/mocha/bin/_mocha",
    "devdoc": "jake doc[dev]",
    "doc": "jake doc",
    "lint": "eslint \"**/*.js\" Jakefile",
    "test": "jake test"
  },
  "version": "2.5.7"
}

},{}],10:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))
},{"_process":11}],11:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[3]);
