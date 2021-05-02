'use strict '
let score = 0
let vistor = prompt('Please enter your name ');
alert('welcome ' + vistor + ' now i will ask you some question about me to how much you realy now me ');
function question1() {
    let q1 = prompt('The owner of this site is Laith , Yes OR No').toLowerCase();
    if (q1 == "yes" || q1 == 'y') {
        alert('well done ');
        score = score + 1;
    } else {
        alert('Sorry , you need to search again ');
    };
}
question1();
function question2()
{
let q2 = prompt('Do i like BMW cars, yes OR no ').toLowerCase();
if (q2 == "yes" || q2 == 'y') {
    alert(' wait you will see my favorite one ');
    score = score + 1;

} else {
    alert('Sorry , but i love BMW cars ');
};}
question2();
function question3()
{
let q3 = prompt('How old am i 23 or not ').toLowerCase();
if (q3 == "yes" || q3 == 'y') {
    alert('  I appreciate that you know my age  ');
    score = score + 1;

} else {
    alert('you will not invite to my birthday hahaha');
};}
question3();
function question4()
{
let q4 = prompt('Do i like mansaf ').toLowerCase();
if (q4 == "yes" || q4 == 'y') {
    alert('it\'s my favorite one  ');
    score = score + 1;

} else {
    alert('Are you sure ,There is no one dosen\'s like mansaf ');
};}
question4();
function question5()
{
let q5 = prompt('Did i graduated from JUST university').toLowerCase();
if (q5 == "yes" || q5 == 'y') {
    alert('NO you are wrong it\'s YARMOUK ');

} else if (q5 == "no" || q5 == "n") {
    alert('That is great  ');
    score = score + 1;

};
alert('Thank you  ' + vistor + ' ,now i will show you the true fact about me  ');
}
question5();
let totalAttemptsQ6 = 4;
let min = 1;
function question6()
{while (totalAttemptsQ6 != 0) {
    let univ = Number(prompt('What do you think i stay study in UNIVERSITY'))

    if (univ == 4) {
        alert('Exactly , you are right  ');
        score = score + 1;
        break;
    } else if (univ > 4) {
        alert('too high')
        totalAttemptsQ6 = totalAttemptsQ6 - min;
    } else if (univ < 4) {
        alert('too low');
        totalAttemptsQ6 = totalAttemptsQ6 - min;

    } else {
        alert('you must enter a number ');
        totalAttemptsQ6 = totalAttemptsQ6 - min;

    }
}
if (totalAttemptsQ6 == 0) {

    alert("Maximum number of attempts exceeded,The correct answer is 4");
}
}

question6();



// Quistion 7
function question7()
{
let car = ['kia', 'bmw', 'ford', 'mercedes'];
let userAnswer = prompt('what is my fav car?');
for (let i = 1; i <= 6; i++) {
    if (car.includes(userAnswer)) {
        console.log('yes that\'s one of them');
        score = score + 1;

        break;

    } else {
        alert('sorry it is not one them ');
        userAnswer = prompt('what is my fav car?');
    };
};
alert("This is the answers: kia, bmw, ford, mercedes");
}
alert('your final score is  ' + score);
