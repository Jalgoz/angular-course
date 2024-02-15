import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as mapboxgl from 'mapbox-gl';
(mapboxgl as any).accessToken =
  'pk.eyJ1IjoiamFsZ296IiwiYSI6ImNsc204ZjAzejBrN2Iya21obzg0YTQxZnMifQ.VFdgTK2yZxcgNiXsdTQsvw';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { SideMenuComponent } from '../alone/components/side-menu/side-menu.component';

@NgModule({
  declarations: [
    MiniMapComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    ZoomRangePageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
  ],
  imports: [CommonModule, MapsRoutingModule, SideMenuComponent],
})
export class MapsModule {}
