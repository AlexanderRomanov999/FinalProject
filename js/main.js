document.querySelector(".form__auth-btn").onclick = function () {
  const userPassFirst = document.querySelector("#password1").value;
  const userPassSecond = document.querySelector("#password2").value;

  if (userPassFirst == "") {
    document.getElementById("password1").style = "border: 1px solid red";
    document.getElementById("password2").style = "border: 1px solid red";
  } else if (userPassFirst != userPassSecond) {
    document.getElementById("password1").style = "border: 1px solid red";
    document.getElementById("password2").style = "border: 1px solid red";
    return false;
  } else if (userPassFirst == userPassSecond) {
    document.getElementById("password1").style = "border: 1px solid green";
    document.getElementById("password2").style = "border: 1px solid green";
  }
  return true;
};



$(document).ready(function(){
  
  $('.burger').click(function(){
    $('.burger__list').toggleClass("burger__list--open");
  });

  $('.burger__list').click(function(){
    $('.burger__list').toggleClass("burger__list--open");
  });
  
  scroll();
  
  $(window).resize(function(){
    scroll();
  });

  function scroll() {
    $('.price__card').scrollLeft( (( 304 * 3 ) - ( $(window).width() - 30)) / 2 );
  }

});