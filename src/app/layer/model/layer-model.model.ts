export class LayerModel {
    id: string;
    title: string;
    isBaseLayer: boolean;
    minZoom: string;
    maxZoom: string;

    constructor(id, title, isBaseLayer){
        this.id=id;
        this.title=title;
        this.isBaseLayer=isBaseLayer;
    }
    createLayer(){
        return null;
    }
}
