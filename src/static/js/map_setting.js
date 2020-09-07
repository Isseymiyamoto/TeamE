//watanabe 2020/09/04
//Meisho.K 2020/09/07
function toggleStreetView() {
    const toggle = panorama.getVisible();
    
    if (toggle == false) {
    panorama.setVisible(true);
    showMarkers();
    } else {
    panorama.setVisible(false);
    hideMarkers();
    }
}
function togglePins() {
    const toggle = panorama.getVisible();

    //パノラマ状態じゃないときは変更しない
    if(toggle == false){
        return;
    }

    if (PinIsVisible == false) {
      showMarkers();
      PinIsVisible = true;
    } else {
      hideMarkers();
      PinIsVisible = false;
    }
  }

function setMapOnAll(map, markers){
    for(let i=0; i<markers.length; i++){
        markers[i].setMap(map);
    }
}

//markerを非表示にする
function hideMarkers(markers){
    setMapOnAll(null, markers);
}
//markerを表示する
function showMarkers(markers){
    setMapOnAll(map, markers);
}

//markerを消去する
function deleteMarkers(markers){ 
    hideMarkers();
    markers=[];
}