import { Component, OnInit, Input } from '@angular/core';
import { MapService } from '../map.service';
import Collection from 'ol/Collection';
import View from 'ol/View';

@Component({
  selector: 'app-layer-item',
  templateUrl: './layer-item.component.html',
  styleUrls: ['./layer-item.component.css']
})
export class LayerItemComponent implements OnInit {

  constructor(private mapService: MapService) { }
  map;
  layer;
  @Input() layerId='';
  @Input() resolutionOk=true;

  ngOnInit() {
    this.map = this.mapService.getMap();
    var all_layers = this.map.getLayers().getArray();
    for (var j=0; j<all_layers.length; j++) {
      if (all_layers[j].get('id') === this.layerId) {
        this.layer=all_layers[j];
        break;
      }
    }
    return this.layer;
  }

  onChecked(event)
  {
    this.layer.set('visible',event.target.checked);
  }
  viewChange(resolutionOk) {
    if (!this.mapService.getMap()) return true;
    var res =this.mapService.getMap().getView().getResolution();
    // resolutionOk.getMaxResolution() <= 3527.777777777778 || resolutionOk.getMinResolution() >= 3.527777777777778
    if (resolutionOk.getMaxResolution() <= res || resolutionOk.getMinResolution() >= res) {
      return false;
    } 
  }
}
