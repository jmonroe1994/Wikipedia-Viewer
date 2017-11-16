$(document).ready(function(){
    
  //When search button is clicked, take user input, use wikipedia api and output the results in a list.
  
  $("#searchBtn").click(function(){
       
  //clear the results for the next entry
    
  $("#results").empty();
  //Get user input from search box
  var search = $("#search").val();  
  console.log(search);
    
  //Open search action help https://en.wikipedia.org/w/api.php?action=help&modules=opensearch
    
  var wikiSearch = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&titles=&utf8=1&srsearch=" + search + "&srlimit=15";
    
  /* Make JSON/AJAX call to wikipedia */
  
  $.ajax({
        url: wikiSearch,
        dataType: "jsonp", //indicates that its a jsonp request.
        success: function(response) {
            for (var i = 0; i < 10; i++) {
                $("#results").append("<div class='box'></div>");
                $(".box:last-child").append('<a class="title" target="_blank" href="https://en.wikipedia.org/wiki/' + response.query.search[i].title + '">' + response.query.search[i].title + '</a>');
                $(".box:last-child").append('<p id="demo">' + response.query.search[i].snippet + '</p>');
            }
        }
    });
  });
});