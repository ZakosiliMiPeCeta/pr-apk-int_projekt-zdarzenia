let iterations1 = 0;
let iterations2 = 0;
//przycisk 1
function button1()  {
    let przycisk = document.getElementById("btn1");
    
    if(iterations1 == 0) {
        przycisk.value="Przycisk jest kliknięty";
        iterations1++;
    }
    else    {
        przycisk.value="Przycisk jest odkliknięty";
        iterations1 = 0;
    }
}
//przycisk 2
function button2()  {
    let przycisk = document.getElementById("btn2");

    if(iterations2 == 0) {
        przycisk.value="Przycisk jest double-kliknięty";
        iterations2++;
    }
    else    {
        przycisk.value="Przycisk jest od-double-kliknięty";
        iterations2 = 0;
    }
}
// Przycisk 3
let najazd = document.getElementById("btn3");
najazd.addEventListener("mouseover", button3over);
najazd.addEventListener("mouseout", button3notover);

function button3over()  {
    najazd.value="Najechano na przycisk";
}

function button3notover()   {
    najazd.value="Zjechano kursorem z przycisku";
}
//przycisk 4
let up_down = document.getElementById("btn4");
function button4down()  {
    up_down.value="Przycisk aktualnie jest wciśnięty";
}
function button4up()    {
    up_down.value="Odciśnięto przycisk";
}
// mousemove
let pole = document.getElementById("move");
pole.addEventListener("mousemove", ruch);
pole.innerHTML="<p>Najedź na kontener</p>"

function ruch() {
    pole.innerHTML="<p>Ruszasz myszką po kontenerze</p>"
    setTimeout(() => {pole.innerHTML="<p>Rusz myszką po kontenerze";}, 1500);
}
// select
let tekst = document.getElementById("toSelect");
let printTo = document.getElementById("printResult1");
tekst.addEventListener("select", selected);

function selected() {
    printTo.innerHTML="<p>Poprawnie zaznaczyłeś/aś tekst!</p>";
    setTimeout(() => {printTo.innerHTML=""}, 1500);
}
// focus i blur
let printToFocusBlur = document.getElementById("printResult2");
function focused()  {
    printToFocusBlur.innerHTML="<p>Kliknąłeś/aś w pole tekstowe!</p>";
}
function unfocused()    {
    printToFocusBlur.innerHTML="<p>Wyszedłeś/wyszłaś z pola tekstowego!</p>";
}

//change
let printToChange = document.getElementById("printResult3");
function changed()  {
    printToChange.innerHTML="<p>Wykryto zmianę w polu tekstowym</p>";

    setTimeout(() => {printToChange.innerHTML=""}, 1500);
}