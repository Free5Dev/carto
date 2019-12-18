import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { BookmarkerComponent } from './bookmarker/bookmarker.component';
import { ZoomSliderComponent } from './zoom-slider/zoom-slider.component';
import { FullScreenComponent } from './full-screen/full-screen.component';
import { PrintControlComponent } from './print-control/print-control.component';
import { LayerListComponent } from './layer-list/layer-list.component';
import { BaselayerListComponent } from './baselayer-list/baselayer-list.component';
import { LayerItemComponent } from './layer-item/layer-item.component';
import { WmsComponent } from './wms/wms.component';
import { WfsComponent } from './wfs/wfs.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    BookmarkerComponent,
    ZoomSliderComponent,
    FullScreenComponent,
    PrintControlComponent,
    LayerListComponent,
    BaselayerListComponent,
    LayerItemComponent,
    WmsComponent,
    WfsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
