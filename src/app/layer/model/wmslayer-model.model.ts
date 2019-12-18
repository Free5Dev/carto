import { LayerModel } from './layer-model.model';

export class WMSLayerModel extends LayerModel{
    projection: string;
    url: string;
    layer: string;
    serverType: string;
    optParams: string;
    availableStyles: string[];

    constructor(projection, url, layer, serverType, optParams, availableStyles, id, title, isBaseLayer){
        super(id, title, isBaseLayer);
        this.projection=projection;
        this.url=url;
        this.serverType=serverType;
        this.optParams=optParams;
        this.availableStyles=availableStyles;
    }
    createLayer(){
        return null;
    }
}
