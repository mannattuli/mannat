var code = document.getElementById("code");
var canvas = document.querySelector(".canvas");
var enter = document.getElementById("enter");

enter.addEventListener("click", function () {
  canvas.innerHTML = code.value;
});

//Template
var five = document.getElementById("5");

five.addEventListener("click", function () {
  code.value =
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta http-equiv="X-UA-Compatible" content="IE=edge">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>TitleName</title>\n</head>\n<body>\n</body>\n</html>';
});
