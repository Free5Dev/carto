import { LayerModel } from './layer-model.model';
import  Geoportail  from 'ol-ext/layer/Geoportail';
export class IgnLayerModel extends LayerModel{
    gppKey: string;
    className: string;

    constructor(gppKey, className, isBaseLayer,id, title  ){

        super(id,title, isBaseLayer);
        this.gppKey=gppKey;
        this.className=className;

    }
    createLayer(){
        return Geoportail(this.title, {
            gppKey: this.gppKey,
            className: this.className
        });
    }
}
