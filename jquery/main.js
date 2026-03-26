$(".dark-btn").click(
    function(){
  $(".box").toggleClass("dark");
  $(".container").toggleClass("dark");
}
);

$(".spin-btn").click(
    function(){
  $(".box").toggleClass("spin");
}
);

$(".reveal-btn").click(
    function(){

        $(".pickles").show();
        $(".reveal-btn").hide();

        // $(".pickles").css("display","block")

        // $(".pickles").addClass("reveal");
    }
);

// $(".pickles").draggable();
// $(".box").draggable();


$(".draggable").draggable({
    containment:".container", 
    scroll:false,
    snap:true
});



// $("button").click(
//     funtion(){
//         $(".box").toggleClass("spin");
//     }
// );

// document.querySelector(".box").classList.toggle("main");