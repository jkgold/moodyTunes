
    $(document).ready(function(){
      //  $('.parallax').parallax();
      $('#btn').on('click', function(event){
        event.preventDefault();
        var artistId= " ";
// <iframe src="https://embed.spotify.com/?uri=spotify%3Auser%3Aqlmhuge%3Aplaylist%3A6Df19VKaShrdWrAnHinwVO" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
        function addElement(){
          var newDiv = document.createElement("iframe");
          $(".inner").append(newDiv);
          newDiv.setAttribute("src", 'https://embed.spotify.com/?uri=/open.spotify.com/artist/' + 'width="300" height="380" frameborder="0" allowtransparency="true"' + addArtistIdToDiv());
          console.log(newDiv);
        }
        // addElement();

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
      // console.log(returnKey);
       artistId = returnKey;
      // console.log(artistId);
      var newDiv = document.createElement("iframe");
      $(".inner").append(newDiv);
      newDiv.setAttribute("src", "https://embed.spotify.com/?uri=/open.spotify.com/artist/" + artistId);

      function addArtistIdToDiv () {
        return artistId;
      }
      console.log(addArtistIdToDiv());


        })

      })
  });
