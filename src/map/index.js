let map, popup, currentLngLat, currentMap, currentPopup, currentMarker;
let markers = [];
let isPopup = false;

//Create button
const reportBtn = document.createElement("button");
reportBtn.textContent = "report";

const removeBtn = document.createElement("button");
removeBtn.textContent = "remove";

function initMap() {
  const initPosition = { lat: 42.012430, lng: 23.095636 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: initPosition,
  });

  // This event listener calls addMarker() when the map is clicked.
  google.maps.event.addListener(map, "click", (event) => {
    currentLngLat = event.latLng.toJSON();
    currentMap = map;

    if (isPopup) {
      infoWindow.close();
    }

    infoWindow = new google.maps.InfoWindow({
      position: event.latLng,
      content: reportBtn
    });

    infoWindow.open(map);
    isPopup = true;
  });


  reportBtn.onclick = function addMarker() {
    // addMarker(event.latLng.toJSON(), currentMap);
    const infowindow = new google.maps.InfoWindow({
      content: removeBtn,
    });

    //Create marker
    const marker = new google.maps.Marker({
      position: currentLngLat,
      map,
      id:markers.length+1,
    });
    markers.push(marker);
  
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
      });
    });

    infoWindow.close();
  }


  removeBtn.onclick=function removeMarker(event){
    console.log(event.id)
  }
}

