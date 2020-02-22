var begin = false;
var questionset = [{
    question: "What year was the very first model of the iPhone released?",
    choice: ["2006","2007","2008","2009"],
    answer: "2007"
},
{
    question: "What is the name of the man who launched eBay back in 1995?",
    choice: ["Pierre Omidyar","Pierre Conner","Pierre Lavertu","Pierre Chambrin"],
    answer: "Pierre Omidyar"
},
{
    question: "Which is Microsoft's first email service?",
    choice: ["Outlook","AOL","Hotmail","Mail.com"],
    answer: "Hotmail"
},
{
    question: "Who is often called the father of the computer?",
    choice: ["Charles Whitmore Babbage","Dennis Babbage","Bob Babbage","Charles Babbage"],
    answer: "Charles Babbage"
},
{
    question: "Who discovered penicillin?",
    choice: ["Alexander Fleming","Charles Fleming","Aleksandr Kogan","Alexander Steen"],
    answer: "Alexander Fleming"
},
{
    question: "What was Twitter's original name?",
    choice: ["twttr","twittr","twtter","twitr"],
    answer: "twttr"
},
{
    question: "Which natural disaster is measured with a Richter scale?",
    choice: ["Earthquakes","Tsunami","Sinkholes","Volcanic eruptions"],
    answer: "Earthquakes"
},
{
    question: "What is the symbol for potassium?",
    choice: ["Po","Kr","K","P"],
    answer: "K"
},
{
    question: "How many molecules of oxygen does ozone have?",
    choice: ["2","3","4","5"],
    answer: "3"
},
{
    question: "What name does deer meat go by?",
    choice: ["Veal","Chevon","Venison","Squab"],
    answer: "Venison"
}];
var score = 0;
var questionlist = [];
var quiznumb = 0
var buttons = document.getElementsByClassName("button");

// Make a random order list of number from 0 to 9
while (questionlist.length != 10) {
    var flag = true;
    rand = Math.round(Math.random() * 10);

    for (var j = 0; j < questionlist.length; j++) {
        if (questionlist[j] === rand || rand === 10) {
            flag = false;
        }
    }

    if (flag) {
        questionlist.push(rand);
    }
}

// when a button is clicked
function button(ans) {
    // check if quiz started
    if (begin === false) {
        begin = true;

        // show all buttons
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.visibility = "visible";
        }
        buttons[0].style.width = "45%";
        buttons[0].style.margin = "0";
        
        // load first question
        startquiz(quiznumb);
    } else {
        // check for answer
        check(ans, quiznumb);
    }

    quiznumb++;
}

// start quiz or next question
function startquiz(quiznum) {
    // change title to question
    document.getElementById("title").innerHTML = questionset[questionlist[quiznum]].question;

    // assign buttons with appropriate choices
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = questionset[questionlist[quiznum]].choice[i];
    }
}

// check answer then go to next question
function check(ans, quiz) {
    var chose = document.getElementsByClassName("button")[ans].innerHTML;

    // check if answer is right
    if (chose === questionset[questionlist[quiz - 1]].answer) {
        score += 100;
        document.getElementById("score").innerHTML = `Score:${score}/1000`;
    }

    if (quiz === 10) {
        // end quiz
        end();
    } else {
        // go to next question
        startquiz(quiz);
    }
}

// Ending
function end() {
    // hide buttons
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.visibility = "hidden";
    }
    // hide score at the bottom
    document.getElementById("score").style.visibility = "hidden";

    // show score in title
    document.getElementById("title").innerHTML = `Score : ${score} / 1000`;
}