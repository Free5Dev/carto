import { LayerModel } from './layer-model.model';
import XYZ from 'ol/source/XYZ';
export class XYZLayerModel extends LayerModel{
    url: string;

    constructor(url, id, title, isBaseLayer){
        super(id, title, isBaseLayer);
        this.url=url;
    }
    createLayer(){
        return XYZ(this.url);
    }
    
}
