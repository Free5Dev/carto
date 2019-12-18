import { Injectable } from '@angular/core';
import { MapService } from './map.service';
import View from 'ol/View';
import ImageLayer from 'ol/layer/Image';
import ImageWMS from 'ol/source/ImageWMS';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';

@Injectable({
  providedIn: 'root'
})
export class IdentificateurService {


  constructor(private mapService: MapService) {
    

  }
  // 
  getView = new View({
    center: [0, 0],
    zoom: 1
  });
  
  getWmsSource = new ImageWMS({
    url: 'https://ahocevar.com/geoserver/wms',
    params: {'LAYERS': 'ne:ne'},
    serverType: 'geoserver',
    crossOrigin: 'anonymous'
  });
  // getSingleClick(){
    getSingleClick(evt){
      document.getElementById('info').innerHTML = '';
      var viewResolution = this.getView().getResolution();
      var url = this.getWmsSource().getFeatureInfoUrl(
        evt.coordinate, viewResolution, 'EPSG:3857',
        {'INFO_FORMAT': 'text/html'});
      if (url) {
        fetch(url)
          .then(function (response) { return response.text(); })
          .then(function (html) {
            document.getElementById('info').innerHTML = html;
          });
      }
    };
  // }
  // getPointerMove(){
    getPointerMove(evt){
      if (evt.dragging) {
        return;
      }
      var pixel = this.mapService.getMap().getEventPixel(evt.originalEvent);
      var hit =  this.mapService.getMap().forEachLayerAtPixel(pixel, function() {
        return true;
      });
      this.mapService.getMap().getTargetElement().style.cursor = hit ? 'pointer' : '';
    };

}
