import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';
import Print from 'ol-ext/control/Print';
@Component({
  selector: 'app-print-control',
  templateUrl: './print-control.component.html',
  styleUrls: ['./print-control.component.css']
})
export class PrintControlComponent implements OnInit {

  print ; 

  constructor(private mapService: MapService) { }

  ngOnInit() {
    const map = this.mapService.getMap();
    map.addControl(this.getPrint());
  }
  getPrint(){
    return this.print = new Print();
  }
 
}
