var nameURL = document.getElementById("nameValue");
var holder = document.getElementById("holder");
var choose = document.getElementById("choose");

let nameList = [];

let create = function () {
  nameList.push(nameURL.value);
  let holder1 = document.createElement("div");
  holder1.innerHTML = nameURL.value;
  holder.append(holder1);
};

let chosen = function () {
  let numberRandom = Math.trunc(Math.random() * nameList.length);
  let a = nameList[numberRandom];
  choose.textContent = a;
};
