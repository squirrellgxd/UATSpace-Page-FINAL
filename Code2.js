function play() {
    var die1 = Math.ceil(Math.random()*6);
    var die2 = Math.ceil(Math.random()*6);
    
    var sum = die1+die2;
    document.write("Die 1 = " + die1);
    document.write("<br/>");
    document.write("Die 2 = " + die2);
    document.write("<br/>");
    document.write("Sum = " + sum);
    document.write("<br/>");
    if (sum == 7 || sum == 11) { 
        document.write("CRAPS - you lose");
        document.write("<br/>");
    }
    else if (die1== die2 && die1%2 == 0)
    {
    document.write("DOUBLES - you win");
    document.write("<br/>");
    }
}

function countdownTimer() {
    //building the coutdown
    var currTime = 5;
    setTimeout(function() {
        document.getElementById("countdownDisplay").innerHTML = currTime;
        currTime--;
    }, 1000);
    
   
    setTimeout(function() {
        document.getElementById("countdownDisplay").innerHTML = currTime;
        currTime--;
    }, 2000);

    setTimeout(function() {
        document.getElementById("countdownDisplay").innerHTML = currTime;
        currTime--;
    }, 3000);

    setTimeout(function() {
        
        document.getElementById("countdownDisplay").innerHTML = currTime;
        currTime--;
    }, 4000);

    setTimeout(function() {
        
        document.getElementById("countdownDisplay").innerHTML = currTime;
        currTime--;
    }, 5000);

    setTimeout(function() {
        document.getElementById("countdownDisplay").innerHTML = "Blastoff!!";
    }, 6000);

}

function betterCountdownTimer() {
    //countdown timer where loops are used to create timers
    currTime = 5;
    for(i = 1; i <= 6; i++) {
        if(i == 6) {
            setTimeout(function() {
                document.getElementById("countdownDisplay").innerHTML = "Blastoff!!";
            }, 1000*i);
        } else {
            setTimeout(function() {
                document.getElementById("countdownDisplay").innerHTML = currTime;
                currTime--;
            }, 1000*i);
        }
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