function obl_wyn(stopa, n, wa, wp)
{
    return ((wp - wa*(Math.pow(1+stopa,n)))/ ((Math.pow(1+stopa, n) - 1)/ stopa));
}

function spra(wa,wp,n,s)
{
    if ( (wa<0) || isNaN(wa)){
        alert("B��dnie wprowadzone dane!\n\nWpisz jeszcze raz."); return false;
    }
    if ((wp<=0) || isNaN(wp)){
        alert("B��dnie wprowadzone dane!\n\nWpisz jeszcze raz."); return false;
    }
    if ((n<=0) || isNaN(n)){
        alert("B��dnie wprowadzone dane!\n\nWpisz jeszcze raz."); return false;
    }
    if ((s<=0) || isNaN(s)){
        alert("B��dnie wprowadzone dane!\n\nWpisz jeszcze raz."); return false;
    }
    return true;
}

function wylicz()
{
    // to jest piersza czesc wyliczjaca ile beda kosztowac studia, kiedy beda rozpoczete i inflacja
    var val_rozps = parseFloat(document.form.rozps.value);
    val_rozps = Math.round(val_rozps*10)/10;
    document.form.rozps.value = val_rozps;

    var val_koszto = parseFloat(document.form.koszto.value);
    var val_inflacja = parseFloat(document.form.inflacja.value)/100;

    val_kosztp = val_koszto*Math.pow((1 + val_inflacja), val_rozps);
    document.form.kosztp.value = Math.round(val_kosztp*100)/100; // wynik pierwszy: Jaki bedzie przewidywany koszt studiow

    // to jest druga czesc wyliczjaca ile misiecznie trzeba odkladac, ile odlozymy w sumie
    var val_ilemasz = parseFloat(document.form.ilemasz.value);
    var val_ilemies = parseFloat(document.form.ilemies.value);
    var val_sz = eval(parseInt(document.form.sz.value)/100/12);
    var mies_rozps = val_rozps*12;

    var potega = Math.pow((1 + val_sz), mies_rozps);
    val_ilebedziesz = val_ilemasz*potega+val_ilemies*(potega-1)/val_sz;
    document.form.ilebedziesz.value = Math.round(val_ilebedziesz*100)/100; // wynik drugi: Ile uzbierasz

    val_ilemiesmus = ((val_kosztp-(val_ilemasz*potega))*val_sz)/(potega-1);
    document.form.ilemiesmus.value = Math.round(val_ilemiesmus*100)/100; // wynik drugi: Ile uzbierasz

    tp(val_ilebedziesz,val_kosztp)

        function tryNumberFormat(obj)
        {
            obj.value = new NumberFormat(obj.value).toFormatted();
        }

    myArray = new Array('ilemiesmus', 'ilebedziesz', 'kosztp');
    dlugosc =  myArray.length;

    for (i=0; i<dlugosc; i++)
    {
        var pole = myArray[i];
        var pl = eval('document.form.' + pole);
        tryNumberFormat(pl);
    }
}

function tp(a,b) //porownanie pol czy bardziej oplaci sie teraz czy w przyszlosci
{
    if(a>b)
    {
        document.form.cel.value = "TAK";
    }
    else
    {
        document.form.cel.value = "NIE";
    }
}
