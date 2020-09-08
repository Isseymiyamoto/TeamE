//watanabe 2020/09/04
//Meisho.K 2020/09/07
function toggleStreetView() {
    const toggle = panorama.getVisible();
    
    if (toggle == false) {
    panorama.setVisible(true);
    showMarkers(markers);
    } else {
    panorama.setVisible(false);
    hideMarkers(markers);
    }
}
function togglePins() {
    const toggle = panorama.getVisible();

    //パノラマ状態じゃないときは変更しない
    if(toggle == false){
        return;
    }

    if (PinIsVisible == false) {
      showMarkers(markers);
      PinIsVisible = true;
    } else {
      hideMarkers(markers);
      PinIsVisible = false;
    }
  }

function setMapOnAll(map, markers){
    console.log('setmaponall',markers);
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
    console.log(markers);
    setMapOnAll(map, markers);
}

//markerを消去する
function deleteMarkers(markers){ 
    hideMarkers(markers);
    markers=[];
}