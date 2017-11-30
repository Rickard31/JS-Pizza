const point = ($("#google-map").length>0)? new google.maps.LatLng(50.464379, 30.519131):null;
var map;
var marker;
var homeMarker;

var API = require('./API');
var PizzaCart = require('./pizza/PizzaCart');

//TODO: Fix callbacks
function initialize() {
    //Тут починаємо працювати з картою
    var mapProp = {
        center: point,
        zoom: 15
    };
    var html_element = document.getElementById("google-map");
    map = new google.maps.Map(html_element, mapProp);
    //Карта створена і показана

    marker = new google.maps.Marker({
        position: point,
        map: map,
        icon: "assets/images/map-icon.png"
    });

    homeMarker = new google.maps.Marker({
        position: point,
        map: null,
        icon: "assets/images/home-icon.png"
    })

    google.maps.event.addListener(map, 'click', function (me) {
        var coordinates = me.latLng;

        homeMarker.setMap(map);
        homeMarker.setPosition(coordinates);

        setAdress(coordinates, logError);

        console.log(calculateRoute(point, coordinates, logError));

        adressOk = true;
        $(".address-group").removeClass("false-input");
        //$(".order-summery-time").html("<b>Приблизний час доставки: </b>" + calculateRoute(point, coordinates, logError));
    });

    $("#proceed-button").click(function () {
        //console.log()
        //geocodeAddress($("#inputAdress").val(), logError);
        validateName();
        validatePhone();
        validateAdress();

        if(nameOk && phoneOk && adressOk){
            var order = {
                name: $("#inputName").val(),
                phone: $("#inputPhone").val(),
                adress: $("#inputAdress").val(),
                pizzas: PizzaCart.getPizzaInCart()
            }
            API.createOrder(order,function(err,server_data){
                if(err){
                    alert("Сталася помилка");
                    return callback(err);
                }
                LiqPayCheckout.init({
                    data:	server_data.data,//"Дані...",
                    signature:	server_data.signature,//"Підпис...",
                    embedTo:	"#liqpay",
                    mode:	"popup"	//	embed	||	popup
                }).on("liqpay.callback",	function(data){
                    console.log(data.status);
                    console.log(data);
                }).on("liqpay.ready",	function(data){
                    //	ready
                }).on("liqpay.close",	function(data){
                    //	close
                });
            });
        }
    })
}

var geocoder = ($("#google-map").length>0)? new google.maps.Geocoder():null;

function setAdress(latlng, callback) {
    //Модуль за роботу з адресою
    geocoder.geocode({'location': latlng}, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK && results[1]) {
            var adress = results[0].formatted_address;
            $("#inputAdress").attr('value', adress);
            $("#inputAdress").val(adress);
            $(".order-summery-adress").html("<b>Адреса доставки: </b>" + adress);
            callback(null, adress);
        } else {
            callback(new Error("Can't find adress"));
        }
    });
}

var directionsDisplay = ($("#google-map").length>0)? new google.maps.DirectionsRenderer():null;

function calculateRoute(A_latlng, B_latlng, callback) {
    var directionService = new google.maps.DirectionsService();
    directionService.route({
        origin: A_latlng,
        destination: B_latlng,
        travelMode: google.maps.TravelMode["DRIVING"]
    }, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setMap(null);
            directionsDisplay = new google.maps.DirectionsRenderer();
            directionsDisplay.setOptions({suppressMarkers: true});
            directionsDisplay.setDirections(response);
            directionsDisplay.setMap(map);
            //directions.start = null;
            //directions.end = null;
            var leg = response.routes[0].legs[0];
            //console.log(leg.duration.text);
            $(".order-summery-time").html("<b>Приблизний час доставки: </b>" + leg.duration.text);
            /*callback(null, {
                duration: leg.duration
            });*/
            // return leg.duration.text;
        } else {
            $(".order-summery-time").html("<b>Приблизний час доставки: </b> невідомий");
            //callback(new Error("Can't find direction"));
        }
    });
}

function geocodeAddress(adress, callback) {
    geocoder.geocode({'address': adress}, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK && results[0]) {
            var coordinates = results[0].geometry.location;
            calculateRoute(point, coordinates);
            homeMarker.setMap(map);
            homeMarker.setPosition(coordinates);

            setAdress(coordinates, logError);
        } else {
            throw new Error("Can't find address at Geocode")
            //callback(new Error("Can't find the adress"));
        }
    });
}

function logError(err, someRes) {
    if (err) console.log(err);
}

//Коли сторінка завантажилась
if($("#google-map").length>0) google.maps.event.addDomListener(window, 'load', initialize);

var namePattern = /^[ІіЇїЁёа-яА-Яa-zA-Z\s]+$/;
var phonePattern = /^[+]{0,1}\d{4,13}$/;
var nameOk = false;
var phoneOk = false;
var adressOk = false;

function validateName(){
    if($("#inputName").val()==''){
        $(".name-group").find(".incorrect-input-warning").text("Name can't be empty");
        $(".name-group").addClass("false-input");
        nameOk = false;
    } else{
        if(namePattern.test($("#inputName").val())){
            nameOk = true;
            $(".name-group").removeClass("false-input");
        } else{
            $(".name-group").find(".incorrect-input-warning").text("Введіть тільки власне ім’я, без цифр");
            $(".name-group").addClass("false-input");
            nameOk = false;
        }
    }
}

function validatePhone(){
    if($("#inputPhone").val()==''){
        $(".phone-group").find(".incorrect-input-warning").text("Phone number can't be empty");
        $(".phone-group").addClass("false-input");
        phoneOk = false;
    } else{
        if(phonePattern.test($("#inputPhone").val())){
            phoneOk = true;
            $(".phone-group").removeClass("false-input");
        } else{
            $(".phone-group").find(".incorrect-input-warning").text("Введіть номер телефону у форматі +380 або почніть з 0");
            $(".phone-group").addClass("false-input");
            phoneOk = false;
        }
    }
}

function validateAdress(){
    var adress = $("#inputAdress").val();
    if(adress==''){
        $(".address-group").find(".incorrect-input-warning").text("Adress can't be empty");
        $(".address-group").addClass("false-input");
        adressOk = false;
    } else{
        /*try{
            geocodeAddress(adress, logError);
            adressOk = true;
            $(".address-group").removeClass("false-input");
        } catch(Error){
            $(".address-group").find(".incorrect-input-warning").text("Adress must be valid");
            $(".address-group").addClass("false-input");
            adressOk = false;
        }*/
        geocoder.geocode({'address': adress}, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK && results[0]) {
                var coordinates = results[0].geometry.location;
                calculateRoute(point, coordinates);
                homeMarker.setMap(map);
                homeMarker.setPosition(coordinates);

                setAdress(coordinates, logError);

                adressOk = true;
                $(".address-group").removeClass("false-input");
            } else {
                $(".address-group").find(".incorrect-input-warning").text("Adress must be valid");
                $(".address-group").addClass("false-input");
                adressOk = false;
            }
        });
    }
}

exports.initOrderPage = initialize;



