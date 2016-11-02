
    $(document).ready(function(){
      // $('.parallax').parallax();


      $('#btn').on('click', function(event){
        event.preventDefault();

        function addElement(){
          var newDiv = document.createElement("iframe");
          $(".inner").append(newDiv);
          newDiv.setAttribute("src", "https://embed.spotify.com/?uri=/open.spotify.com/artist/3NZE8jDD2cCzd4vUyZ5CQQ");
          console.log(newDiv);
        }
        addElement();

        var userInput = $("#query").val();
        for (var i = 0; i < userInput.length; i++){
          if(userInput[i] === " "){
            userInput = userInput.split(' ').join("+");

          }

          }


        var $userApi = "https://api.spotify.com/v1/search?q=" + userInput + "%20&type=artist";


      $.getJSON($userApi)
      .then(function(data){
        var itemsValue = data;
        var topFive = itemsValue.artists.items[0].external_urls;
        var playlistTopFive = topFive.spotify;
        // console.log(playlistTopFive);
         var stringPlayListTopFive = JSON.stringify(playlistTopFive);
         // only isolates the first number
         var regex =/\d/;
         console.log(stringPlayListTopFive.match(regex));



      })

      })
});



//     $(document).ready(function(){
//       // $('.parallax').parallax();
//       // var Spotify = require('spotify-web-api-js');
//       // var s = new Spotify();
//       // var spotifyApi = new SpotifyWebApi();
//       // spotifyApi.setAccessToken('<5725c2b0a5e24169b8d5381c4e17af67>');
//       //     "target_uri": "spotify:track:3SVAN3BRByDmHOhKyIDxfC",
//
//       $('#btn').on('click', function(event){
//         event.preventDefault();
//
//
//         var userInput = $("#query").val();
//         for (var i = 0; i < userInput.length; i++){
//           if(userInput[i] === " "){
//             userInput = userInput.split(' ').join("+");
//
//           }
//
//           }
//
//
//         var $userApi = "https://api.spotify.com/v1/search?q=" + userInput + "%20&type=artist";
//         console.log($userApi);
//         // console.log($('external_urls:').val());
//         // console.log($userApi.artists);
//
//           $.getJSON($userApi)
//         .then(function(data){
//           // var itemsValue = data;
//           console.log(itemsValue.external_urls);
//           // console.log($("external_urls"));
//
//         })
//
//       })
// });
