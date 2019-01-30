$(function () {
    $("#resi-form").hide();
    $("#corpo-form").hide();
    $("#hyb-form").hide();
    $("#comer-form").hide();
});
//  residential submission
$(function () {
    $("#resi-form").hide();
    $("#corpo-form").hide();
    $("#hyb-form").hide();
    $("#comer-form").hide();
    $("#pointer").change(function () {
        if ($("#pointer").val() == "1") {
            $("#resi-form").show();
        } else {
            $("#resi-form").hide();
        }
    });
});

//  commercial submission
$(function () {
    $("#resi-form").hide();
    $("#corpo-form").hide();
    $("#hyb-form").hide();
    $("#comer-form").hide();
    $("#pointer").change(function () {
        if ($("#pointer").val() == "2") {
            $("#comer-form").show();
        } else {
            $("#comer-form").hide();
        }
    });
});


//  corporation submission
$(function () {
    $("#resi-form").hide();
    $("#corpo-form").hide();
    $("#hyb-form").hide();
    $("#comer-form").hide();
    $("#pointer").change(function () {
        if ($("#pointer").val() == "3") {
            $("#corpo-form").show();
        } else {
            $("#corpo-form").hide();
        }
    });
});
//  hybrid submission
$(function () {
    $("#resi-form").hide();
    $("#corpo-form").hide();
    $("#hyb-form").hide();
    $("#comer-form").hide();
    $("#pointer").change(function () {
        if ($("#pointer").val() == "4") {
            $("#hyb-form").show();
        } else {
            $("#hyb-form").hide();
        }
    });
});
///// number de cage est egale au nombre delevator


///// residential var

var ran = parseInt(document.getElementById("residential-appnum").value); //appart number
var rln = parseInt(document.getElementById("residential-levelnum").value); // level number
var rbn = parseInt(document.getElementById("residential-basenum").value); // base number

///comercial var
var ccan = parseInt(document.getElementById("comer-appnum").value); // appartement number
var ccln = parseInt(document.getElementById("comer-levelnum").value); // level number
var cbn = parseInt(document.getElementById("comer-basenum").value); // base number
var cpn = parseInt(document.getElementById("comer-parkingnum").value); // parking number
var ccn = parseInt(document.getElementById("comer-cagesnum").value); // cage number

//corportate var

var cap = parseInt(document.getElementById("corpo-appnum").value); // appartement number
var cln = parseInt(document.getElementById("corpo-levelnum").value); // level number
var ccbn = parseInt(document.getElementById("corpo-basenum").value); // base number
var cpn = parseInt(document.getElementById("corpo-parkingnum").value); // parking number
var con = parseInt(document.getElementById("corpo-occupantsnum").value); // occupant number

//hybrid var
var han = parseInt(document.getElementById("hyb-appnum").value); // appartement number
var hln = parseInt(document.getElementById("hyb-levelnum").value); // level number
var hbn = parseInt(document.getElementById("hyb-basenum").value); // base number
var hpn = parseInt(document.getElementById("hyb-parkingnum").value); // parking number
var hon = parseInt(document.getElementById("hyb-occupantsnum").value); // occupant number
var hhn = parseInt(document.getElementById("hyb-hoursnum").value); // total hour

////// bouton methode prix
var payment = new Array();
payment["Standard"] = 1.1;
payment["Premium"] = 1.3;
payment["Exelium"] = 1.6;



function getRangePrice() {
    var price = 0;

    var theForm = document.forms["rangeform"];

    var selectedRange = theForm.elements["range"];

    for (var i = 0; i < selectedRange.length; i++) {
        //if the radio button is checked
        if (selectedRange[i].checked) {

            price = payment[selectedRange[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    return price;
}

/////elevator number 

var env = parseInt(document.getElementById("elevNumV").value); // la case ou ca transmet
var unitPrice = 7565;



////residential function
function residential() {
    var env = parseInt(document.getElementById("elevNumV").value);
    var ran = parseInt(document.getElementById("residential-appnum").value); // residentiel appart number
    var rln = parseInt(document.getElementById("residential-levelnum").value); // residentiel level number
    var NblR = Math.ceil(ran / rln); // residential,appartement number / level number = number logement (ratio)
    var resiElevatorNumb = Math.ceil(NblR / 6); //= rna = nb dassensor ( number logement residential / par 6)
    var Rcl = Math.ceil(rln / 20); // Rcl = residential colonne ( residential level number / 20)
    var env = Rcl * resiElevatorNumb; // residential colonne x residential elevator = cages number
    document.getElementById("elevNumV").value = env;

    if (document.getElementById("standard").checked) {
        subTotal = env * 7565;
        installation = subTotal * 0.1;
        totalPrice = subTotal + installation;

    } else if (document.getElementById("premium").checked) {
        subTotal = env * 12345;
        installation = subTotal * 0.13;
        totalPrice = subTotal + installation;
    } else {
        subTotal = env * 15400;
        installation = subTotal * 0.16;
        totalPrice = subTotal + installation;
    }

    
    document.getElementById("totalPrice").textContent = Math.round(totalPrice*100)/100 + "$";
    // NblR = number logement ratio
    // Rcl = nombre de colonne
    // resiElevatorNumb = nombre delevator
}

/// corporate and hybrid function
function corpoHyb() {
    console.log("weeeeeeeeeeeeeeeeeeeeeeee")
    var env = parseInt(document.getElementById("elevNumV").value);
    var cln = parseInt(document.getElementById("corpo-levelnum").value); // number level number
    console.log(cln)

    var ccbn = parseInt(document.getElementById("corpo-basenum").value); // base number
    console.log(ccbn)
    var con = parseInt(document.getElementById("corpo-occupantsnum").value); // occupant number
    console.log(con)
    var cttl = cln + ccbn;
    console.log(cttl)
    var clb = Math.ceil((cttl * con) / 1000); ///clb = number partial elevator  (floor total number * occupant number )
    console.log(clb)
    var cctn = Math.ceil(cttl / 20); // cctn = column total number  = (clb =  occupant number / 20)
    console.log(cctn)
    var cebc = Math.ceil(cctn / cln); //  cebc total nombre elevator par colonne (env = nombre de cage / cln = nombre colonne)   
    console.log(cebc) 
    var cte = (cebc * cctn); // cte =nombre de cage total ( nombre elevator par colone * nb colonne total)
    console.log(cte)
     var env = cte; 
    document.getElementById("elevNumV").value = cte;

    // var env = ccn;
    // document.getElementById("elevNumV").value = ccn;

   if  (document.getElementById("standard").checked) {
        subTotal = env * 7565;
        installation = subTotal * 0.1;
        totalPrice = subTotal + installation;

    } else if (document.getElementById("premium").checked) {
        subTotal = env * 12345;
        installation = subTotal * 0.13;
        totalPrice = subTotal + installation;
    } else {
        subTotal = env * 15400;
        installation = subTotal * 0.16;
        totalPrice = subTotal + installation;
    }
    document.getElementById("totalPrice").textContent = Math.round(totalPrice*100)/100 + "$";
    // ccbn base  number
    // con = occupant number
    // clb = partial number elevator
    // cctn = total number column 
    //  cte =total elevator number or cage
    // cttl = total floors number
    // cebc = number column by elevator

}

function commercial() {
    console.log("weeeeeeeeeeeeeeeeeeeeeeee")
    var env = parseInt(document.getElementById("elevNumV").value);
    var ccln = parseInt(document.getElementById("comer-levelnum").value); // number level number
    var cbn = parseInt(document.getElementById("comer-basenum").value); // base number
    var ccan = parseInt(document.getElementById("comer-appnum").value); // number appartement number
    var ccn = parseInt(document.getElementById("comer-cagesnum").value);
    var env = ccn;
    document.getElementById("elevNumV").value = ccn;

    if  (document.getElementById("standard").checked) {
        subTotal = env * 7565;
        installation = subTotal * 0.1;
        totalPrice = subTotal + installation;

    } else if (document.getElementById("premium").checked) {
        subTotal = env * 12345;
        installation = subTotal * 0.13;
        totalPrice = subTotal + installation;
    } else {
        subTotal = env * 15400;
        installation = subTotal * 0.16;
        totalPrice = subTotal + installation;
    }
    document.getElementById("totalPrice").textContent = Math.round(totalPrice*100)/100 + "$";
}

$("input").on('keyup', function () {

    if ($("#pointer").val() == "1") {

        residential();
    } else if ($("#pointer").val() == "2") {

        commercial();
    } else {

        corpoHyb();
    }
});
//// button standard clacul
$("#standard").on('click', function () {
    
    if ($("#pointer").val() == "1") {

        residential();
    } else if ($("#pointer").val() == "2") {
        commercial();
    } else {
        corpoHyb();
    }
});


// premium button calcule
$("#premium").on('click', function () {

    if ($("#pointer").val() == "1") {


        residential();
    } else if ($("#pointer").val() == "2") {

        commercial();
    } else {

        corpoHyb();
    }
});


// button exelium
$("#excelium").on('click', function () {

    if ($("#pointer").val() == "1") {


        residential();
    } else if ($("#pointer").val() == "2") {

        commercial();
    } else {

        corpoHyb();
    };
});

