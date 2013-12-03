function trunc(x) {
    var param = String(x);
    var index = param.indexOf(".");

    if (index > -1) {
        return param.substring(0, index);
    } else return param;
}
function Abs(x) {
    return Math.abs(x);
}

function CutDot(x) {
    var xx = String(x);
    var index = xx.indexOf('.');

//  alert(x);

    if (index > -1) {
        x = xx.substring(0, index + 3);
        if (xx.substring(index).length == 2) x += '0';
    }

    return x;
}

function ParseValues(val) {
    var param = String(val);
    var index = param.indexOf('.') - 1 ;
    var out = new String();
    var x = 0;

    for (i = param.length-1; i >= 0; i--) {
        if ((x % 3) == 0) {
            out = ' ' + out;
        }

        out = param.charAt(i) + out;
        x++;
    }

     return out.replace(' .', ',');
}

function CutNAN(text) {
    if (text == '') return 0;
    else return text;
}

function Calc1() {
    var kapital      = document.getElementById('kapital').value;
    var okres_inwest = document.getElementById('okres_inwest').value * 12;
    var stopa_zwrotu = String(document.getElementById('stopa_zwrotu').value);
    stopa_zwrotu = Abs(stopa_zwrotu.replace(',', '.')) / 100;

    var output = '';
    var kap = Abs(kapital) + Abs(kapital * stopa_zwrotu);
    var k = kapital;
    var zl = ' zł';


    if ((okres_inwest / 12) > 50) {
        alert('Proszę wprowadzić poprawne dane');
        return;
    }

    output = '<table class="calc1_out" border="0" cellpadding="0" cellspacing="0">';
    output = output + '<tr>';
    output = output + '<th>Rok</th><th>Wpłata</th><th>Suma składek<br />z kapitałem</th></tr>';
    output = output + '</tr>';

    for (i = 1; i <= okres_inwest; i++) {

        if ((i % 12) == 0) {
            output = output + '<tr><td>' + (i / 12) + '</td><td>' + kapital + zl + '</td><td>' + CutDot(kap)  + ' zł</td></tr>';

            if ((i / 12) == (okres_inwest / 12)) {
                output = output + '<tr><td class="wynik">Wynik: </td><td class="wynik">' + ParseValues(k) + ' zł</td><td class="wynik">' + ParseValues(CutDot(kap))  + ' zł</td></tr>';
                break;
            } else  {
                kap = kap + (kap * stopa_zwrotu);
            }
        }

        if (i == 12) {
            kapital = '-';
            zl = '';
        }
    }

    output = output + '</table>';

    document.getElementById('output').innerHTML = output;
}

function Calc2() {
    var kapital      = document.getElementById('kapital_i').value;
    var okres_inwest = document.getElementById('okres_inwest_i').value * 12;
    var stopa_zwrotu = String(document.getElementById('stopa_zwrotu_i').value); // 100;
    var output = '';
    stopa_zwrotu = Abs(stopa_zwrotu.replace(',', '.')) / 12;

    var kap = Abs(kapital) + Abs(kapital * Math.abs(stopa_zwrotu));
    var k = kapital;
    var suma = Abs(kapital);
    var suma_skladek = Abs(kapital);

    output = '<table class="calc2_out" border="0" cellpadding="0" cellspacing="0">';
    output = output + '<tr>';
    output = output + '<th>Rok</th><th>Suma<br />składek</th><th>Suma składek<br />z kapitałem</th></tr>';
    output = output + '</tr>';

    for (i = 1; i <= okres_inwest; i++) {
        if ((i % 12) == 0) {
            output += '<tr><td>' +  (i / 12) + '</td><td>' + CutDot(suma_skladek)  + ' zł</td><td>' + CutDot(suma) + ' zł</td></tr>';
        }

        if ((i / 12) == (okres_inwest / 12)) {
            output = output + '<tr><td class="wynik">Wynik: </td><td class="wynik">' + ParseValues(CutDot(suma_skladek)) + ' zł</td><td class="wynik">' + ParseValues(CutDot(suma)) + ' zł</td></tr>';
            break;
        }

        suma = suma + Abs(kapital) + (suma * (stopa_zwrotu / 100))
        suma_skladek += Abs(kapital);
    }

    output = output + '</table>';
    document.getElementById('output_i').innerHTML = output;
}

function checkForZero(field) {
        if (field.value == 0 || field.value.length == 0) {
            alert ("Ta wartość nie może być równa zeru!");
            field.focus();
    } else calculatePayment(field.form);
}

function cmdCalc_Click(form) {
        if (form.price.value == 0 || form.price.value.length == 0) {
            alert ("Wartość inwestycji musi być większa od zera!");
            form.price.focus();
    } else if (form.ir.value == 0 || form.ir.value.length == 0) {
           alert ("Oprocentowanie kredytu musi być większe od zera!");
           form.ir.focus();
    } else if (form.term.value == 0 || form.term.value.length == 0) {
           alert ("Czas trwania pożyczki musi być większy od zera!");
           form.term.focus();
    } else calculatePayment(form);
}

function calculatePayment(form) {
    var ir = String(document.getElementById('ir').value);
    ir = ir.replace(',', '.');

        princ = form.price.value - form.dp.value;
        intRate = (Math.abs(ir)/100) / 12;
//        intRate = (form.ir.value/100) / 12;
        months = form.term.value * 12;
        form.pmt.value = Math.floor((princ*intRate)/(1-Math.pow(1+intRate,(-1*months)))*100)/100;
        form.principle.value = princ;
    form.payments.value = months;
}

function rate(x, intRate, months) {
//  alert(x + ' ' + intRate + ' ' + months);
    return (Math.floor((parseInt(x)*intRate)/(1-Math.pow(1+intRate,(-1*months)))*100)/100);
}

function calculatePayment2(form) {
    var ir = String(document.getElementById('ir').value);
    var princ = 0;
    var intRate = 0;
    var single_rate = 0;
    var months = 0;
    var out = document.getElementById('kredyt_out');
    var sum_netto = parseInt(document.getElementById('dochod_gospodarstwa').value);
    var persons = parseInt(CutNAN(document.getElementById('liczba_osob').value));
    var other = parseInt(CutNAN(document.getElementById('inne1').value)) +
            parseInt(CutNAN(document.getElementById('inne2').value)) +
            parseInt(CutNAN(document.getElementById('inne3').value)) +
            parseInt(CutNAN(document.getElementById('inne4').value));

    var other2 = parseInt(CutNAN(document.getElementById('inne3').value)) +
            parseInt(CutNAN(document.getElementById('inne4').value));
    var maxRate = (sum_netto * 60 / 100) - other2;

    var x = 0;

    switch (persons) {
        case 1: other += 900; break;
        case 2: other += 900 + 900; break;
        case 3: other += 400 + 900 + 900; break;

        default: other += 2200 + ((persons - 3) * 300); x = 2200 + ((persons - 3) * 300)
    }

    ir = ir.replace(',', '.');

        princ = document.getElementById('price').value;
        intRate = (Math.abs(ir)/100) / 12;
        months = document.getElementById('okres_splaty').value * 12;
    single_rate = rate(princ, intRate, months); //Math.floor((princ*intRate)/(1-Math.pow(1+intRate,(-1*months)))*100)/100;
    other += single_rate;
    var maxCredit = Math.round((sum_netto - (other + 800)) * months);
    x = Math.round((sum_netto - (other + 800)) * months);
    if ((sum_netto - (other - single_rate)) > single_rate) {
        out.innerHTML = '<br /><br /><span style="font-weight: bold;">TAK</span>, z podanych powyżej danych wynika że posiadasz zdolność kredytową do spłaty tego zobowiązania.<br />';
        out.innerHTML += '<br /><table border="0" cellpadding="0" cellpading="0"><tr><td>Twoja rata dla podanej wysokości kredytu wynosi:</td><td style="text-align: right; font-weight: bold;">' + ParseValues(Math.round(single_rate)) + ' zł</td></tr><tr><td>Twoja maksymalna rata kredytowa wynosi: </td><td style="text-align: right; width: 100px; font-weight: bold;">' + ParseValues(CutDot(Math.round(maxRate))) + 'zł</td></tr></table>';
    } else {
        out.innerHTML = '<br /><span style="font-weight: bold;">NIE</span>, z podanych powyżej danych niestety wynika że nie posiadasz zdolności kredytowej do spłaty tego zobowiązania, zapytaj doradcę aby otrzymać kredyt w takiej wysokości.<br />';
    }

    out.innerHTML += '<br />Aby umówić się na <span style="font-weight: bold;">bezpłatne</span> spotkanie z <span style="font-weight: bold;">Doradcą</span> wypełnij <a href="/kontakt/kontakt1/"><span style="color: #ff9900; font-weight: bold; text-decoration: underline;">formularz</span></a>';
    out.innerHTML += '<br />Nasz <span style="font-weight: bold;">Doradca</span> spotka się z <span style="font-weight: bold;">Tobą w dogodnym dla Ciebie terminie i miejscu.</span><br />';
}
