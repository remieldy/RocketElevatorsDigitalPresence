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


///// residential var

var ran = parseInt(document.getElementById("residential-appnum").value); //appart number
var rln = parseInt(document.getElementById("residential-levelnum").value); // level number
var rbn = parseInt(document.getElementById("residential-basenum").value); // base number

///comercial var
var commercial_apparts_number = parseInt(document.getElementById("comer-appnum").value); //number of appartement
var commercial_level_number = parseInt(document.getElementById("comer-levelnum").value); // floors level numbers
var commercial_base_number = parseInt(document.getElementById("comer-basenum").value); //  Number of basements 
var corpo_park_nu = parseInt(document.getElementById("comer-parkingnum").value); //  number of parking
var commercial_cage_number = parseInt(document.getElementById("comer-cagesnum").value); // cage number


//corportate var

var corpo_app_num = parseInt(document.getElementById("corpo-appnum").value); // number of appartement
var corpo_level_num = parseInt(document.getElementById("corpo-levelnum").value); // floors level numbers
var corpo_base_nu = parseInt(document.getElementById("corpo-basenum").value); //  Number of basements 
var corpo_park_nu = parseInt(document.getElementById("corpo-parkingnum").value); // number of parking
var con = parseInt(document.getElementById("corpo-occupantsnum").value); //maximum occupant number


//hybrid var
var han = parseInt(document.getElementById("hyb-appnum").value); // number of appartement
var hln = parseInt(document.getElementById("hyb-levelnum").value); //floors level numbers
var hbn = parseInt(document.getElementById("hyb-basenum").value); // Number of basements 
var hpn = parseInt(document.getElementById("hyb-parkingnum").value); // number of parking
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

var env = parseInt(document.getElementById("elevNumV").value); // box for elevator number calcul
var unitPrice = 7565;



////residential function
function residential() {
    var env = parseInt(document.getElementById("elevNumV").value);
    var ran = parseInt(document.getElementById("residential-appnum").value); // residential number of appartement
    var rln = parseInt(document.getElementById("residential-levelnum").value); // residential floors level numbers

    var NblR = Math.ceil(ran / rln); // residential,appartement number / level number = number of appartement (ratio)
    var resiElevatorNumb = Math.ceil(NblR / 6); //= rna = elevator number ( number logement residential / 6)
    var Rcl = Math.ceil(rln / 20); // Rcl = residential column ( residential level number / 20)
    var env = Rcl * resiElevatorNumb; // residential column x residential elevator = cages number
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
  
}

/// corporate and hybrid function
function corpoHyb() {
   
    var env = parseInt(document.getElementById("elevNumV").value);
    var corpo_level_num = parseInt(document.getElementById("corpo-levelnum").value); //  floors level numbers
    var corpo_base_nu = parseInt(document.getElementById("corpo-basenum").value); // Number of basements 
    var con = parseInt(document.getElementById("corpo-occupantsnum").value); // number of  occupant 


   
    var real_Level_floors = corpo_level_num + corpo_base_nu;
    var corpo_tot_occ = (real_Level_floors  * con); //  ( Number of elevator columns * total columns)
    var corpo_column_el = Math.ceil(real_Level_floors / 20); // (corporate partial =  occupant number / 20)
    var corpo_real_elevator = Math.ceil((corpo_tot_occ /1000) /corpo_column_el); //  (Number of basements + number of floors )
    var corpo_tot_el = Math.ceil( corpo_real_elevator / corpo_column_el); //  Number of elevator by columns
    var corpo_tot_el = (corpo_column_el * corpo_real_elevator); // (nombre elevator par colone * total columns)
    var env = corpo_tot_el;  
        document.getElementById("elevNumV").value = corpo_tot_el;
    
     var corpo_app_num = parseInt(document.getElementById("corpo-appnum").value); // number of appartement
     var corpo_level_num = parseInt(document.getElementById("corpo-levelnum").value); // floors level numbers
     var corpo_base_nu = parseInt(document.getElementById("corpo-basenum").value); //  Number of basements 
     var corpo_park_nu = parseInt(document.getElementById("corpo-parkingnum").value); // number of parking
     var con = parseInt(document.getElementById("corpo-occupantsnum").value); //maximum occupant number

    
     // con = = maximum number of occupants
    //corpo_app_num = number of appartement
    // corpo_level_num = floors level numbers
    // corpo_column_el = Number of elevator columns 
    // corpo_base_nu =   Number of basements 
    // corpo_park_nu = number of parking
    //corpo_tot_occ = number total occupants
    // corpo_tot_col = total Number of elevator columns 
    // corpo_tot_el = total Number of elevator cages required 
    // corpo_tot_floors = total floors number

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
// open funtion commercial and when you click on the 3 choice the price is automatically  calculate
function commercial() {
    
    var env = parseInt(document.getElementById("elevNumV").value);
    var commercial_level_number = parseInt(document.getElementById("comer-levelnum").value); // number level number
    var commercial_base_number = parseInt(document.getElementById("comer-basenum").value); // base number
    var commercial_apparts_number = parseInt(document.getElementById("comer-appnum").value); // number appartement number
    var commercial_cage_number = parseInt(document.getElementById("comer-cagesnum").value); //Number of elevator cages required 
    var env = commercial_cage_number;
    document.getElementById("elevNumV").value = commercial_cage_number;

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

