'use strict '
let vistor =prompt('Please enter your name ');
alert('welcome ' + vistor + ' now i will ask you some question about me to how much you realy now me ');
let q1 =prompt('The owner of this site is Laith , Yes OR No').toLowerCase();
console.log (q1)
if (q1 =="yes" || q1 =='y'){
    alert('well done ');
    
}else{
    alert('Sorry , you need to search again ');
};
let q2 =prompt('Do i like BMW cars, yes OR no ').toLowerCase();
console.log (q2)
if (q2 =="yes" || q2 =='y'){
    alert(' wait you will see my favorite one ');
}else{
    alert('Sorry , but i love BMW cars ');
};
let q3 =prompt('How old am i 23 or not ').toLowerCase();
console.log (q3)
if (q3 =="yes" || q3 =='y'){
    alert('  I appreciate that you know my age  ');
    
}else{
    alert('you will not invite to my birthday hahaha');
};
let q4 =prompt('Do i like mansaf ').toLowerCase();
console.log (q4)
if (q4 =="yes" || q4 =='y'){
    alert('it\'s my favorite one  ');
    
}else{
    alert('Are you sure ,There is no one dosen\'s like mansaf ');
};
let q5 =prompt('Did i graduated from JUST university').toLowerCase();
console.log (q5)
if (q5 =="yes" || q5 =='y'){
    alert('NO you are wrong it\'s YARMOUK ');
    
}else{
    alert('That is great  ');
};
alert('Thank you  ' + vistor + ' ,now i will show you the true fact about me  ');
