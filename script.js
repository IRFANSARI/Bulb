var check = 0;

function myFun() {
    if (check)  {
        document.getElementById("bulb").src="img/bulb_off.jpg";
        document.getElementById("btn").innerHTML="Turn On";
    }
    else {
        document.getElementById("bulb").src="img/bulb_on.jpg";
        document.getElementById("btn").innerHTML="Turn Off";
    }

    check = !check;
}