// sidebar

document.getElementById("atidarymoNuoroda").onclick = function () {
  var popup = document.getElementById("offcanvasAtidarymas");

  if (popup.classList.contains("open") == false) {
    popup.classList.add("open");
  } else {
    popup.classList.remove("open");
  }
};

// close cookies panel

/*

document.getElementById("sutinku").onclick = function () {
  var cookies = document.getElementById("slapukai");

  cookies.classList.add("closed");
};

*/

// cookies

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 30);
    }
  }
}

//jQuery click function and animations

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

  //loading screen 'curtains'

  jQuery(document).ready(function () {
    jQuery(".left-part").animate({ width: "0px" });
    jQuery(".right-part").animate({ width: "0px" });

    setTimeout(function () {
      $(".animate-box").hide();
    }, 2000);
  });

  //show or hide arrow up

  jQuery(document).scroll(function () {
    var height = jQuery(this).scrollTop();
    if (height > 1500  ) {
      jQuery("#scroll-top").addClass("show");
    }
    if (height < 750) {
      jQuery("#scroll-top").removeClass("show");
    }
  });
});
