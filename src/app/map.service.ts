import { Injectable } from '@angular/core';
import Map from 'ol/Map';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';
import 'ol/ol.css';
import Stamen from 'ol/source/Stamen';
import Group from 'ol/layer/Group';
import TileWMS from 'ol/source/TileWMS';
import { MapModel } from './map/map-model.model';
import { LayerCatalogueServiceService } from './layer/layer-catalogue-service.service';
import { IgnLayerModel } from './layer/model/ign-layer-model.model';
import Geoportail from 'ol-ext/layer/Geoportail';
import ImageLayer from 'ol/layer/Image';
import ImageWMS from 'ol/source/ImageWMS';
import { IdentificateurService } from './identificateur.service';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  map;
  layerSwitcherImage;
  vectorSource;
  vector;
  baseLayers ;
  labels;
  brgm;
  // availableModels: MapModel[];


  constructor(private identificateurService: IdentificateurService) {
    // this.availableModels.push(new MapModel( "model1", ["ign_fondplan"] )); 
    // this.availableModels.push(new MapModel( "model2", ["xyz_basemap"] )); 
    // this.identificateurService.getSingleClick('singleclick');
    // 
    // this.identificateurService.getPointerMove('pointermove');


   }
  
  // function getMap
  getMap(){
    if(this.map){
      return this.map;    
    }else{
      return this.map = new Map({
        target: 'map',
        layers: [
          //this.getBaseLayers(),
          
            new Tile ({
              title: "Watercolor",
              baseLayer: true,
              source: new Stamen({ layer: 'watercolor' })
            }),
            new Tile({
              title: "Toner",
              baseLayer: true,
              visible: false,
              source: new Stamen({ layer: 'toner' })
            }),
            new Tile({
              title: "OSM",
              baseLayer: true,
              source: new OSM(),
              visible: false
            }),
            
          
          this.getBrgm(),
          this.getLabels(), 
        ],
        view: new View({
          center: fromLonLat([37.41, 8.82]),
          zoom: 4
        })
      });
    }
  }
  // An overlay that stay on top
  getLabels(){
    return this.labels = new Tile({
      id: 'label',
      title: "Labels (on top)",
      allwaysOnTop: true,			
      noSwitcherDelete: true,		
      source: new Stamen({ layer: 'terrain-labels' })
    });
  }
  // get group 
  getBaseLayers(){
    return this.baseLayers = new Group({
      title: 'Base Layers',
      openInLayerSwitcher: true,
      layers: [
        new Tile ({
          title: "Watercolor",
          baseLayer: false,
          source: new Stamen({ layer: 'watercolor' })
        }),
        new Tile({
          title: "Toner",
          baseLayer: true,
          visible: false,
          source: new Stamen({ layer: 'toner' })
        }),
        new Tile({
          title: "OSM",
          baseLayer: true,
          source: new OSM(),
          visible: false
        })
        
      ]
    });
  }
  // get brgm
 getBrgm(){
  return this.brgm = new Tile ({
    id: "geologie",
    title: "GEOLOGIE",
    extent: [
      -653182.6969582437,
      5037463.842847037,
      1233297.5065495989,
      6646432.677299531
    ],
    minResolution: 3.527777777777778,
    maxResolution: 3527.777777777778,
    source: new TileWMS({
      url: "https://geoservices.brgm.fr/geologie",
      projection: "EPSG:3857",
      params: {
        LAYERS: "GEOLOGIE",
        FORMAT: "image/png",
        VERSION: "1.3.0"
      },
      attributions: [
        "<a href='http://www.brgm.fr/'>&copy; Brgm</a>"
      ]
    })
  });
  }
  
  
  
}
