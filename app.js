
    $(document).ready(function(){
      // $('.parallax').parallax();

      $('#btn').on('click', function(event){
        event.preventDefault()
        console.log('clicked!!');
        event.preventDefault();
        var $userInput = $('input');
        if ($userInput.val()===""){
          console.log("Yo Mama");
          return;
        }
        var $userApi = "https://api.spotify.com/v1/search?q=radiohead%20&type=artist";
        // // $userApi += $userInput.val();
        $.getJSON($userApi)
        .then(function(data){
          console.log('data=======',data);
        })
v
      })
});
