import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';
import ZoomSlider from 'ol/control/ZoomSlider';


@Component({
  selector: 'app-zoom-slider',
  templateUrl: './zoom-slider.component.html',
  styleUrls: [
    '../../../node_modules/ol-ext/dist/ol-ext.css',
    '../../../node_modules/ol/ol.css',
    './zoom-slider.component.css'
  ]
})
export class ZoomSliderComponent implements OnInit {
  zoom;

  constructor(private mapService: MapService) { }

  ngOnInit() {
    const map = this.mapService.getMap();
     // add zoom 
     map.addControl(this.getZoomSlider());
  }
  getZoomSlider(){
    return this.zoom = new ZoomSlider();
  }

}
