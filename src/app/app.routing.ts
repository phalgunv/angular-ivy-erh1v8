import { Routes } from '@angular/router';

import { HelloComponent } from './hello.component';
import { SlideInPanelComponent } from './slideinpanel/slideinpanel.component';

export const AppRoutes: Routes = [
  {
    path: 'hello',
    component: HelloComponent
  },
  {
    path: 'slideinpanel',
    component: SlideInPanelComponent
  }
];
