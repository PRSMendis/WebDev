// alert("working")

// $("h1").css("color", "red" );

$(document).ready(function() {
  // $("h1").css("color", "red" );
  // $("button").text("Hey this is changed")

  // $(document).keypress(function(event) {
  //
  //   // $("h1").text(event.key)
  //   console.log(event.key)

  $(document).keypress(function(event) {

    // $("h1").text(event.key)
    $("h1").text(event.key);
  }) ;

$("h1").on("mouseover" , function() {
  $("h1").css("color", "red" );
});

$("h1").after("<button> new </button>")
$("h1").before("<button> new </button>")
$("h1").append("<button> new </button>")
$("h1").prepend("<button> new </button>")


  }) ;
