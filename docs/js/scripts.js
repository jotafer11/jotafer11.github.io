

const bouncy = document.querySelector("#bouncy");

bouncy.addEventListener("load", toggleRubberBand);

function toggleRubberBand(e){
  bouncy.classList.add("bouncing");
  bouncy.addEventListener("animationend", ()=>{
    bouncy.classList.remove("bouncing");
  });
}






/*

$(window).load(function() {
    $('#bouncy').effect("bounce", {
        times: 4,
        distance: 200
    }, 400).click(function() {
        $(this).effect("bounce", {
            times: 4,
            distance: 200
        }, 400);
    });
})


*/