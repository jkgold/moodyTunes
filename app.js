
    $(document).ready(function(){
      $('.parallax').parallax();
    });
$('button').on('click', function(event){
  event.preventDefault();
  var $userInput = $('input');
  if ($userInput.val()===""){
    console.log("Yo Mama");
    return;
  }
})
