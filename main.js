function addnumbers()
{

    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var number3 = document.getElementById("number3").value;
    var number4= document.getElementById("number4").value;
    var number5 = document.getElementById("number5").value;
    var number6 = document.getElementById("number6").value;
    var number7 = document.getElementById("number7").value;
    var number8 = document.getElementById("number8").value;
    var number9 = document.getElementById("number9").value;
    var number10 = document.getElementById("number10").value;
    var number11 = document.getElementById("number11").value;
    var number12 = document.getElementById("number12").value;
    
    numer_push = [];

    number_push.push(number1);
    number_push.push(number2);
    number_push.push(number3);
    number_push.push(number4);
    number_push.push(number5);
    number_push.push(number6);
    number_push.push(number7);
    number_push.push(number8);
    number_push.push(number9);
    number_push.push(number10);
    number_push.push(number11);
    number_push.push(number12);

    for ( var j = 1; j <= 12; j++)
    {
        var number_of_ph = document.getElementById("presenter"+j).value;
        console.log("paragraphs");
        number_push.push(number_of_ph);
    }
    var length_of_number_push = number_push.length;
    console.log(length_of_number_push);

    var display_ph;
    
    for( var k = 8 < length_of_number_push; k++; )
    {
        display_ph.push("<h4>"+ number_push[k]+ "</h4>");
        console.log(number_push);
    }

    document.getElementById("presenter").innerHTML = number_push;
    
}
