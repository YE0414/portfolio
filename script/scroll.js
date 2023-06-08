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
        markers: true,
        scrub: true,
      },
    });
  });
  const wts = gsap.utils.toArray(".work__title");
  wts.forEach((wt) => {
    gsap.to(wt, {
      transform: "translateY(0px)",
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: wt,
        start: "100% 100%",
        end: "100% 50%",
        markers: true,
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
        markers: true,
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
        markers: true,
        scrub: true,
      },
    });
  });
});
