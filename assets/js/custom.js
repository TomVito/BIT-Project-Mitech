// sidebar

document.getElementById("atidarymoNuoroda").onclick = function () {
  var popup = document.getElementById("offcanvasAtidarymas");

  if (popup.classList.contains("open") == false) {
    popup.classList.add("open");
  } else {
    popup.classList.remove("open");
  }
};

// counter js

/*

const counters = document.querySelectorAll(".value");
const speed = 500;

counters.forEach((counter) => {
  const animate = () => {
    const value = +counter.getAttribute("number");
    const data = +counter.innerText;

    const time = value / speed;
    if (data < value) {
      counter.innerText = Math.ceil(data + time);
      setTimeout(animate, 1);
    } else {
      counter.innerText = value;
    }
  };

  animate();
});

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

  /*
 
  //show or hide arrow up on scrool 'simple variantas is net'

  jQuery(document).scroll(function () {
    var height = jQuery(this).scrollTop();
    if (height > 1500) {
      jQuery("#scroll-top").addClass("show");
    }
    if (height < 750) {
      jQuery("#scroll-top").removeClass("show");
    }
  });
  
  */
  
  //jq counter

  /*

  jQuery('.counter').each(function () {
    var $this = jQuery(this),
      countTo = jQuery(this).data('count');

    jQuery({ countNum: 0 }).animate({
        countNum: countTo,
      }, {
        duration: 8000,
        easing: 'linear',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        }

      });

  });

  */

  //lango auksctis 

  jQuery(window).on('scroll', function() {
    let virsus          = jQuery(document).scrollTop();
    let puslapioAukstis = jQuery(document).height();
    let langoAukstis    = jQuery(window).height();
    let bendras         = virsus + langoAukstis;
   
    //console.log(virsus);
    //console.log(puslapioAukstis);
    //console.log(langoAukstis);
    ///console.log(bendras);

    //add or remove class when scrolling

    if(bendras == puslapioAukstis) {
      jQuery('#scroll-top').addClass('show');
    } 
  
    if(virsus + langoAukstis < puslapioAukstis - 800) {
      jQuery('#scroll-top').removeClass('show');
    }
  
    //counter pasiekus div

    let counter = jQuery('.counter-wrap').position().top;

    let uzsikrove = false;

    if(((virsus + langoAukstis) +300) >= counter) {

      if(!uzsikrove) {

        jQuery('.counter').each(function () {
        var $this = jQuery(this),
          countTo = jQuery(this).data('count');
    
        jQuery({ countNum: 0 }).animate({
            countNum: countTo,
          }, {
            duration: 3000,
            easing: 'linear',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            },
    
          });
    
      });
      
    }

    uzsikrove = true;
    
    }

  });

});

function randomSkaicius(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomString(length) {

  let randomabecele = '';
  let abecele = 'abcdefghijklmnopqrstuvwxyz';

  for ( let i = 0; i < length; i++ ) {

    randomabecele += abecele.charAt( Math.floor( Math.random() * abecele.length) );

  }

  return randomabecele;

}

let masyvas = [];



for(let i = 0; i < 15; i++) {

  let objektai = {
  
    miestas: randomString(10),
    adresas: randomString(15),
    likutis: randomSkaicius(1, 99)
  
    }

    masyvas.push(objektai);

}

console.log(masyvas);

document.querySelector('.panel-container').innerHTML += '<table id="nauja_lentele" class="paskutinelentele">' 
                                                      + '<thead>' 
                                                      + '<th>Miestas</th>' 
                                                      + '<th>Adresas</th>' 
                                                      + '<th>Prekių likutis</th>' 
                                                      + '</thead>' 
                                                      + '<tbody>' 
                                                      + '</tbody>' 
                                                      + '</table>';

let paskutine_lentele = document.querySelector('.paskutinelentele > tbody');

for(let i = 0; i < masyvas.length; i++) {

  paskutine_lentele.innerHTML += '<tr><td>' + masyvas[i]['miestas'] + '</td>' + '<td>' + masyvas[i]['adresas'] + '</td>' + '<td>' + masyvas[i]['likutis'] + '</td>';
  
  }
