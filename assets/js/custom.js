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

/*

document.getElementById("sutinku").onclick = function () {
  var cookies = document.getElementById("slapukai");

  cookies.classList.add("closed");
};

*/

// jQuery animations

jQuery(document).ready(function () {
  jQuery("#sutinku").click(function () {
    jQuery("#slapukai").fadeOut(2000, function () {});
  });

  jQuery("#btn-hero").click(function () {
    jQuery(".btn2").addClass("btn2-hero-show");
    jQuery("#img-hero").animate({
      opacity: 0.5,
      left: "-=100px",
    });
    jQuery("#img-under").animate({
      opacity: 0.5,
    });
  });

  jQuery("#btn2-hero").click(function () {
    jQuery(".btn2").removeClass("btn2-hero-show");
    jQuery("#img-hero").animate({
      opacity: 1,
      left: "0px",
    });
    jQuery("#img-under").animate({
      opacity: 1,
    });
  });

  jQuery("#arrow1").click(function () {
    jQuery("#arrow1").animate(
      {
        bottom: "350px",
      },
      2000,
      "linear"
    );
  });

  jQuery("#arrow2").click(function () {
    jQuery("#arrow2").animate(
      {
        bottom: "175px",
        left: "-20px",
      },
      2000,
      "linear"
    );
  });

  jQuery("#arrow3").click(function () {
    jQuery("#arrow3").animate(
      {
        height: "250px",
        left: "+=220",
      },
      2000,
      "linear"
    );
  });
});
