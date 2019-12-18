import { Component, OnInit, Input } from '@angular/core';
import { MapService } from '../map.service';
import Collection from 'ol/Collection';

@Component({
  selector: 'app-baselayer-list',
  templateUrl: './baselayer-list.component.html',
  styleUrls: ['./baselayer-list.component.css']
})
export class BaselayerListComponent implements OnInit {
  map;
  layers;
  layer;
  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.map = this.mapService.getMap();
    var all_layers = this.map.getLayers().getArray();
    var base_layers = new Collection();
    for (var j=0; j<all_layers.length; j++) {
      if (all_layers[j].get('baseLayer')) {
        base_layers.push(all_layers[j]);
      }
    }
    this.layers = base_layers.getArray();
    return this.layers;
  }
  onRadio(event){
    for(this.layer of this.layers){
      // document.getElementById('layer').value !== this.layer.get('title ')
      // (document.getElementById('layer').checked = true) !== this.layer.get('title ')
      // let inputRadio = (document.querySelector('input').checked = true ) ;
      // if(this.layer.get('title') === inputRadio){
      //   this.layer.set('visible', event.target.checked = true) ; 
      // }else{
      //   this.layer.set('visible', event.target.checked = false);

      // }

      if(event.target.checked){
        this.layer.set('visible', event.target.checked = true) ; 
      }else{
        this.layer.set('visible', event.target.checked = false) ; 
      }
    }
  }

}
