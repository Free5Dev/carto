import { Component, OnInit } from '@angular/core';
import VectorSource from 'ol/source/Vector';
import {WFS, GeoJSON} from 'ol/format';
import { MapService } from '../map.service';
import {
  equalTo as equalToFilter,
  like as likeFilter,
  and as andFilter
} from 'ol/format/filter';
import View from 'ol/View';

@Component({
  selector: 'app-hta',
  templateUrl: './hta.component.html',
  styleUrls: ['./hta.component.scss']
})
export class HtaComponent implements OnInit {
  vectorSource = new VectorSource();
  zoomVectorSource = new VectorSource();
  searchHta: string = "DEH-3000008478";
  searchFeatures: string;
  zoomMe;
  constructor(private mapService: MapService) { }

  ngOnInit() {
  }
  // getVectorzoomVectorSource 
  getzoomVectorSource (){
    return new VectorSource();
  }
  // getfeatureRequest
  getfeatureRequest(){
    return new WFS().writeGetFeature({
      srsName: 'EPSG:3857',
      featurePrefix: 'syspo',
      featureTypes: ['troncon_hta_depart'],
      outputFormat: 'application/json',
      filter:       equalToFilter('departhta_id', (document.getElementById('searchHta') as HTMLFormElement).value)
    });
  }
  // fetch
  getFetch(){
    return fetch('http://syspo.prj.mag.phedre.fr:8080/geoserver/wfs?', {
      method: 'POST',
      body: new XMLSerializer().serializeToString(this.getfeatureRequest())
    }).then((response) => {
      return response.json();
    }).then((json) => {
      var features = new GeoJSON().readFeatures(json);
      console.log(features);
      console.log(features.length);
      if(features.length !== 0){
        console.log('La valeur "'+(document.getElementById('searchHta') as HTMLFormElement).value+'" existe dans Hta de depart et renvoi :'+features.length+' Object(s)');
        //this.searchFeatures = 'La valeur "'+(document.getElementById('searchHta') as HTMLFormElement).value+'" existe dans Hta de depart et renvoi :'+features.length+' Object(s)';
      }else{
        console.log('La valeur "'+(document.getElementById('searchHta') as HTMLFormElement).value+'" n\'existe pas  dans Hta Depart');
        //this.searchFeatures = 'La valeur "'+(document.getElementById('searchHta') as HTMLFormElement).value+'" n\'existe pas  dans Hta Depart';
        // function onZoomMe
        
      }
      this.zoomVectorSource.clear();
      this.zoomVectorSource.addFeatures(features);
    });
  }
  onClickMe(){
    this.getFetch();
  }
  onZoomMe(){
    this.getFetch();
    this.mapService.getMap('map').getView().fit(this.zoomVectorSource.getExtent(), {
          padding: [20,20,20,20]
    })
  }
  onFilterMe(){
    console.log('Filter');
  }
}
