import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MapService } from '../map.service';
import Stamen from 'ol/source/Stamen';
import { LayerModel } from '../layer/model/layer-model.model';
import { MapModel } from './map-model.model';
import { LayerCatalogueServiceService } from '../layer/layer-catalogue-service.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: [
    '../../../node_modules/ol-ext/dist/ol-ext.css',
    '../../../node_modules/ol/ol.css',

    './map.component.css',
  ],
  encapsulation: ViewEncapsulation.None 
})
export class MapComponent  implements OnInit  {
  map;
  
  constructor(private mapService: MapService) {

   }

  ngOnInit() {
    this.map = this.mapService.getMap();
   
    return this.map;
  }

}
