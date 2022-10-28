function bill(){
    var value1 = document.getElementById('bill').value;
    if(value1 >= 1){
        document.getElementById('bill').classList.add('not-empty');
        document.getElementById('bill').classList.add('valid');
        document.getElementById('bill').classList.remove('invalid');
        document.getElementById('invalid-text').classList.remove('invalid');
    }else{
        document.getElementById('bill').classList.remove('not-empty');
        document.getElementById('bill').classList.add('invalid');
        document.getElementById('bill').classList.remove('valid');
        document.getElementById('invalid-text').classList.add('invalid')
    }
    document.getElementById('bandera1').value = value1;
}

function x_person(){
    var value2 = document.getElementById('x-people').value;

    if(value2 >= 1){
        document.getElementById('x-people').classList.add('not-empty');
        document.getElementById('x-people').classList.add('valid');
        document.getElementById('x-people').classList.remove('invalid');
        document.getElementById('invalid-text2').classList.remove('invalid');
    }else{
        document.getElementById('x-people').classList.remove('not-empty');
        document.getElementById('x-people').classList.add('invalid');
        document.getElementById('x-people').classList.remove('valid');
        document.getElementById('invalid-text2').classList.add('invalid')
    }
    document.getElementById('bandera2').value = value2;
}
function option1(){
    var check = document.getElementById('bill').getAttribute('class');
    var check2 = document.getElementById('x-people').getAttribute('class');
    if(check == 'invalid' || check == null){
        console.log("not valid bill");
    }else{
        if(check2 == 'invalid' || check2 == null){
            console.log("not valid people");
        }else{
            var option1 = 5;
            var total_amount = document.getElementById('bandera1').value / 100 * option1;
            var amount = total_amount / document.getElementById('bandera2').value;
            document.getElementById('tip_amount').innerHTML = parseFloat(amount).toFixed(2);
            document.getElementById('tip_total').innerHTML = parseFloat(total_amount).toFixed(2);
        }
    }
}

function option2(){
    var check = document.getElementById('bill').getAttribute('class');
    var check2 = document.getElementById('x-people').getAttribute('class');
    if(check == 'invalid' || check == null){
        console.log("not valid bill")
    }else{
        if(check2 == 'invalid' || check2 == null){
            console.log("not valid people")
        }else{
            var option1 = 10;
            var total_amount = document.getElementById('bandera1').value / 100 * option1;
            var amount = total_amount / document.getElementById('bandera2').value;
            document.getElementById('tip_amount').innerHTML = parseFloat(amount).toFixed(2);
            document.getElementById('tip_total').innerHTML = parseFloat(total_amount).toFixed(2);
        }
    }
}

function option3(){
    var check = document.getElementById('bill').getAttribute('class');
    var check2 = document.getElementById('x-people').getAttribute('class');
    if(check == 'invalid' || check == null){
        console.log("not valid bill")
    }else{
        if(check2 == 'invalid' || check2 == null){
            console.log("not valid people")
        }else{
            var option1 = 15;
            var total_amount = document.getElementById('bandera1').value / 100 * option1;
            var amount = total_amount / document.getElementById('bandera2').value;
            document.getElementById('tip_amount').innerHTML = parseFloat(amount).toFixed(2);
            document.getElementById('tip_total').innerHTML = parseFloat(total_amount).toFixed(2);
        }
    }
}

function option4(){
    var check = document.getElementById('bill').getAttribute('class');
    var check2 = document.getElementById('x-people').getAttribute('class');
    if(check == 'invalid' || check == null){
        console.log("not valid bill")
    }else{
        if(check2 == 'invalid' || check2 == null){
            console.log("not valid people")
        }else{
            var option1 = 25;
            var total_amount = document.getElementById('bandera1').value / 100 * option1;
            var amount = total_amount / document.getElementById('bandera2').value;
            document.getElementById('tip_amount').innerHTML = parseFloat(amount).toFixed(2);
            document.getElementById('tip_total').innerHTML = parseFloat(total_amount).toFixed(2);
        }
    }
}
function option5(){
    var check = document.getElementById('bill').getAttribute('class');
    var check2 = document.getElementById('x-people').getAttribute('class');
    if(check == 'invalid' || check == null){
        console.log("not valid bill")
    }else{
        if(check2 == 'invalid' || check2 == null){
            console.log("not valid people")
        }else{
            var option1 = 50;
            var amount = (document.getElementById('bandera1').value / 100) * option1;
            var total_amount = document.getElementById('bandera1').value / 100 * option1;
            var amount = total_amount / document.getElementById('bandera2').value;
            document.getElementById('tip_amount').innerHTML = parseFloat(amount).toFixed(2);
            document.getElementById('tip_total').innerHTML = parseFloat(total_amount).toFixed(2);
        }
    }
}

function option_custom(){
    var check = document.getElementById('bill').getAttribute('class');
    var check2 = document.getElementById('x-people').getAttribute('class');
    if(check == 'invalid' || check == null){
        console.log("not valid bill")
    }else{
        if(check2 == 'invalid' || check2 == null){
            console.log("not valid people")
        }else{
            var option1 = document.getElementById('custom').value;
            if (option1 > 5 && option1 < 100){
                var total_amount = document.getElementById('bandera1').value / 100 * option1;
                var amount = total_amount / document.getElementById('bandera2').value;
                document.getElementById('tip_amount').innerHTML = parseFloat(amount).toFixed(2);
                document.getElementById('tip_total').innerHTML = parseFloat(total_amount).toFixed(2);
            }else{
                console.log("Numero Excede (100) o es inferior a (5)")
            }
        }
    }
}