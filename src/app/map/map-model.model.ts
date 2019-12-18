import Map from 'ol/Map';
import { LayerCatalogueServiceService } from '../layer/layer-catalogue-service.service';

export class MapModel {
    id: string;
    title: string[] ;
    constructor(private layerCatalogueService: LayerCatalogueServiceService){
       
    }
    
}
