let inputnumber = document.querySelector("#input-number");
let btncheck = document.querySelector("#check");
let btnagain = document.querySelector("#again");
let scorenum = document.querySelector("#scorenum");
let higherscore = document.querySelector("#highscore");
let hint = document.getElementById("hint");
let generatedN = document.querySelector(".generated-n");

let genNum = "";
let score = 0;
let setinput = "";
let highscore = 0;

let generatenum = () => {
  genNum = Math.trunc(Math.random() * 5) + 1;
  console.log(genNum); 
};

let checknum = () => {
  setinput = inputnumber.value;
  console.log(setinput);
  console.log(genNum);
  if (setinput == genNum) {
    console.log("matched number");
    score = 5;
    scorenum.classList.add("color-green");
    scorenum.innerHTML = score;
    highscore +=5
    higherscore.innerHTML = highscore;
    hint.innerHTML = "Correct";
    generatedN.innerHTML = genNum;
    hint.classList.add("color-green");
    inputnumber.value = "";
    generatenum();
  } else {
    if (setinput > genNum) {
      hint.innerHTML = "too High";
      hint.classList.add("color-red");
    } else {
      if (setinput < genNum) {
        hint.innerHTML = " too Low";
        hint.classList.add("color-red");
      }
    }
    score = -1;
    scorenum.classList.add("color-red");
    scorenum.innerHTML = score;
    highscore = highscore - 1;
    higherscore.innerHTML = highscore;
    inputnumber.value = "";
  }
  // inputnumber.value = "";
};

let again = () => {
  scorenum.innerHTML = 0;
  higherscore.innerHTML = 0;
  inputnumber.value = "";
  hint.innerHTML = "Start Guessing...";
  hint.classList.remove("color-green");
  hint.classList.remove("color-red");
};

generatenum();
btncheck.addEventListener("click", checknum);
btnagain.addEventListener("click", again);
