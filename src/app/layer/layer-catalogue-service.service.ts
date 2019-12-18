import { Injectable } from '@angular/core';
import { LayerModel } from './model/layer-model.model';
import { IgnLayerModel } from './model/ign-layer-model.model';
import { XYZLayerModel } from './model/xyzlayer-model.model';


@Injectable({
  providedIn: 'root'
})
export class LayerCatalogueServiceService {
  availableLayers: LayerModel[];
  length: number;
  constructor() {
    this.availableLayers.push(new IgnLayerModel( 'choisirgeoportail', 'plan', true, 'ign_fond', 'Fond IGN'));
  }

}
