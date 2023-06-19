$(function () {
  $(".top").click(function () {
    $("html, body").animate({ scrollTop: "0px" }, 800);

    return false; //새로고침 방지
  });

  const wst = gsap.utils.toArray(".works__title");
  // console.log(wst);
  wst.forEach((wt) => {
    gsap.to(wt, {
      transform: "translateY(0px)",
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: wt,
        start: "0% 70%",
        end: "100% 80%",
        // markers: true,
        scrub: true,
      },
    });
  });
  const wrk = gsap.utils.toArray(".work");
  wrk.forEach((wk) => {
    gsap.to(wk, {
      filter: "grayscale(1)",
      duration: 1,
      scrollTrigger: {
        trigger: wk,
        start: "100% 100%",
        end: "100% 50%",
        // markers: true,
        scrub: true,
      },
    });
  });
  const wts = gsap.utils.toArray(".work__title");
  wts.forEach((wt) => {
    gsap.to(wt, {
      transform: "translateX(0px)",
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: wt,
        start: "100% 100%",
        end: "100% 50%",
        // markers: true,
        scrub: true,
      },
    });
  });
  const wtx = gsap.utils.toArray(".work__text");
  wtx.forEach((wx) => {
    gsap.to(wx, {
      transform: "translateY(0px)",
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: wx,
        start: "100% 100%",
        end: "100% 50%",
        // markers: true,
        scrub: true,
      },
    });
  });
  const wlogos = gsap.utils.toArray(".work__logo");
  wlogos.forEach((wl) => {
    gsap.to(wl, {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: wl,
        start: "100% 100%",
        end: "100% 50%",
        // markers: true,
        scrub: true,
      },
    });
  });
  $(".contact__email").mouseover(function(){
    $(".contact__text--highlight").css("color", "yellow");
    $(".contact__email").addClass('animate__swing');
  });
  $(".contact__email").mouseout(function(){
    $(".contact__email")  .removeClass('animate__swing');
    $(".contact__text--highlight").css("color", "white");
  });
  $(".top").mouseover(function(){
    $(".top").addClass('animate__bounce');
  });
  $(".top").mouseout(function(){
    $(".top").removeClass('animate__bounce');
  });
  let modal = `
  <div class="modal">
      <div class="modal__banner">
        <h3>Oops!</h3>
        <p class="modal__txt">
        아직 모바일 버전이 준비되지 않았어요! 빠른 시일 내에 작업하도록 하겠습니다.
        </p>
        <p class="modal__cbox">
          <input type="checkbox" id="modal__ch">
          <label for="modal__ch">일주일간 창 보지 않기</label>
          <input type="button" value="닫기" class="modal__close">
        </p>
      </div>
    </div>`;
    $('body').append(modal);
    $('.modal>.modal__banner>p>.modal__close').click(function(){
      $('.modal').hide();
    });
  });
// 쿠키만들기
$(function() {
  if($.cookie('popup')=='none'){
      $('.modal').hide();
  }

function closePop() {
  let ch = $('#modal__ch');
  if(ch.is(':checked')) {
    alert('체크박스');
      $.cookie('popup', 'none', {expires:7, path:'/'});
  }
  $('.modal').hide();
}

$('.modal>.modal__banner>p>label').click(function(){
  $.cookie('popup', 'none', {expires:7, path:'/'});

$('.modal a').click(function(){
  $('.modal').fadeOut();
})

});

$('.modal>.modal__banner>p>label').click(function(){
  closePop();
})

$('.modal a').click(function(){
  closePop();
});
});
