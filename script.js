import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import ImageLayer from 'ol/layer/Image';
import ImageWMS from 'ol/source/ImageWMS';


var wmsSource = new ImageWMS({
    url: 'https://ahocevar.com/geoserver/wms',
    params: {'LAYERS': 'ne:ne'},
    serverType: 'geoserver',
    crossOrigin: 'anonymous'
  });
  
  var wmsLayer = new ImageLayer({
    source: wmsSource
  });
  
  var view = new View({
    center: [0, 0],
    zoom: 1
  });


const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 0
  })
});

// event singleClick 
map.on('singleclick', function(evt) {
    document.getElementById('info').innerHTML = '';
    var viewResolution = view.getResolution();
    var url = wmsSource.getFeatureInfoUrl(
      evt.coordinate, viewResolution, 'EPSG:3857',
      {'INFO_FORMAT': 'text/html'});
    if (url) {
      fetch(url)
        .then(function (response) { return response.text(); })
        .then(function (html) {
          document.getElementById('info').innerHTML = html;
        });
    }
  });

// event pointerMouve
map.on('pointermove', function(evt) {
    if (evt.dragging) {
      return;
    }
    var pixel = map.getEventPixel(evt.originalEvent);
    var hit = map.forEachLayerAtPixel(pixel, function() {
      return true;
    });
    map.getTargetElement().style.cursor = hit ? 'pointer' : '';
});
