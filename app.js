
    $(document).ready(function(){
      $('#btn').on('click', function(event){
        event.preventDefault();

        function addElement(){
          var newDiv = document.createElement("iframe");
          $(".inner").append(newDiv);
          newDiv.setAttribute("src", "https://embed.spotify.com/?uri=/open.spotify.com/artist/");
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

       console.log(playlistTopFive);
       var removeUrl = 'https://open.spotify.com/artist/';
       var returnKey =
      playlistTopFive.replace(removeUrl, '');
      console.log(returnKey);
      console.log();
      function cutOffUrl (removeUrl, playlistTopFive){
        var returnKey =
       playlistTopFive.replace(removeUrl, '');
      //  console.log(returnKey);
      }
      // cutOffUrl();
        })

      })
  });
