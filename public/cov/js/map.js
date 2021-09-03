function initMap() {
  // The location of Uluru
  var uluru = {lat: 26.373798, lng: -80.101921};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('content'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
    
};


function testmap() {

    let workspace = document.getElementById("content");
    workspace.innerHTML = ""; 
    let h1 = document.createElement('h1');
    let text = document.createTextNode("Placeholder of map of FAU");
    h1.appendChild(text);
    workspace.append(h1);
    
};

var domap = function()
{
    initMap(); 
}



