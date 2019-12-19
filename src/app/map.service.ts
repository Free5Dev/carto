import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

@Injectable({
  providedIn: 'root'
})
export class MapService {

   map;
  constructor(private http: HttpClient) { }
  getMap(idMap: string){
    if(this.map){
      return this.map;    
    }else{
     return  this.map = 
     new Map({
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
  }
}

}
