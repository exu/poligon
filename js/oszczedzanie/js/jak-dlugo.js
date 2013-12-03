function spra(val_ilemasz,val_ilemies,val_sz,wynik)
{
    if ( (val_ilemasz<0) || isNaN(val_ilemasz)){
        alert("Błędnie wprowadzone dane!\n\nWpisz jeszcze raz.");
    }
    if ((val_ilemies<=0) || isNaN(val_ilemies)){
        alert("Błędnie wprowadzone dane!\n\nWpisz jeszcze raz.");
    }
    if ((val_sz<=0) || isNaN(val_sz)){
        alert("Błędnie wprowadzone dane!\n\nWpisz jeszcze raz.");
    }
    if ((wynik<=0) || isNaN(wynik) || wynik=="Infinity"){
        document.form.wynik_lat.value = " ";
    }
    return true;
}

function wylicz()
{
    var val_ilemasz = parseFloat(document.form.ilemasz.value);
    var val_ilemies = parseFloat(document.form.ilemies.value);
    var val_sz = parseFloat(document.form.sz.value)/100;

    var jeden = (12*val_ilemies)/(12*val_ilemies-val_ilemasz*val_sz);
    var dwa = 1+val_sz/12;

    var logarytm = Math.log(jeden)/Math.log(dwa);

    var wynik = logarytm/12;
    document.form.wynik_lat.value =  Math.round(wynik*10)/10;

    var val_ile_wyplata = val_ilemasz*(val_sz/12);
    document.form.ile_wyplata.value =  Math.round(val_ile_wyplata*100)/100;

    function tryNumberFormat(obj)
    {
        obj.value = new NumberFormat(obj.value).toFormatted();
    }

    myArray = new Array('ile_wyplata');
    dlugosc =  myArray.length;

    for (i=0; i<dlugosc; i++)
    {
        var pole = myArray[i];
        var pl = eval('document.form.' + pole);
        tryNumberFormat(pl);
    }

    if(val_ilemies>wynik)
    {
        document.form.rezultat.value = Math.round(wynik*10)/10;
    }
    else
    {
        document.form.rezultat.value = "Pieniędzy będzie przybywać.";
    }

    spra(val_ilemasz,val_ilemies,val_sz,wynik)
}

