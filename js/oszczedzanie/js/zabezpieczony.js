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
    var val_ilemasz = parseInt(document.form.ilemasz.value);
    var val_ilemies = parseInt(document.form.ilemies.value);
    var val_sz = parseInt(document.form.sz.value)/100;
    var val_ilechcesz = parseInt(document.form.ilechcesz.value);

    var sz_mies = val_sz/12;

    var jeden = (val_ilechcesz*sz_mies+val_ilemies)/ (val_ilemasz*sz_mies+val_ilemies);
    var dwa = 1+sz_mies;
    var logarytm = Math.log(jeden)/Math.log(dwa);
    var wynik = logarytm/12;

    document.form.wynik_lat.value =  Math.round(wynik*10)/10;

}
