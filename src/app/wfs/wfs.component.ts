import { Component, OnInit } from '@angular/core';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {bbox as bboxStrategy} from 'ol/loadingstrategy';
import BingMaps from 'ol/source/BingMaps';
import VectorSource from 'ol/source/Vector';
import { MapService } from '../map.service';
import GeoJSON from 'ol/format/GeoJSON';
import {Stroke, Style} from 'ol/style';


@Component({
  selector: 'app-wfs',
  templateUrl: './wfs.component.html',
  styleUrls: ['./wfs.component.css']
})
export class WfsComponent implements OnInit {
  map;
  constructor(private mapService: MapService) { }

  ngOnInit() {
   this.map=  this.mapService.getMap();
    this.map.addLayer(this.getVector());

  }
  
  getVector(){
    return  new VectorLayer({
      name: 'WFS',
      source:  new VectorSource({
        format: new GeoJSON(),
        url: function(extent) {
          return 'http://localhost:8080/geoserver/ows?service=wfs&' +
            'version=1.0.0&request=GetFeature&typeName=nyc:tiger_roads&' +
            'outputFormat=application/json&srs=EPSG:4326&' +
            'bbox=' + extent.join(',') + ',EPSG:4326';
        },
        style: new Style({
          stroke: new Stroke({
            color: 'rgba(0, 0, 255, 1.0)',
            width: 2
          })
        }),  
        strategy: bboxStrategy
      })
    });
  }

}
