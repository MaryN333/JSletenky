//nacteni stranky s hodnotami
window.addEventListener('load', () => {
    let pocatecniCastka = calcDestinaceKusy();
    document.getElementById("castka").innerHTML=`${pocatecniCastka}`
 });

//funkce, ktera vypisuje finalni cenu
function finalniCena() {
    let finalDestinaceKusy = calcDestinaceKusy();
    let finalTridaZpatecni = calcTridaZpatecni();
    let konecnaCena = finalDestinaceKusy + finalTridaZpatecni;
    document.getElementById("castka").innerHTML = konecnaCena;
    return konecnaCena;
};

//vypocita cenu letenky x pocet
function calcDestinaceKusy(){
    let cena = parseInt(document.form1.vyberDestinace.value);
    let ks = parseInt(document.form1.pocet.value);
    let cenaDestinaceKusy = cena * ks;
    return cenaDestinaceKusy;
 };
 
 //vypocita priplatky: zpatecni let a trida
 function calcTridaZpatecni(){
    let predchoziCena = calcDestinaceKusy();
    let zpatecniLetenka = 0;
    let priplatekTrida = 0;
    if (document.form1.back1.checked){
       zpatecniLetenka=predchoziCena;
    }
    let novaCena = predchoziCena + zpatecniLetenka;
    if(document.form1.trida[1].checked){
       priplatekTrida = novaCena * 0.25;
    }
    else if(document.form1.trida[2].checked){
       priplatekTrida = novaCena * 0.5;
    }
    let cenaZpatecniTrida = zpatecniLetenka + priplatekTrida ;
    return cenaZpatecniTrida;
 };

//kontrola penez
function kontrolaPenez() {
    let celkoveNaklady = finalniCena();
    let rozpocetKlienta = parseInt(document.form1.odpoved.value);
    if (rozpocetKlienta >= celkoveNaklady) {
        document.getElementById("answer").innerHTML = " Na letenky to staci";
    } else {
        document.getElementById("answer").innerHTML = " Tato castka nestaci pro nakup letenek";
    }
};

//kontrola texstarea a mail
function kontrolaText(evt) {
    console.log('evt.key = ' + evt.key);
    return /[a-z0-9,-.@]/.test(evt.key);    
}
