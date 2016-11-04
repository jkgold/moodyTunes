
    $(document).ready(function(){
      //  $('.parallax').parallax();
      $('#btn').on('click', function(event){
        console.log("");
        event.preventDefault();


        function addElement(){
          var newDiv = document.createElement("iframe");
          $(".inner").append(newDiv);
          newDiv.setAttribute("src", 'https://embed.spotify.com/?uri=/open.spotify.com/artist/' + addArtistIdToDiv() + 'width="300" height="380" frameborder="0" allowtransparency="true"' );
          console.log(newDiv);
        }



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
      //--Happy--//
      $('#happy').on('click', function(event){
        console.log("clicked");
        // console.log(event.preventDefault());

         function addElementHappy(){
          var newDivHappy = document.createElement("iframe");
          $(".inner").append(newDivHappy);
          newDivHappy.setAttribute("src", "https://embed.spotify.com/?uri=spotify%3Auser%3Aqlmhuge%3Aplaylist%3A6Df19VKaShrdWrAnHinwVO");
          console.log(newDivHappy, "Hello world");

        }
        addElementHappy();
      });
  });
