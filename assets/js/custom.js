// sidebar

document.getElementById("atidarymoNuoroda").onclick = function () {
  var popup = document.getElementById("offcanvasAtidarymas");

  if (popup.classList.contains("open") == false) {
    popup.classList.add("open");
  } else {
    popup.classList.remove("open");
  }
};

// close cookies

document.getElementById("sutinku").onclick = function () {
  var cookies = document.getElementById("slapukai");

  cookies.classList.add("closed");
};

jQuery(document).ready(function () {
  jQuery("#btn-hero").click(function () {
    jQuery(".btn2").addClass("btn2-hero-show");
    jQuery("#img-hero").animate({
      opacity: 0.5,
    });
    jQuery("#img-under").animate({
        opacity: 0.5,
      });
  });

  jQuery("#btn2-hero").click(function () {
    jQuery(".btn2").removeClass("btn2-hero-show");
    jQuery("#img-hero").animate({
      opacity: 1,
    });
    jQuery("#img-under").animate({
        opacity: 1,
      });
  });
});
