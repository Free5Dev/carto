import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';
import LayerSwitcher from 'ol-ext/control/LayerSwitcher';


@Component({
  selector: 'app-layer-switcher',
  templateUrl: './layer-switcher.component.html',
  styleUrls: [
    '../../../node_modules/ol-ext/dist/ol-ext.css',
    '../../../node_modules/ol/ol.css',
    './layer-switcher.component.css'
  ]
})
export class LayerSwitcherComponent implements OnInit {

  layerSwitcher;
  map;
  
  constructor(private mapService: MapService) {
    
  }

  ngOnInit() {
    this.map = this.mapService.getMap();
    this.map.addControl(this.getLayerSwitcher());
  }
  // getLayerSwitcher 
  getLayerSwitcher(){
    return this.layerSwitcher = new  LayerSwitcher({
      displayInLayerSwitcher: function(l) { return true },
      show_progress:true,
      extent: true,
      trash: true,
      mouseover: true,
      reordering: true,
      oninfo: function (l) { alert(l.get("title")); }
    }); 
  }
  
 
}
