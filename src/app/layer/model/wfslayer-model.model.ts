import { LayerModel } from './layer-model.model';

export class WFSLayerModel extends LayerModel{
    projection: string;
    url: string; 
    format: string;
    strategy: string;
    layers: string []; 

    constructor(projection, url, format, strategy, layers, id, title, isBaseLayer){
        super(id, title, isBaseLayer);
        this.projection=projection;
        this.url=url;
        this.format=format;
        this.strategy=strategy;
        this.layers=layers;
    }
    createLayer(){
        return null;
    }
}
