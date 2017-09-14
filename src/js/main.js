let firstString, secondString, firstNumber, secondNumber, operator,
    operatorCount = 0,
    operators = ['-', '+'],
    div = `<div> Welcome to our game <br />Count numbers pls <br/><br/><br/>    
    <span id="mainDiv"></span>  =  <input id="clientNumber" type="number" placeholder="total?"><button onClick="findResult()">Result</button><div id="winnerString"></div></div>`;

function findResult() {
    // variables
    let clientNumber = document.getElementById("clientNumber"),
        winnerString = document.getElementById('winnerString'),
        resultFromUser = (parseInt(clientNumber.value)) ? parseInt(clientNumber.value) : null,
        summa = countNumber({firstNumber, secondNumber, operator});

    // clean html tags
    mainDiv.innerHTML = '';

    // get result of game VOID
    resultOfWinner(summa, resultFromUser);
    
    // game init
    let r = firstNumber / secondNumber;
        firstString = todayUTC();
        secondString = todayUTC();
        operator = mathOperator();
    
    firstNumber = parseInt(firstString.substring(firstString.length - 2, firstString.length));

    secondNumber = parseInt(secondString.substring(firstString.length - 4, firstString.length - 2));

    mainDiv.innerHTML += randomCase({firstNumber, secondNumber, operator});
    
    // clean result text
    setTimeout(clearResult, 2000);
}

function todayUTC() {
    return '' + Date.now();
}

function clearResult(){
    winnerString.innerText = ''
}

function mathOperator(){
    operatorCount ++;

    if ((operators.length === operatorCount)) {
        operatorCount = 0;
    }
    return operators[operatorCount];
}

function resultOfWinner(summa, resultFromUser){
    if(summa && summa === resultFromUser) {
        winnerString.innerText = 'WooW, you are right Krasavcheg';
    } else {
        winnerString.innerText = `Sorry Persik, RESULT IS = ${summa}`;
    }
}

function countNumber(args){
    let result;

    switch(operator) {
        case '-':
            result = firstNumber - secondNumber
            break
        case '+':
            result = firstNumber + secondNumber
            break
        case '*':
            result = firstNumber * secondNumber
            break
        default:
            result = firstNumber / secondNumber
    }
    return result;
}

document.body.innerHTML = div;
// tags on document
let mainDiv = document.getElementById('mainDiv');

// create case
function randomCase(args) {
    return `${args.firstNumber} ${args.operator} ${args.secondNumber}`
}
