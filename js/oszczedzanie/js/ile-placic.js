// (c) 2001 simon@dischaos.com
//
function obl_wyn(stopa, n, wa, wp)
{
    return ((wp - wa*(Math.pow(1+stopa,n)))/ ((Math.pow(1+stopa, n) - 1)/ stopa));
}

function spra(wa,wp,n,s)
{
    if ( (wa<0) || isNaN(wa)){
        alert("Błędnie wprowadzone dane!\n\nWpisz jeszcze raz."); return false;
    }
    if ((wp<=0) || isNaN(wp)){
        alert("Błędnie wprowadzone dane!\n\nWpisz jeszcze raz."); return false;
    }
    if ((n<=0) || isNaN(n)){
        alert("Błędnie wprowadzone dane!\n\nWpisz jeszcze raz."); return false;
    }
    if ((s<=0) || isNaN(s)){
        alert("Błędnie wprowadzone dane!\n\nWpisz jeszcze raz."); return false;
    }
    return true;
}

function wylicz()
{
    var wa = parseFloat(document.form.kwota.value);
    var wp = parseFloat(document.form.kapital.value);
    var n = parseFloat(document.form.lata.value);
    n = Math.round(n*10)/10;
    document.form.lata.value = n;
    n = n*12;

    var stopa = parseFloat(document.form.zwrot.value)/100 / 12;

    if(spra(wa,wp,n,stopa))
    {
        var wynik; var w;
        wynik = obl_wyn(stopa, n, wa, wp);

        document.form.wynik.value = Math.round(wynik*100)/100;
        w = (n* wynik);

        if(w<0)
            document.form.suma.value=0;
        else
            document.form.suma.value = Math.round(n * wynik*100)/100;
    } 

    function tryNumberFormat(obj)
    {
        obj.value = new NumberFormat(obj.value).toFormatted();
    }

    myArray = new Array('wynik', 'suma');
    dlugosc =  myArray.length;

    for (i=0; i<dlugosc; i++)
    {
        var pole = myArray[i];
        var pl = eval('document.form.' + pole);
        tryNumberFormat(pl);
    }
}

