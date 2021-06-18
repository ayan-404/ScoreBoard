// Get buttons
const scoreBtn1 = document.querySelector(".scoreBtn1");
const scoreBtn2 = document.querySelector(".scoreBtn2");

// Get undo buttons
const undo1 = document.querySelector(".undo1");
const undo2 = document.querySelector(".undo2");

// Get reset button
const resetBtn = document.querySelector(".reset");

// Get score display
const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");

// number zero
const zero = 0;

// team-names
const teamName1 = document.querySelector(".tm-nm-1");
const teamName2 = document.querySelector(".tm-nm-2");


// teams
const team1 = document.querySelector("#team1");
const team2 = document.querySelector("#team2");

var tnum1 = 0;
var tnum2 = 0;

// Add event litsener to increase score buttons
// This will make it so that when we click on
// A button it will call a function and in that
// We are going to put the code to increase the score

// score increase button 1
scoreBtn1.addEventListener("click", function () {
    // get score 1 value and put it in a different variable
    // ( num1 )
    num1 = score1.innerText;
    // increase that value using a different variable
    // that has the same value
    num1++;

    // give that increased value to score1
    score1.innerText = num1;

});

// score increase button 2
scoreBtn2.addEventListener("click", function () {
    // get score 2 value and put it in a different variable
    // ( num2 )
    num2 = score2.innerText;
    // increase that value using a different variable
    // that has the same value
    num2++;

    // give that increased value to score1
    score2.innerText = num2;

});

// add eventlitsener to reset button
resetBtn.addEventListener("click", function () {
    
    // alert user that he is now reseting the scores
    if (score1.innerText > score2.innerText) {
        swal("team1 won and team 2 has lost. You are now reseting the scores.", {
            button: "Got It!",
        });
    } else if (score1.innerText < score2.innerText) {
        swal("team1 lost and team 2 has won. You are now reseting the scores.", {
            button: "Got It!",
        });
    } else {
        swal("It's a tie! niether team won. You are now reseting the scores.", {
            button: "Got It!",
        });
    }

    
    // reset score 1 value and score 2 value to zero
    score1.innerText = 0;
    score2.innerText = 0;

});

// add event listeners to undo buttons
undo1.addEventListener("click", function () {

    // check if score1 value is greater than 0 and if
    // true only than minus points if not than alert
    // user that you cannot get negative points
    if (score1.innerText > 0) {

        unNum1 = score1.innerText;

        unNum1--;

        score1.innerText = unNum1;

    } else {
        
        console.log("cannot go beyond zero");

    }

});

undo2.addEventListener("click", function () {
    
    // check if score1 value is greater than 0 and if
    // true only than minus points if not than alert
    // user that you cannot get negative points
    if (score2.innerText > 0) {

        unNum2 = score2.innerText;

        unNum2--;

        score2.innerText = unNum2;
        
    } else {

        console.log("cannot go beyond zero");

    }

});


function teamchange1() {
    var inum1;
    var teamName;
    var inums1 = ["../assets/images/arsenal.png", "../assets/images/liverpool.png", "../assets/images/manCity.png", "../assets/images/manUnited.png"];
    var teamNames = ["arsenal", "liverpool", "manchester city", "manchester united"];


    if (tnum1 == 0) {
        tnum1 += 1;
        teamName = teamNames[0];
        inum1 = inums1[0];
    } else if (tnum1 == 1) {
        tnum1++;
        teamName = teamNames[1];
        inum1 = inums1[1];
    } else if (tnum1 == 2) {
        tnum1++;
        teamName = teamNames[2];
        inum1 = inums1[2];
    } else if (tnum1 == 3) {
        tnum1 = 0;
        teamName = teamNames[3];
        inum1 = inums1[3];
    }
    team1.src = inum1;
    teamName1.innerText = teamName;
}

function teamchange2() {
    var inum2;
    var inums2 = ["../assets/images/arsenal.png", "../assets/images/liverpool.png", "../assets/images/manCity.png", "../assets/images/manUnited.png"];
    var teamName;
    var teamNames = ["arsenal", "liverpool", "manchester city", "manchester united"];

    if (tnum2 == 0) {
        tnum2 += 1;
        inum2 = inums2[0];
        teamName = teamNames[0];
    } else if (tnum2 == 1) {
        tnum2++;
        inum2 = inums2[1];
        teamName = teamNames[1];
    } else if (tnum2 == 2) {
        tnum2++;
        inum2 = inums2[2];
        teamName = teamNames[2];
    } else if (tnum2 == 3) {
        tnum2 = 0;
        inum2 = inums2[3];
        teamName = teamNames[3];
    }
    team2.src = inum2;
    teamName2.innerText = teamName;
}

team1.addEventListener("click", teamchange1);
team2.addEventListener("click", teamchange2);
