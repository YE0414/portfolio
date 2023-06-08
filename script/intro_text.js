const elts = {
  text1: document.getElementById("text1"),
  text2: document.getElementById("text2"),
};

const texts = ["Welcome!", "Hope", "You", "Like", "It", ":D", ""];

const morphTime = 0.75;
const cooldownTime = 0.3;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
    cooldown = cooldownTime;
    fraction = 1;
  }

  setMorph(fraction);
}

function setMorph(fraction) {
  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;

  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";

  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}

function animate() {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
    if (shouldIncrementIndex) {
      textIndex++;
    }

    doMorph();
  } else {
    doCooldown();
  }
}
animate();

//마우스 커서
$(window).mousemove(function (e) {
  e.preventDefault();
  gsap.to(".cursor", {
    x: e.clientX,
    y: e.clientY,
    duration: 0.2,
  });
});
$("a").hover(
  function () {
    $(".cursor").addClass("cursor-over");
  },
  function () {
    $(".cursor").removeClass("cursor-over");
  }
);
//gnb 이동 옵션
$(function () {
  let gnb = $(".gnb__mnu");
  let ab = $(".gnb__mnu:nth-child(2)");
  $(window).scroll(function () {
    let sP = $(window).scrollTop();
    // console.log(sP);
  });
  gnb.click(function () {
    let n = $(this).index();
    $("html, body").animate(
      {
        scrollTop: $("section")
          .eq(n + 1)
          .offset().top,
      },
      500
    );
    return false;
  });
});
