$(document).ready(function () {
  function createSceneVertical(
    trigger,
    node = trigger,
    jarak = 0.1,
    classisian = "animate",
    durasi = "88%"
    // deskripsi = "fade scene"
  ) {
    let initial = new ScrollMagic.Scene({
      triggerElement: trigger, //tempat trigger
      duration: durasi, //responsive
      triggerHook: 0.75 - jarak,
    })
      .setClassToggle(node, classisian) // add class to node
      // .addIndicators({ name: deskripsi }) // this requires plugin
      .addTo(scrollmagicvertical);
  }
  function createSceneHorizontal(
    trigger,
    node = trigger,
    jarak = 0.1,
    classisian = "animate"
  ) {
    let initial = new ScrollMagic.Scene({
      triggerElement: trigger, //tempat trigger
      duration: "50%", //responsive
      triggerHook: 0.5 - jarak,
    })
      .setClassToggle(node, classisian) // add class to node
      // .addIndicators({ name: "fade scene" }) // this requires plugin
      .addTo(scrollmagichorizontal);
  }
  function initscenesimple(
    classutama = ".null",
    adaanak = false,
    vertical = true
  ) {
    $(classutama).each(function () {
      if (adaanak == false) {
        if (vertical == true) {
          createSceneVertical(this);
        } else {
          createSceneHorizontal(this);
        }
      } else {
        if (vertical == true) {
          $(this.children).each(function () {
            createSceneVertical(this);
          });
        } else {
          $(this.children).each(function () {
            createSceneHorizontal(this);
          });
        }
      }
    });
  }

  //init scrollmagic
  var scrollmagichorizontal = new ScrollMagic.Controller({ vertical: false });
  var scrollmagicvertical = new ScrollMagic.Controller({ vertical: true });

  // Scene SectionHome
  initscenesimple(".section-home", true);

  // Scene SectionTabel
  initscenesimple(".section-tabel", true);

  // Scene Footer
  $(".footer").each(function () {
    $(this.children).each(function () {
      $(this.children).each(function () {
        createSceneVertical(this.parentElement, this, -0.15, "animate", "100%");
      });
    });
  });
});
