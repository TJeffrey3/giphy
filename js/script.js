// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
        var term = $("input").val();
    $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?q="+term+"&rating=pg&api_key=dc6zaTOxFJmzC",
        method: "GET",
        success: function(response){
           var image = response.data[0].images.original.url;
            $("#pic").append("<img src=" + image + ">");
           
        response.data.forEach(function(arrayElement) {
            var image = arrayElement.images.original.url;
            $("#pic").append(`<a href = "${image}">
            <img src= "${image} ">
            </a>
            `);
        }); 

            
        }
            
        
        
            
        });
  
  
});

