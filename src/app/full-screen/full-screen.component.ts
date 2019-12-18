import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';
import FullScreen from 'ol/control/FullScreen';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.css']
})
export class FullScreenComponent implements OnInit {

  full;

  constructor(private mapService: MapService) { }

  ngOnInit() {
    const map = this.mapService.getMap();
    // add fullScreen
    this.newMethod(map);
  }
  private newMethod(map: any) {
    map.addControl(this.getFullScreen());
  }

  getFullScreen()
  {
    return this.full = new FullScreen({
      tipLabel: "Plein Ecran"
    });
  }
}
