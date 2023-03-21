// The function for counts on an element
// The long way presented in lecture
var count1 = 0;
var countElement1 = document.querySelector("#count1");

console.log(countElement1);

function adduser1() {
  count1++;
  countElement1.innerText = count1 + " likes(s)";
  console.log(count1);
}

// Second User Function

var count2 = 0;
var countElement2 = document.querySelector("#count2");

console.log(countElement2);

function adduser2() {
  count2++;
  countElement2.innerText = count2 + " likes(s)";
  console.log(count2);
}

// Third User function
var count3 = 0;
var countElement3 = document.querySelector("#count3");

console.log(countElement3);

function adduser3() {
  count3++;
  countElement3.innerText = count3 + " likes(s)";
  console.log(count3);
}
