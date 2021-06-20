function start() {
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
}

function stop() {
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
    document.getElementById("data").rows["seconds"].innerHTML = "";
    clearInterval(timer);
}

function getData() {
    var loadedData = loadData();
    return loadedData;
}

function dataRow(legend, value, units) {
    msg = "<td>";
    msg += legend;
    msg += ":</td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}

function countdownTimerFun() {
    //gets run when the function runs..
    var currTime = 20;

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = currTime + " seconds left";
        currTime = currTime - 2;
    }, 2000);

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = currTime + " seconds left";
        currTime = currTime - 2;
    }, 4000);

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = currTime + " seconds left";
        currTime = currTime - 2;
    }, 6000);

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = currTime + " seconds left";
        currTime = currTime - 2;
    }, 8000);

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = currTime + " seconds left";
        currTime = currTime - 2;
    }, 10000);

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = currTime + " seconds left";
        currTime = currTime - 2;
    }, 12000);

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = currTime + " seconds left";
        currTime = currTime - 2;
    }, 14000);

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = currTime + " seconds left";
        currTime = currTime - 2;
    }, 16000);

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = currTime + " seconds left";
        currTime = currTime - 2;
    }, 18000);

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = currTime + " seconds left";
        currTime = currTime - 2;
    }, 20000);

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
    }, 22000);
}

function play() {
    var die1 = Math.ceil((6*Math.random()));
    var die2 = Math.ceil((6*Math.random()));
    var sum = die1 + die2;
    document.getElementById("die1Res").innerHTML = "Die 1 was a " + die1;
    document.getElementById("die2Res").innerHTML = "Die 2 was a " + die2;
    document.getElementById("sumRes").innerHTML = "The sum of the dice is " + sum;

    if (sum == 7 || sum == 11) {
        document.getElementById("finalRes").innerHTML = "Craps, you lose!";
    } else if (die1 == die2 && die1%2 == 0) {
        document.getElementById("finalRes").innerHTML = "Doubles, you win!";
    } else {
        document.getElementById("finalRes").innerHTML = "Not a winner, please try again...";
    }
}

function betterBlastoffLoop() {
    var currTime = 20;
    for(var i = 0; i < 21 ; i = i + 2) {
        setTimeout(function() {
            if (currTime == 0) {
                //when countdown gets to zero, we want blastoff not 0
                document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
            } else if (currTime < 10) {
                //countdown less than 10 sec, change message as per
                //https://synchronic.uat.edu/courses/3507/assignments/132676?module_item_id=329569
                document.getElementById("countdownTimer").innerHTML = 
                    "Warning Less than ½ way to launch, time left = " + currTime + " sec";
            } else {
                //when countdown is occurring
                document.getElementById("countdownTimer").innerHTML = currTime + " sec";
            }
            currTime = currTime - 2;
        }, 1000*i);
    }
}

function checkCreds() {
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;

    if (fullName.length > 20) {
        document.getElementById("loginStatus").innerHTML = "Full name has too many characters!";
    } else if (badgeNumb > 999 || badgeNumb < 1) {
        document.getElementById("loginStatus").innerHTML = "Invalid badge number!!";
    } else {
        alert("Access Granted, welcome " + fullName);
        location.replace("index.html");
    }

}

function playSpaceOddity() {
    mySound = new sound("David_Bowie_Space_Oddity.mp3");
    mySound.play();
}

function playStation() {
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    //this.sound.setAttribute("preload", "audio");
    //this.sound.setAttribute("controls", "none");
    //this.sound.style.display = "none";
    //document.body.appendChild(this.sound);
    this.play = function() {
        this.sound.play();
    }
    // this.stop = function() {
    //     this.sound.pause;
    // }
}

class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ
    ) {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}