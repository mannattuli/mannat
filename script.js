/*Toggle projects hide show
let buttonShow = document.querySelector(".hide");
let toggleItem = document.querySelectorAll(".toggle-item");
let hidden = document.querySelector(".hidden");

for (let i = 0; i < toggleItem.length; i++) {
  buttonShow.addEventListener("click", function () {
    toggleItem[i].classList.toggle("hidden");
    if (toggleItem[i].classList.contains("hidden")) {
      buttonShow.text = "show";
    } else {
      buttonShow.text = "hide";
    }
  });
}*/

/*Dark mode*/
$(".change").on("click", function () {
  if ($("body").hasClass("dark")) {
    $("body").removeClass("dark");
    $(".change").removeClass("dark");
    $(".toggle-item").removeClass("darkItem");
    $(".toggle-itemBlog").removeClass("dark-item11");
    $(".toggle-itemBlog").removeClass("darkItem");
    $(".change").text("Light");
  } else {
    $("body").addClass("dark");
    $(".change").addClass("dark");
    $(".toggle-item").addClass("darkItem");
    $(".toggle-itemBlog").addClass("darkItem");
    $(".toggle-itemBlog").addClass("dark-item11");
    $(".change").text("Dark");
  }
});

/*Toggle blog hide*/
let buttonShowBlog = document.querySelector(".hide-blog");
let toggleItem1 = document.querySelectorAll(".toggle-itemBlog");

for (let i = 0; i < toggleItem1.length; i++) {
  buttonShowBlog.addEventListener("click", function () {
    toggleItem1[i].classList.toggle("hidden");
    if (toggleItem1[i].classList.contains("hidden")) {
      buttonShowBlog.text = "show";
    } else {
      buttonShowBlog.text = "hide";
    }
  });
}

/*Show All*/
let dot = document.querySelector(".dot");
let toggleItem = document.querySelectorAll(".toggle-item");

dot.addEventListener("click", function () {
  for (let i = 0; i < toggleItem.length - 1; i++) {
    toggleItem[i].classList.toggle("hidden");
  }
});

/*Remove tweets when no space*/
let aut = document.querySelector(".author-box");

if (window.matchMedia("(max-width: 700px)").matches) {
  /*The viewport is less than, or equal to, 700 pixels wide*/
  console.log("The viewport is less than, or equal to, 700 pixels wide");
  aut.classList.add("hidden");
} else {
  /*The viewport is greater than 700 pixels wide*/
  console.log("The viewport is greater than 700 pixels wide");
  aut.classList.remove("hidden");
}
