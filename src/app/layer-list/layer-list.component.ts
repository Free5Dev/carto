import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';

@Component({
  selector: 'app-layer-list',
  templateUrl: './layer-list.component.html',
  styleUrls: ['./layer-list.component.css']
})
export class LayerListComponent implements OnInit {
  map;
  layers;
  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.map = this.mapService.getMap();
    this.layers = this.map.getLayers().getArray();
    return this.layers;
  }

 
}
