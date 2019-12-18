import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';
import View from 'ol/View';
import ImageLayer from 'ol/layer/Image';
import ImageWMS from 'ol/source/ImageWMS';


@Component({
  selector: 'app-wms',
  templateUrl: './wms.component.html',
  styleUrls: ['./wms.component.css']
})
export class WmsComponent implements OnInit {
  map;
  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.map= this.mapService.getMap();
    this.map.addLayer(this.getWmsLayer());
  }
  getWmsSource(){
    return new ImageWMS({
      url: 'https://ahocevar.com/geoserver/wms',
      params: {'LAYERS': 'ne:ne'},
      serverType: 'geoserver',
      crossOrigin: 'anonymous'
    });
  }
  getWmsLayer(){
    return new ImageLayer({
      name: 'WMS',
      source: this.getWmsSource(),
      visible: false
    });
  }

}
