
    $(document).ready(function(){
      // $('.parallax').parallax();
      // var Spotify = require('spotify-web-api-js');
      // var s = new Spotify();
      // var spotifyApi = new SpotifyWebApi();
      // spotifyApi.setAccessToken('<5725c2b0a5e24169b8d5381c4e17af67>');
      //     "target_uri": "spotify:track:3SVAN3BRByDmHOhKyIDxfC",

      $('#btn').on('click', function(event){
        event.preventDefault();

        // console.log('clicked!!');
        // event.preventDefault();
        // var $userInput = $('input');
        // if ($userInput.val()===""){
        //   console.log("Yo Mama");
        //   return;
        // }
        // function multiWords(userName){
        var userInput = $("#query").val();
        for (var i = 0; i < userInput.length; i++){
          if(userInput[i] === " "){
            userInput = userInput.split(' ').join("+");
            console.log(userInput);
          }

          }
        // }
        // console.log("user input;", userInput);
        var $userApi = "https://api.spotify.com/v1/search?q=" + userInput + "%20&type=artist";
        console.log($userApi);

        // $.getJSON($userApi)
        // .then(function(data){
          // console.log('data=======',data);
        })

      // })
});
