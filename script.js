let textbox = document.getElementById("input");
let textbox1 = document.getElementById("input1");
let textbox2 = document.getElementById("input2");

function calculate()
{
    let tab = textbox.value; //asigns tab
    let tip = textbox1.value; //asigns tip
    let people = textbox2.value; //asigns people

    let newtip = 1 + (tip * .01); //calculated decimal percentage

    let cal = (tab *  newtip)/people; //calculates

    

    document.getElementById("output").innerHTML = "Each person should pay: $" + cal;
}