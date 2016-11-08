
    $(document).ready(function(){ //line 56 match par
      //  $('.parallax').parallax();
      $('#btn').on('click', function(event){ //line 55 match par
        console.log("Hello world");
        event.preventDefault();



        function addElement(){ //line 14 match par
          var newDiv = document.createElement("iframe");
          $(".form").append(newDiv);
          var id = addArtistIdToDiv();
          newDiv.setAttribute("src", 'https://embed.spotify.com/?uri=/open.spotify.com/artist/' + addArtistIdToDiv ());
        } //line 9 match par



        addElement();
        var userInput = $("#query").val();
        for (var i = 0; i < userInput.length; i++){ // line 24 match
          if(userInput[i] === " "){ //line 22 match
            userInput = userInput.split(' ').join("+");
          } //line 20 match

        }// line 19 match


        var $userApi = "https://api.spotify.com/v1/search?q=" + userInput + "%20&type=artist";


      $.getJSON($userApi)
      .then(function(data){ //line 53 match
        var itemsValue = data;
        var topFive = itemsValue.artists.items[0].external_urls;
        var playlistTopFive = topFive.spotify;
        console.log(playlistTopFive);

       console.log(playlistTopFive);
       var removeUrl = 'https://open.spotify.com/artist/';
       var returnKey =
      playlistTopFive.replace(removeUrl, '');
      // console.log(returnKey);
       var artistId = returnKey;
       console.log(artisitId);
      // console.log(artistId);
      // var newDiv = document.createElement("iframe");
      // $(".inner").append(newDiv);
      // newDiv.setAttribute("src", "https://embed.spotify.com/?uri=/open.spotify.com/artist/" + artistId);




    }) //line 31 match

    function addArtistIdToDiv () { //line 49 match
      return artistId;
    } //line 47 match

  }) //line 3 match par




      //--Happy--//
      $('#happy').on('click', function(event){//line 74 match
        console.log("clicked");
        // console.log(event.preventDefault());

         function addElementHappy(){ //line 71 match
          var newDivHappy = document.createElement("iframe");
          $(".innerMixTape").append(newDivHappy);
          newDivHappy.setAttribute("src", "https://embed.spotify.com/?uri=spotify%3Auser%3Aqlmhuge%3Aplaylist%3A6Df19VKaShrdWrAnHinwVO");
          console.log(newDivHappy, "Hello world");
          var newDiv = document.createElement("iframe");
          $(".innerMixTape").append(newDivHappy);
          newDiv.setAttribute("src", "https://embed.spotify.com/?uri=spotify%3Auser%3Aqlmhuge%3Aplaylist%3A6Df19VKaShrdWrAnHinwVO");

        }//line 62 match
        addElementHappy()

      })//line 58 match

// sad
       $('#sad').on('click', function(event){ // line 92 match
         console.log("clicked");
      //   console.log(event.preventDefault());

         function addElementSad(){ //line 90 match
          var newDivSad = document.createElement("iframe");
           $(".innerMixTape").append(newDivSad);
          newDivSad.setAttribute("src", "https://embed.spotify.com/?uri=spotify%3Auser%3Aqlmhuge%3Aplaylist%3A6Df19VKaShrdWrAnHinwVO");
          console.log(newDivSad, "Hello world");
          var newDiv = document.createElement("iframe");
          $(".innerMixTapeSad").append(newDivSad);
          newDiv.setAttribute("src", "https://embed.spotify.com/?uri=spotify%3Auser%3Aqlmhuge%3Aplaylist%3A6Df19VKaShrdWrAnHinwVO");
      //
    } //line 8 match
         addElementSad();
       });//line 77 match
}); //line 1 match par
