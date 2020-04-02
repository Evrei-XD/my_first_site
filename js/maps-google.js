 



    var map;
    $(document).ready(function(){
 
      map = new GMaps({
        div: '#gmap_basic',
        lat: 56.22894,
            lng: 38.06162,
 
 
      });
      map.addMarker({
         lat: 56.22894,
            lng: 38.06162,
        title: 'Marker with InfoWindow',
        infoWindow: {
          content: '<p class="map-title">ПЕЙНТБОЛЬНЫЙ КЛУБ ТОП ГАН</p>'
        }
      });
    });
  