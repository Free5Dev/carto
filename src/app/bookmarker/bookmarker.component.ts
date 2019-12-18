import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';
import BookmarkCtrl from 'ol-ext/control/GeoBookmark';
import { fromLonLat } from 'ol/proj';


@Component({
  selector: 'app-bookmarker',
  templateUrl: './bookmarker.component.html',
  styleUrls: ['./bookmarker.component.css']
})
export class BookmarkerComponent implements OnInit {
  
  map;
  bm;


  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.map = this.mapService.getMap();
    this.map.addControl(this.getBookmarks());
  }
  getBookmarks(){
    return this.bm = new BookmarkCtrl ({ 
      marks: {
        "Paris": {center:fromLonLat([2.351828, 48.856578]), zoom:11, permanent: true },
        "London": {center:fromLonLat([-0.1275,51.507222]), zoom:11, permanent: true },
        "Geneve": {center:fromLonLat([6.149985,46.200013]), zoom:13, permanent: true },
      },
      placeholder: "Ajouter un GeoMark..."
    });
  }
}
